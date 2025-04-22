import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllMedia } from '../services/Api';
import ReviewForm from '../components/ReviewForm';

const MediaDetailPage = () => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await getAllMedia();
        const { books = [], movies = [], shows = [], mangas = [], animes = [] } = response.data;

        const normalize = (items, type, idKey) =>
          items.map(item => ({
            ...item,
            type,
            id: String(item[idKey]), // safely convert to string
          }));

        const allMedia = [
          ...normalize(books, 'book', 'isbn'),
          ...normalize(movies, 'movie', 'id'),
          ...normalize(shows, 'show', 'id'),
          ...normalize(mangas, 'manga', 'malId'),
          ...normalize(animes, 'anime', 'malId'),
        ];

        const found = allMedia.find(item => item.id === id);
        setMedia(found);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    fetchMedia();
  }, [id]);

  if (!media) {
    return <p className="text-center text-red-500 mt-8">Media not found.</p>;
  }

  const {
    title,
    author,
    cast,
    genres,
    description,
    publishedDate,
    releaseDate,
    trailerLink,
    poster,
    coverImage,
    backdrops,
    imdb,
    isbn,
    amountOfChapters,
    amountOfVolumes,
    episodes,
    seasons
  } = media;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>

      <div className="flex gap-6 flex-col md:flex-row">
        <img
          src={poster || coverImage}
          alt={`${title} cover`}
          className="w-60 rounded shadow-md"
        />

        <div className="flex-1 space-y-2">
          {author && <p><strong>Author:</strong> {author}</p>}
          {cast && <p><strong>Cast:</strong> {cast.join(', ')}</p>}
          {isbn && <p><strong>ISBN:</strong> {isbn}</p>}
          {publishedDate && <p><strong>Published:</strong> {publishedDate}</p>}
          {releaseDate && <p><strong>Released:</strong> {releaseDate}</p>}
          {genres?.length > 0 && (
            <div>
              <strong>Genres:</strong>{' '}
              <span className="flex flex-wrap gap-2 mt-1">
                {genres.map(g => (
                  <span key={g} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">{g} </span>
                ))}
              </span>
            </div>
          )}
          {description && <p><strong>Description:</strong> {description}</p>}
          {amountOfChapters && <p><strong>Chapters:</strong> {amountOfChapters}</p>}
          {amountOfVolumes && <p><strong>Volumes:</strong> {amountOfVolumes}</p>}
          {episodes !== undefined && <p><strong>Episodes:</strong> {episodes}</p>}
          {seasons !== undefined && <p><strong>Seasons:</strong> {seasons}</p>}
          {imdb?.rating && (
            <p><strong>IMDB:</strong> {imdb.rating} ⭐️ ({imdb.votes?.toLocaleString?.()} votes)</p>
          )}
          {trailerLink && (
            <a
              href={trailerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600"
            >
              Watch Trailer
            </a>
          )}
        </div>
      </div>

      {backdrops?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {backdrops.map((img, idx) => (
              <img key={idx} src={img} alt="Backdrop" className="rounded shadow" />
            ))}
          </div>
        </div>
      )}


    </div>
  );
};

export default MediaDetailPage;
