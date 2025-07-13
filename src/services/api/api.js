import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Fungsi GET semua courses
export const getCourses = async () => {
  const response = await apiClient.get("/products");
  return response.data;
};

// Fungsi POST tambah course baru
export const addCourse = async (course) => {
  const response = await apiClient.post("/products", course);
  return response.data;
};

// Fungsi PUT update course by id
export const updateCourse = async (id, course) => {
  const response = await apiClient.put(`/products/${id}`, course);
  return response.data;
};

// Fungsi DELETE hapus course by id
export const deleteCourse = async (id) => {
  const response = await apiClient.delete(`/products/${id}`);
  return response.data;
};