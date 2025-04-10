import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Update this to match your Spring Boot backend
});

export const getAllMedia = () => api.get('/media');

export const getMediaById = (id) => api.get(`/media/${id}`);

export const createMedia = (mediaData) => api.post('/media', mediaData);

export const updateMedia = (id, mediaData) => api.put(`/media/${id}`, mediaData);

export const deleteMedia = (id) => api.delete(`/media/${id}`);


export default api;
