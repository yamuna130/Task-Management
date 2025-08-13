// client/src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // e.g. https://task-management-hhnu.onrender.com
});

// attach token (if present)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ===== AUTH =====
export const registerUser = async (payload) => {
  const { data } = await API.post("/api/auth/register", payload);
  return data;
};

export const loginUser = async (payload) => {
  const { data } = await API.post("/api/auth/login", payload);
  // backend should return { token, user } (adjust if different)
  if (data?.token) localStorage.setItem("token", data.token);
  return data;
};

// ===== TASKS =====
export const getTasks = async () => {
  const { data } = await API.get("/api/tasks");
  return data;
};

export const createTask = async (task) => {
  const { data } = await API.post("/api/tasks", task);
  return data;
};

export const updateTask = async (id, task) => {
  const { data } = await API.put(`/api/tasks/${id}`, task);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await API.delete(`/api/tasks/${id}`);
  return data;
};
