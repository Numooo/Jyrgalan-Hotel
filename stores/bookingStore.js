import { create } from "zustand";
import axios from "axios";

export const useBookingStore = create((set) => ({
    bookings: [],
    booking: null,
    loadingBooking: false,

    getBookings: async () => {
        set({ loadingBooking: true });

        const { data } = await axios
            .get(`${api}/bookings`)
            .finally(() => set({ loadingBooking: false }));
        set({ bookings: data });
        return data;
    },

    getByIdBooking: async (id) => {
        const { data } = await axios.get(`${api}/bookings/${id}`);
        set({ booking: data });
        return data;
    },
    deleteBooking: async (id) => {
        await axios.delete(`${api}/bookings/${id}`);
        set((state) => ({
            bookings: state.bookings.filter((t) => t.id !== id)
        }));
    },
    addBooking: async (booking) => {
        set({ loadingBooking: true });

        const { data } = await axios
            .post(`${api}/bookings`, booking)
            .finally(() => set({ loadingBooking: false }));

        set((state) => ({
            bookings: [...state.bookings, data.booking]
        }));

        return data.booking;
    },
    updateBooking: async (id, updatedData) => {
        set({ loadingBooking: true });

        const { data } = await axios
            .patch(`${api}/bookings/${id}`, updatedData)
            .finally(() => set({ loadingBooking: false }));

        set((state) => ({
            bookings: state.bookings.map((booking) =>
                booking.id === id ? data : booking
            ),
            booking: state.booking?.id === id ? data : state.booking
        }));
        return data;
    }
}));

export const useLoadingBooking = () => useBookingStore((state) => state.loadingBooking);
export const useGetBookings = () => useBookingStore((state) => state.getBookings);
export const useBookings = () => useBookingStore((state) => state.bookings);
export const useGetByIdBooking = () => useBookingStore((state) => state.getByIdBooking);
export const useBooking = () => useBookingStore((state) => state.booking);
export const useAddBooking = () => useBookingStore((state) => state.addBooking);
export const useDeleteBooking = () => useBookingStore((state) => state.deleteBooking);
export const useUpdateBooking = () => useBookingStore((state) => state.updateBooking);