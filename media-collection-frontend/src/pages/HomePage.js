import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MediaCard from '../components/MediaCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';

const HomePage = () => {
  const [mediaList, setMediaList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ type: [], status: '' });

  const navigate = useNavigate();

  // Handle comment changes
  const handleCommentChange = (id, newComment) => {
    const updatedList = mediaList.map(item =>
      item.id === id ? { ...item, comment: newComment } : item
    );
    setMediaList(updatedList);
    localStorage.setItem('userMedia', JSON.stringify(updatedList));
  };

  const handleDelete = (id) => {
    const updated = mediaList.filter(item => item.id !== id);
    setMediaList(updated);
    localStorage.setItem('userMedia', JSON.stringify(updated));
  };

  const handleToggleStatus = (id, newStatus) => {
    const updatedList = mediaList.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setMediaList(updatedList);
    localStorage.setItem('userMedia', JSON.stringify(updatedList));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  // Filter logic
  useEffect(() => {
    let result = [...mediaList];

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

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('userMedia');
    if (saved) {
      setMediaList(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <FilterPanel filters={filters} onChange={setFilters} />

      <div className="media-list">
        {filteredList.map((media) => (
          <MediaCard
            key={media.id + media.title}
            media={media}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onToggleStatus={handleToggleStatus}
            onCommentChange={handleCommentChange}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
