import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMediaById, updateMedia } from '../services/Api';
import MediaForm from '../components/MediaForm';

const EditMediaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await getMediaById(id);
        setMediaData(response.data);
      } catch (err) {
        console.error('Error fetching media:', err);
      }
    };

    fetchMedia();
  }, [id]);

  const handleUpdate = async (updatedData) => {
    try {
      await updateMedia(id, updatedData); // This works when PUT is ready
      navigate('/');
    } catch (err) {
      console.error('Error updating media:', err);
    }
  };

  return (
    <div>
      <h2>Edit Media</h2>
      {mediaData ? (
        <MediaForm onSubmit={handleUpdate} initialData={mediaData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditMediaPage;