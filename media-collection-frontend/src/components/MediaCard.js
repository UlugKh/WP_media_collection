import { Link } from 'react-router-dom';
import './app.css'; // Make sure this is importing your CSS

const MediaCard = ({ media, onToggleStatus, onDelete, onEdit, onCommentChange }) => {
  const { id, title, type, status, comment = '' } = media;

  const isBookOrManga = type === 'book' || type === 'manga';
  const isMarked = status === 'watched' || status === 'read';

  const handleStatusChange = () => {
    const newStatus = isMarked
        ? isBookOrManga ? 'not read' : 'not watched'
        : isBookOrManga ? 'read' : 'watched';

    onToggleStatus(id, newStatus);
  };

  const handleCommentInput = (e) => {
    onCommentChange?.(id, e.target.value);
  };

  return (
      <Link to={`/media/${type}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div
            className={`card ${isBookOrManga ? 'book-card' : 'movie-card'}`}
            onClick={(e) => e.stopPropagation()}
        >
          <h3>
            {isBookOrManga ? '📖' : '🎬'} {title}
          </h3>
          <p>Type: {type}</p>
          <p>Status: {status || 'Not set'}</p>

          <label>
            <input
                type="checkbox"
                checked={isMarked}
                onChange={(e) => {
                  e.stopPropagation();
                  handleStatusChange();
                }}
            />
            Mark as {isBookOrManga ? 'Read' : 'Watched'}
          </label>

          <div className="comment-section">
          <textarea
              placeholder="Add a comment..."
              value={comment}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {
                e.stopPropagation();
                handleCommentInput(e);
              }}
              rows={2}
              className="comment-box"
          />
          </div>

          <div className="action-buttons">
            <button onClick={(e) => { e.stopPropagation(); onEdit?.(id); }}>Edit</button>
            <button onClick={(e) => { e.stopPropagation(); onDelete?.(id); }}>Delete</button>
          </div>
        </div>
      </Link>
  );
};

export default MediaCard;
