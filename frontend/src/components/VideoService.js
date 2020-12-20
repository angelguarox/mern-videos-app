import axios from 'axios';

const API = 'http://localhost:4000/videos';

export const getAllVideos = async () => {
	return await axios.get(`${API}`);
};

export const getOneVideo = async (id) => {
	return await axios.get(`${API}/${id}`);
};

export const createVideo = async (video) => {
	return await axios.post(`${API}`, video);
};

export const updateVideo = async (id, video) => {
	return await axios.put(`${API}/${id}`, video);
};

export const deleteVideo = async (id) => {
	return await axios.delete(`${API}/${id}`);
};