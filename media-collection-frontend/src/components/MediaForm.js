import { useState, useEffect } from 'react';

const MediaForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [type, setType] = useState(initialData.type || "book");
  const [status, setStatus] = useState(initialData.status || "not went through");

  useEffect(() => {
    if (initialData.status) {
      setStatus(initialData.status);
    } else {
      setStatus(type === 'book' ? 'not read' : 'not watched');
    }
  }, [type, initialData.status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, type, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      value={title}
      onChange={e => setTitle(e.target.value)}
      placeholder="Title"
      required />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="book">Book</option>
        <option value="movie">Movie</option>
      </select>
      <select value={status} onChange={e => setStatus(e.target.value)}>
         {type === 'book' ? (
            <>
                <option value="read">Read</option>
                <option value="not read">Not Read</option>
            </>
          ) : (
            <>
                <option value="watched">Watched</option>
                <option value="not watched">Not Watched</option>
            </>
          )}
        </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default MediaForm;