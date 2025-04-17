import { useNavigate } from 'react-router-dom';
import { createMedia } from '../services/Api';
import MediaForm from '../components/MediaForm';

const AddMediaPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      await createMedia(data);
      navigate('/'); // Redirect to homepage after successful creation
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