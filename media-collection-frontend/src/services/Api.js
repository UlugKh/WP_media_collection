import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v2', // Update this to match your Spring Boot backend
});

export const getAllMedia = () => api.get('/media');

export const getMediaById = (id) => api.get(`/media/${id}`);

export const createMedia = (data) => api.post('/media', data);

export const updateMedia = (id, data) => api.put(`/media/${id}`, data);


export default api;