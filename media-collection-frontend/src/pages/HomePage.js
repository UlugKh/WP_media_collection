import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllMedia } from '../services/Api';

const HomePage = () => {
  const [mediaByType, setMediaByType] = useState({
    book: [],
    movie: [],
    anime: [],
    manga: [],
    show: [],
  });

  useEffect(() => {
    const fetchUserMedia = async () => {
      try {
        const response = await getAllMedia();
        const { books = [], movies = [], shows = [], mangas = [], animes = [] } = response.data;

        const normalize = (items, type, idKey) =>
          items.map(item => ({
            ...item,
            type,
            id: String(item[idKey]),
          }));

        const grouped = {
          book: normalize(books, 'book', 'isbn'),
          movie: normalize(movies, 'movie', 'id'),
          show: normalize(shows, 'show', 'id'),
          manga: normalize(mangas, 'manga', 'malId'),
          anime: normalize(animes, 'anime', 'malId'),
        };

        setMediaByType(grouped);
      } catch (error) {
        console.error('Failed to fetch media:', error);
      }
    };

    fetchUserMedia();
  }, []);

  const renderSection = (type, label, emoji) => {
    const list = mediaByType[type];
    if (!list.length) return null;

    return (
      <div key={type} className="media-section" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          {emoji} {label}
        </h2>
        <div
          className="media-list"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {list.map((media) => (
            <Link
              key={`${media.id}-${media.type}`}
              to={`/media/${media.type}/${media.id}`}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                width: '180px',
                textDecoration: 'none',
                color: 'inherit',
                overflow: 'hidden',
                background: '#fff',
              }}
            >
              <img
                src={media.poster || media.coverImage}
                alt={media.title}
                style={{ width: '100%', height: '270px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>
                  {media.title}
                </h3>
                {media.author && (
                  <p style={{ fontSize: '0.85rem', margin: '0.25rem 0' }}>
                    <strong>Author:</strong> {media.author}
                  </p>
                )}
                {media.releaseDate && (
                   <p style={{ fontSize: '0.85rem', margin: '0.25rem 0' }}>
                      <strong>Release date:</strong> {media.releaseDate}
                   </p>
                )}
                {media.publishedDate && (
                   <p style={{ fontSize: '0.85rem', margin: '0.25rem 0' }}>
                      <strong>Published date:</strong> {media.publishedDate}
                   </p>
                )}
                {media.genres?.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.25rem' }}>
                    {media.genres.slice(0, 3).map((genre) => (
                      <span
                        key={genre}
                        style={{
                          backgroundColor: '#eee',
                          fontSize: '0.7rem',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '4px',
                        }}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      {renderSection('book', 'Books', '📚')}
      {renderSection('movie', 'Movies', '🎬')}
      {renderSection('show', 'Shows', '📺')}
      {renderSection('manga', 'Manga', '📖')}
      {renderSection('anime', 'Anime', '🎞️')}
    </div>
  );
};

export default HomePage;