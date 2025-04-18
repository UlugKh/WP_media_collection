import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllMedia } from '../services/Api';

const AddMediaPage = () => {
  const [allMedia, setAllMedia] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [comments, setComments] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllMedia();
        const { books = [], movies = [], shows = [], mangas = [], animes = [] } = response.data;

        const withType = (items, type) =>
          items.map(item => ({
            ...item,
            id: item.id || (typeof item._id === 'object' ? item._id.$oid : item._id?.toString?.()),
            type,
          }));

        const combined = [
          ...withType(books, 'book'),
          ...withType(movies, 'movie'),
          ...withType(shows, 'show'),
          ...withType(mangas, 'manga'),
          ...withType(animes, 'anime')
        ];

        setAllMedia(combined);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = (media) => {
    const userMedia = JSON.parse(localStorage.getItem('userMedia')) || [];

    // Avoid adding duplicates
    if (userMedia.find(item => item.id === media.id)) {
      alert("This item is already in your collection.");
      return;
    }

    const itemToAdd = {
      ...media,
      comment: comments[media.id] || '',
      status: media.type === 'book' || media.type === 'manga' ? 'not read' : 'not watched'
    };

    const updated = [...userMedia, itemToAdd];
    localStorage.setItem('userMedia', JSON.stringify(updated));
    navigate('/');
  };

  const handleCommentChange = (id, text) => {
    setComments(prev => ({ ...prev, [id]: text }));
  };

  const filtered = allMedia.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search & Add Media</h2>
      <input
        type="text"
        placeholder="Search media..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />

      {filtered.length === 0 && <p>No media found.</p>}

      <div className="media-list">
        {filtered.map((media) => (
          <div key={media.id + media.title} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
          }}>
            <h3>{media.title} ({media.type})</h3>
            <textarea
              rows={2}
              placeholder="Add a comment..."
              value={comments[media.id] || ''}
              onChange={(e) => handleCommentChange(media.id, e.target.value)}
              style={{ width: '100%', marginBottom: '0.5rem' }}
            />
            <button onClick={() => handleAdd(media)}>+ Add to My Collection</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddMediaPage;
