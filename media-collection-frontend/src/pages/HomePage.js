import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getAllMedia } from '../services/Api';
import axios from 'axios';

const HomePage = ({ currentUser }) => {
  const [mediaByType, setMediaByType] = useState({
    book: [],
    movie: [],
    anime: [],
    manga: [],
    show: [],
  });
  const [userReviews, setUserReviews] = useState([]);
  const [userCollection, setUserCollection] = useState({});

  useEffect(() => {
    const fetchMedia = async () => {
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

    fetchMedia();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser?.id) {
        setUserReviews([]);
        setUserCollection({});
        return;
      }

      try {
        const [reviewsRes, collectionRes] = await Promise.all([
          axios.get(`http://localhost:8080/api/v2/users/${currentUser.id}/reviews`),
          axios.get(`http://localhost:8080/api/v2/users/${currentUser.id}/collection`),
        ]);

        setUserReviews(reviewsRes.data || []);
        setUserCollection(collectionRes.data || {});
      } catch (err) {
        console.error('Failed to fetch user data:', err);
      }
    };

    fetchUserData();
  }, [currentUser]);

  const getReviewForMedia = (media) => {
    return userReviews.find(r => media.reviewIds?.includes(r.id));
  };

  const getMyCollectionMedia = () => {
    const allMedia = Object.values(mediaByType).flat();
    const mediaIdSet = new Set();

    Object.entries(userCollection).forEach(([type, ids]) => {
      ids.forEach(id => mediaIdSet.add(id));
    });

    return allMedia.filter(media =>
      mediaIdSet.has(media.imdbId || media.malId || media.isbn || media.id)
    );
  };

  const RenderSection = ({ type, label, emoji, customList }) => {
    const list = customList || mediaByType[type];
    const scrollRef = useRef(null);

    if (!list.length) return null;

    const scroll = (direction) => {
      const container = scrollRef.current;
      const scrollAmount = 300;

      if (container) {
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    return (
      <div key={type} className="media-section" style={{ marginBottom: '2rem', position: 'relative' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{emoji} {label}</h2>

        <div style={{ position: 'relative' }}>
          <button onClick={() => scroll('left')} style={{ position: 'absolute', left: 0, top: '35%', zIndex: 10, background: '#fff', border: '1px solid #ccc', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer' }}>‹</button>

          <div ref={scrollRef} className="scroll-container" style={{ display: 'flex', overflowX: 'auto', gap: '1rem', scrollSnapType: 'x mandatory', padding: '0.5rem 2.5rem' }}>
            {list.map((media) => {
              const review = getReviewForMedia(media);
              return (
                <Link key={`${media.id}-${media.type}`} to={`/media/${media.type}/${media.id}`} style={{ flex: '0 0 auto', scrollSnapAlign: 'start', border: '1px solid #ccc', borderRadius: '8px', width: '180px', textDecoration: 'none', color: 'inherit', overflow: 'hidden', background: '#fff' }}>
                  <img src={media.poster || media.coverImage} alt={media.title} style={{ width: '100%', height: '270px', objectFit: 'cover' }} />
                  <div style={{ padding: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>{media.title}</h3>
                    {media.author && <p style={{ fontSize: '0.85rem', margin: '0.25rem 0' }}><strong>Author:</strong> {media.author}</p>}
                    {media.releaseDate && <p style={{ fontSize: '0.85rem', margin: '0.25rem 0' }}><strong>Release date:</strong> {media.releaseDate}</p>}
                    {media.publishedDate && <p style={{ fontSize: '0.85rem', margin: '0.25rem 0' }}><strong>Published date:</strong> {media.publishedDate}</p>}
                    {media.genres?.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.25rem' }}>
                        {media.genres.slice(0, 3).map((genre) => (
                          <span key={genre} style={{ backgroundColor: '#eee', fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{genre}</span>
                        ))}
                      </div>
                    )}
                    {review && (
                      <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontStyle: 'italic', color: '#555' }}>
                        "{review.body}"
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          <button onClick={() => scroll('right')} style={{ position: 'absolute', right: 0, top: '35%', zIndex: 10, background: '#fff', border: '1px solid #ccc', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer' }}>›</button>
        </div>
      </div>
    );
  };

  return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
          {['book', 'movie', 'anime', 'manga', 'show'].map((type) => (
              <RenderSection
                  key={type}
                  type={type}
                  label={type.charAt(0).toUpperCase() + type.slice(1)}
                  emoji="📚" // You can customize this per type if you want
              />
          ))}
      </div>
  );

};

export default HomePage;
