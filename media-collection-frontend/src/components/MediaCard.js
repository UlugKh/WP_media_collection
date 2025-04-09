const MediaCard = ({ media, onEdit, onDelete }) => {

  return (
    <div className="media-card">
      <h3>{media.title}</h3>
      <p>Type: {media.type}</p>
      <p>Status: {media.status}</p>
      <button onClick={() => onEdit(media.id)}>Edit</button>
      <button onClick={() => onDelete(media.id)}>Delete</button>
    </div>
  );
};

export default MediaCard;
