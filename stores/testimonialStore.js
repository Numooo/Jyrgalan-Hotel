import { create } from "zustand";
import axios from "axios";
import { api } from "./api"

export const useTestimonialStore = create((set) => ({
    testimonials: [],
    testimonial: null,
    loadingTestimonial: false,

    getTestimonials: async () => {
        set({ loadingTestimonial: true });

        const { data } = await axios
            .get(`${api}/testimonials`)
            .finally(() => set({ loadingTestimonial: false }));
        set({ testimonials: data });
        return data;
    },

    getByIdTestimonial: async (id) => {
        const { data } = await axios.get(`${api}/testimonials/${id}`);
        set({ testimonial: data });
        return data;
    },
    deleteTestimonial: async (id) => {
        await axios.delete(`${api}/testimonials/${id}`);
        set((state) => ({
            testimonials: state.testimonials.filter((t) => t.id !== id)
        }));
    },
    addTestimonial: async (testimonial) => {
        set({ loadingTestimonial: true });

        const { data } = await axios
            .post(`${api}/testimonials`, testimonial)
            .finally(() => set({ loadingTestimonial: false }));

        set((state) => ({
            testimonials: [...state.testimonials, data.testimonial]
        }));

        return data.testimonial;
    },
    updateTestimonial: async (id, updatedData) => {
        set({ loadingTestimonial: true });

        const { data } = await axios
            .patch(`${api}/testimonials/${id}`, updatedData)
            .finally(() => set({ loadingTestimonial: false }));

        set((state) => ({
            testimonials: state.testimonials.map((testimonial) =>
                testimonial.id === id ? data : testimonial
            ),
            testimonial: state.testimonial?.id === id ? data : state.testimonial
        }));
        return data;
    }
}));

export const useLoadingTestimonial = () => useTestimonialStore((state) => state.loadingTestimonial);
export const useGetTestimonials = () => useTestimonialStore((state) => state.getTestimonials);
export const useTestimonials = () => useTestimonialStore((state) => state.testimonials);
export const useGetByIdTestimonial = () => useTestimonialStore((state) => state.getByIdTestimonial);
export const useTestimonial = () => useTestimonialStore((state) => state.testimonial);
export const useAddTestimonial = () => useTestimonialStore((state) => state.addTestimonial);
export const useDeleteTestimonial = () => useTestimonialStore((state) => state.deleteTestimonial);
export const useUpdateTestimonial = () => useTestimonialStore((state) => state.updateTestimonial);