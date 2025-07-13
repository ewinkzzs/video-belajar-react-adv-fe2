import { create } from "zustand";
import {
  getCourses as apiGetCourses,
  addCourse as apiAddCourse,
  updateCourse as apiUpdateCourse,
  deleteCourse as apiDeleteCourse,
} from "../services/api/api";

const useCourseStore = create((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),

  // Load courses dari API
  fetchCourses: async () => {
    set({ loading: true });
    try {
      const data = await apiGetCourses();
      set({ courses: data });
    } catch (error) {
      console.error("Failed to fetch courses", error);
    } finally {
      set({ loading: false });
    }
  },

  // Tambah course baru via API dan update state
  addCourse: async (course) => {
    set({ loading: true });
    try {
      const newCourse = await apiAddCourse(course);
      set((state) => ({ courses: [newCourse, ...state.courses] }));
    } catch (error) {
      console.error("Failed to add course", error);
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  // Update course via API dan update state
  updateCourse: async (id, updatedCourse) => {
    set({ loading: true });
    try {
      const course = await apiUpdateCourse(id, updatedCourse);
      set((state) => ({
        courses: state.courses.map((c) => (c.id === id ? course : c)),
      }));
    } catch (error) {
      console.error("Failed to update course", error);
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  // Hapus course via API dan update state
  deleteCourse: async (id) => {
    set({ loading: true });
    try {
      await apiDeleteCourse(id);
      set((state) => ({
        courses: state.courses.filter((course) => course.id !== id),
      }));
    } catch (error) {
      console.error("Failed to delete course", error);
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCourseStore;