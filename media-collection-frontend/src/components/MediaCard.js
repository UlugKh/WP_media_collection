const MediaCard = ({ media, onToggleStatus, onDelete, onEdit }) => {
  const { id, title, type, status } = media;

  // Setup type-specific configurations
  const typeConfig = {
    book: {
      icon: '📖',
      readStatus: 'read',
      unreadStatus: 'not read',
      bgColor: '#e0f7fa',
      label: 'Read',
    },
    movie: {
      icon: '🎬',
      readStatus: 'watched',
      unreadStatus: 'not watched',
      bgColor: '#fff3e0',
      label: 'Watched',
    },
    anime: {
      icon: '🍥',
      readStatus: 'watched',
      unreadStatus: 'not watched',
      bgColor: '#e8eaf6',
      label: 'Watched',
    },
    manga: {
      icon: '📚',
      readStatus: 'read',
      unreadStatus: 'not read',
      bgColor: '#f3e5f5',
      label: 'Read',
    },
    show: {
      icon: '📺',
      readStatus: 'watched',
      unreadStatus: 'not watched',
      bgColor: '#ede7f6',
      label: 'Watched',
    }
  };

  console.log("Detected media type:", type);


  const config = typeConfig[type] || {
    icon: '📦',
    readStatus: 'done',
    unreadStatus: 'not done',
    bgColor: '#eeeeee',
    label: 'Done',
  };

  const isMarked = status === config.readStatus;

  const handleStatusChange = () => {
    const newStatus = isMarked ? config.unreadStatus : config.readStatus;
    onToggleStatus(id, newStatus);
  };

  const cardStyle = {
    backgroundColor: config.bgColor,
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
  };

  return (
    <div className="media-card" style={cardStyle}>
      <h3>{config.icon} {title}</h3>
      <p>Type: {type}</p>
      <p>Status: {status}</p>

      <label>
        <input
          type="checkbox"
          checked={isMarked}
          onChange={handleStatusChange}
        />
        Mark as {config.label}
      </label>

      <div style={{ marginTop: '0.5rem' }}>
        <button onClick={() => onEdit?.(id)}>Edit</button>{' '}
        <button onClick={() => onDelete?.(id)}>Delete</button>
      </div>
    </div>
  );
};

export default MediaCard;
