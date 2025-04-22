import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllMedia, createMedia } from '../services/Api';

const AddMediaPage = () => {
  const [allMedia, setAllMedia] = useState([]);
  const [userMedia, setUserMedia] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [comments, setComments] = useState({});
  const navigate = useNavigate();

  const loggedInUserId = localStorage.getItem('loggedInUserId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mediaRes = await getAllMedia();
        const { books = [], movies = [], shows = [], mangas = [], animes = [] } = mediaRes.data;

        const withType = (items, type) =>
          items.map(item => ({
            ...item,
            type,
          }));

        const combined = [
          ...withType(books, 'book'),
          ...withType(movies, 'movie'),
          ...withType(shows, 'show'),
          ...withType(mangas, 'manga'),
          ...withType(animes, 'anime'),
        ];

        setAllMedia(combined);
      } catch (error) {
        console.error('Error loading media:', error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = async (media) => {
    const existing = localStorage.getItem('userMedia');
    const parsed = existing ? JSON.parse(existing) : [];

    if (parsed.some(item => item.id === media.id)) {
      alert("This item is already in your collection.");
      return;
    }

    const itemToAdd = {
      ...media,
      comment: comments[media.id] || '',
      status: media.type === 'book' || media.type === 'manga' ? 'not read' : 'not watched',
    };

    const updated = [...parsed, itemToAdd];
    localStorage.setItem('userMedia', JSON.stringify(updated));
    alert('Added to your collection!');
    navigate('/');
  };

  const handleCommentChange = (id, text) => {
    setComments(prev => ({ ...prev, [id]: text }));
  };

  const filtered = allMedia.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getKey = (media) => {
    switch (media.type) {
      case 'book': return `${media.isbn}-book`;
      case 'movie': return `${media.imdbId}-movie`;
      case 'show': return `${media.imdbId}-show`;
      case 'anime': return `${media.malId}-anime`;
      case 'manga': return `${media.malId}-manga`;
      default: return `${media.id}-${media.type}`;
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Search & Add Media</h2>
      <input
        type="text"
        placeholder="Search media..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />

      {filtered.length === 0 && <p>No media found.</p>}

      <div className="media-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filtered.map((media) => (
          <div
            key={getKey(media)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '180px',
              background: '#fff',
              overflow: 'hidden'
            }}
          >
            <img
              src={media.poster || media.coverImage}
              alt={media.title}
              style={{ width: '100%', height: '270px', objectFit: 'cover' }}
            />
            <div style={{ padding: '0.5rem' }}>
              <h3 style={{ fontSize: '1rem', margin: '0 0 0.25rem' }}>{media.title}</h3>
              <p style={{ fontSize: '0.8rem', margin: '0 0 0.25rem' }}><strong>Type:</strong> {media.type}</p>
              {media.genres?.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.25rem' }}>
                  {media.genres.slice(0, 3).map(genre => (
                    <span key={genre} style={{ fontSize: '0.7rem', background: '#eee', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{genre}</span>
                  ))}
                </div>
              )}
              {media.author && <p style={{ fontSize: '0.8rem' }}><strong>Author:</strong> {media.author}</p>}
              {(media.releaseDate || media.publishedDate) && (
                <p style={{ fontSize: '0.8rem' }}><strong>Date:</strong> {media.releaseDate || media.publishedDate}</p>
              )}
              {media.comment && (
                <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#555' }}>Comment: {media.comment}</p>
              )}
              <textarea
                rows={2}
                placeholder="Add a comment..."
                value={comments[media.id] || ''}
                onChange={(e) => handleCommentChange(media.id, e.target.value)}
                style={{ width: '100%', margin: '0.25rem 0' }}
              />
              <button onClick={() => handleAdd(media)} style={{ width: '100%' }}>+ Add to My Collection</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddMediaPage;
