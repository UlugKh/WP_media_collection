import { useNavigate } from 'react-router-dom';
import { createMedia } from '../services/Api';
import MediaForm from '../components/MediaForm';

const AddMediaPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
//    USING CONSOLE BECAUSE NO BACKEND
//      await createMedia(data);
      console.log('Creating media:', data);
      navigate('/'); // Go back to home
    } catch (err) {
      console.error('Error creating media:', err);
    }
  };

  return (
    <div>
      <h2>Add New Media</h2>
      <MediaForm onSubmit={handleCreate} />
    </div>
  );
};

export default AddMediaPage;