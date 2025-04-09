import { useState } from 'react';

const MediaForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [type, setType] = useState(initialData.type || "book");
  const [status, setStatus] = useState(initialData.status || "not watched");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, type, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="book">Book</option>
        <option value="movie">Movie</option>
      </select>
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="watched">Watched/Read</option>
        <option value="not watched">Not Yet</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default MediaForm;
