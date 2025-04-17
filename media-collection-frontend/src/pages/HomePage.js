import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MediaCard from '../components/MediaCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import { getAllMedia, updateMedia } from '../services/Api';

const HomePage = () => {
  const [mediaList, setMediaList] = useState([]); // Will fetch from backend later
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ type: [], status: '' });

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleToggleStatus = (id, newStatus) => {
    // Temporarily just update state until PUT is ready
    const updatedList = mediaList.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setMediaList(updatedList);
  };

  const handleDelete = (id) => {
    const updated = mediaList.filter(item => item.id !== id);
    setMediaList(updated);
  };

  useEffect(() => {
    let result = mediaList;

    if (searchTerm) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.type.length > 0) {
      result = result.filter((item) => filters.type.includes(item.type));
    }

    if (filters.status) {
      result = result.filter((item) => item.status === filters.status);
    }

    setFilteredList(result);
  }, [searchTerm, filters, mediaList]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllMedia();
        const { books = [], movies = [], shows = [], mangas = [], animes = [] } = response.data;

        // Add type to each item
        const typedBooks = books.map(item => ({ ...item, type: 'book', id: item.id || item._id}));
        const typedMovies = movies.map(item => ({ ...item, type: 'movie', id: item.id || item._id }));
        const typedShows = shows.map(item => ({ ...item, type: 'show', id: item.id || item._id }));
        const typedMangas = mangas.map(item => ({ ...item, type: 'manga', id: item.id || item._id }));
        const typedAnimes = animes.map(item => ({ ...item, type: 'anime', id: item.id || item._id }));

        // Combine everything into one array
        const combinedMedia = [...typedBooks, ...typedMovies, ...typedShows, ...typedMangas, ...typedAnimes];

        setMediaList(combinedMedia);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <FilterPanel filters={filters} onChange={setFilters} />

      <div className="media-list">
        {filteredList.map((media) => (
          <MediaCard
            key={media.id}
            media={media}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onToggleStatus={handleToggleStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;