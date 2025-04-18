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
    backgroundColor: isBookOrManga ? '#e0f7fa' : '#fff3e0',
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
  };

  return (
    <div className="media-card" style={cardStyle}>
      <h3>
        {type === 'book' || type === 'manga' ? '📖' : '🎬'} {title}
      </h3>
      <p>Type: {type}</p>
      <p>Status: {status || 'Not set'}</p>

      <label>
        <input
          type="checkbox"
          checked={isMarked}
          onChange={handleStatusChange}
        />
        Mark as {isBookOrManga ? 'Read' : 'Watched'}
      </label>

      <div style={{ marginTop: '1rem' }}>
        <textarea
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentInput}
          rows={2}
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>

      <div style={{ marginTop: '0.5rem' }}>
        <button onClick={() => onEdit?.(id)}>Edit</button>{' '}
        <button onClick={() => onDelete?.(id)}>Delete</button>
      </div>
    </div>
  );
};

export default MediaCard;

