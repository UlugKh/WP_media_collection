import { useEffect, useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');

  // More robust and safer ID extractor
  const getUserId = (user) => {
    if (!user.id) return 'unknown-id';
    if (typeof user.id === 'object') {
      if (user.id.$oid) return user.id.$oid;
      if (user.id.toString) return user.id.toString();
      return JSON.stringify(user.id);
    }
    return String(user.id);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v2/users');
        setUsers(response.data);

        // Debugging: check for duplicate keys
        const allIds = response.data.map(getUserId);
        const uniqueIds = new Set(allIds);
        if (allIds.length !== uniqueIds.size) {
          console.warn('⚠️ Duplicate user IDs detected:', allIds);
        } else {
          console.log('✅ Unique user IDs:', allIds);
        }
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = () => {
    if (selectedUserId) {
      const user = users.find((u) => getUserId(u) === selectedUserId);
      if (user) {
        localStorage.setItem('loggedInUserId', selectedUserId);
        alert(`Logged in as ${user.username}`);
        onLogin?.(user);
      }
    }
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', maxWidth: '300px', margin: '1rem auto' }}>
      <h3>Mock Login</h3>
      <select
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
        style={{ width: '100%', padding: '0.5rem' }}
      >
        <option value="">Select a user...</option>
        {users.map((user) => {
          const uid = getUserId(user);
          return (
            <option key={uid} value={uid}>
              {user.username}
            </option>
          );
        })}
      </select>
      <button onClick={handleLogin} style={{ marginTop: '1rem', width: '100%' }}>
        Login
      </button>
    </div>
  );
};

export default Login;

