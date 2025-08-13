import axios from "axios";

// Base URL from environment variable
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// --- TASK API CALLS ---

// Get all tasks
export const getTasks = async () => {
  try {
    const response = await API.get("/api/tasks");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Create a new task
export const createTask = async (taskData) => {
  try {
    const response = await API.post("/api/tasks", taskData);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// Update a task by ID
export const updateTask = async (taskId, updatedData) => {
  try {
    const response = await API.put(`/api/tasks/${taskId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// Delete a task by ID
export const deleteTask = async (taskId) => {
  try {
    const response = await API.delete(`/api/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
