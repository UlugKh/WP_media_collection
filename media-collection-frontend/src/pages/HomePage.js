import { useEffect, useState } from 'react';
import MediaCard from '../components/MediaCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';

const HomePage = () => {
  const [mediaList, setMediaList] = useState([]); // Will fetch from backend later
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ type: '', status: '' });


  useEffect(() => {
    let result = mediaList;

    if (searchTerm) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.type) {
      result = result.filter((item) => item.type === filters.type);
    }

    if (filters.status) {
      result = result.filter((item) => item.status === filters.status);
    }

    setFilteredList(result);
  }, [searchTerm, filters, mediaList]);


  useEffect(() => {
      const dummyData = [
        { id: 1, title: 'Inception', type: 'movie', status: 'watched' },
        { id: 2, title: 'Harry Potter', type: 'book', status: 'not read' },
        // add more dummy items
      ];
      setMediaList(dummyData);
    }, []);

  return (
    <div>
      <SearchBar onSearch={setSearch} />
      <FilterPanel filters={filters} onChange={setFilters} />

      <div className="media-list">
        {filteredList.map(media => (
          <MediaCard key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
};



export default HomePage;
