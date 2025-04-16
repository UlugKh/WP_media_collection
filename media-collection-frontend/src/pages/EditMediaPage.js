import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMediaById, updateMedia } from '../services/Api';
import MediaForm from '../components/MediaForm';

const EditMediaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
//    const fetchMedia = async () => {
//      try {
//        const response = await getMediaById(id);
//        setMediaData(response.data);
//      } catch (err) {
//        console.error('Error fetching media:', err);
//      }
//    };

    const fetchMedia = async () => {
      const saved = JSON.parse(localStorage.getItem('media')) || [];
      const item = saved.find(m => m.id === Number(id));
      if (item) setMediaData(item);
    };

    fetchMedia();
  }, [id]);

//  const handleUpdate = async (updatedData) => {
//    try {
//      await updateMedia(id, updatedData);
//      navigate('/');
//    } catch (err) {
//      console.error('Error updating media:', err);
//    }
//  };

  const handleUpdate = async (updatedData) => {
    const existing = JSON.parse(localStorage.getItem('media')) || [];
    const updated = existing.map(m =>
        m.id === Number(id) ? { ...m, ...updatedData } : m
    );
    localStorage.setItem('media', JSON.stringify(updated));
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Media</h2>
      {mediaData && <MediaForm onSubmit={handleUpdate} initialData={mediaData} />}
    </div>
  );
};

export default EditMediaPage;