import { Link } from 'react-router-dom';


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

  const cardStyle = {
    backgroundColor: isBookOrManga? '#e0f7fa' : '#fff3e0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    width: '200px',
  };

  return (
    <Link to={`/media/${type}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="media-card" style={cardStyle} onClick={(e) => e.stopPropagation()}>
        <h3>
          {type === 'book' || type === 'manga' ? '📖' : '🎬'} {title}
        </h3>
        <p>Type: {type}</p>
        <p>Status: {status || 'Not set'}</p>

        <label>
          <input
            type="checkbox"
            checked={isMarked}
            onChange={(e) => {
              e.stopPropagation(); // prevent navigation
              handleStatusChange(e);
            }}
          />
          Mark as {isBookOrManga ? 'Read' : 'Watched'}
        </label>

        <div style={{ marginTop: '1rem' }}>
          <textarea
            placeholder="Add a comment..."
            value={comment}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation(); // prevent navigation
              handleCommentInput(e);
            }}
            rows={2}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div style={{ marginTop: '0.5rem' }}>
          <button onClick={(e) => { e.stopPropagation(); onEdit?.(id); }}>Edit</button>{' '}
          <button onClick={(e) => { e.stopPropagation(); onDelete?.(id); }}>Delete</button>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;

