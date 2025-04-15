const MediaCard = ({ media, onToggleStatus, onDelete, onEdit }) => {
  const { id, title, type, status } = media;

  // Determine labels and next toggle state based on type
  const isBook = type === 'book';
  const isMovie = type === 'movie';

  const isMarked = status === 'watched' || status === 'read';

  const handleStatusChange = () => {
    const newStatus = isMarked
      ? isBook ? 'not read' : 'not watched'
      : isBook ? 'read' : 'watched';

    onToggleStatus(id, newStatus);
  };

  // Optional styling (customize later in CSS or styled-components)
  const cardStyle = {
    backgroundColor: isBook ? '#e0f7fa' : '#fff3e0',
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
  };

  return (
    <div className="media-card" style={cardStyle}>
      <h3>
        {isBook ? '📖' : '🎬'} {title}
      </h3>
      <p>Type: {type}</p>
      <p>Status: {status}</p>

      <label>
        <input
          type="checkbox"
          checked={isMarked}
          onChange={handleStatusChange}
        />
        Mark as {isBook ? 'Read' : 'Watched'}
      </label>

      <div style={{ marginTop: '0.5rem' }}>
        <button onClick={() => onEdit?.(id)}>Edit</button>{' '}
        <button onClick={() => onDelete?.(id)}>Delete</button>
      </div>
    </div>
  );
};

export default MediaCard;