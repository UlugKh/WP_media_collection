import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MediaCard from '../components/MediaCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import { getAllMedia, updateMedia, deleteMedia } from '../services/Api';

const HomePage = () => {
  const [mediaList, setMediaList] = useState([]); // Will fetch from backend later
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ type: [], status: '' });


//  const handleToggleStatus = (id, newStatus) => {
//    setMediaList(prev =>
//      prev.map(item =>
//        item.id === id ? { ...item, status: newStatus } : item
//      )
//    );
//  };

  const handleToggleStatus = (id, newStatus) => {
    const updatedList = mediaList.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setMediaList(updatedList);
    localStorage.setItem('media', JSON.stringify(updatedList));
  };

// THE ONE BELOW USED WHEN BACKEND WORKS
//  const handleToggleStatus = async (id, newStatus) => {
//    try {
//      const target = mediaList.find(item => item.id === id);
//      const updated = { ...target, status: newStatus };
//
//      await updateMedia(id, updated);
//
//      // Optimistically update UI
//      setMediaList(prev =>
//        prev.map(item =>
//          item.id === id ? updated : item
//        )
//      );
//    } catch (err) {
//      console.error('Error updating status:', err);
//    }
//  };

//  const handleDelete = (id) => {
//    setMediaList(prev => prev.filter(item => item.id !== id));
//  };

  const handleDelete = (id) => {
    const updated = mediaList.filter(item => item.id !== id);
    setMediaList(updated);
    localStorage.setItem('media', JSON.stringify(updated));
  };

  const navigate = useNavigate();
  const handleEdit = (id) => {
      navigate(`/edit/${id}`);
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


//  useEffect(() => {
//      const dummyData = [
//        { id: 1, title: 'Inception', type: 'movie', status: 'watched' },
//        { id: 2, title: 'Harry Potter', type: 'book', status: 'read' },
//        { id: 3, title: 'The Hobbit', type: 'book', status: 'not read' },
//        { id: 4, title: 'Interstellar', type: 'movie', status: 'not watched' }
//      ];
//      setMediaList(dummyData);
//    }, []);

  useEffect(() => {
    const saved = localStorage.getItem('media');
    if (saved) {
      setMediaList(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllMedia();
        setMediaList(response.data);
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