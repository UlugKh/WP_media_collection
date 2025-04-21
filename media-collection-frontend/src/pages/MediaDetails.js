import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MediaDetails() {
  const { id } = useParams();
  const [media, setMedia] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v2/media/${id}")
      .then(res => res.json())
      .then(data => setMedia(data))
      .catch(err => console.error("Failed to fetch media:", err));
  }, [id]);

  if (!media) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <img src={media.cover} alt={media.title} className="w-full rounded-2xl mb-4" />
      <h1 className="text-3xl font-bold mb-2">{media.title}</h1>
      <p className="text-gray-600 text-sm mb-1">{media.type?.toUpperCase()} — Score: {media.score}</p>
      <p className="text-lg mb-4">{media.description}</p>
      <p className="mb-4"><strong>Contributors:</strong> {media.contributors?.join(", ")}</p>
      {media.trailer && (
        <a href={media.trailer} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Watch Trailer
        </a>
      )}
    </div>
  );
}
