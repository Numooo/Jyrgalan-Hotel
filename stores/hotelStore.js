import { create } from "zustand";
import axios from "axios";
import { api } from "./api"

export const useHotelStore = create((set) => ({
    hotels: [],
    hotel: null,
    loadingHotel: false,

    getHotels: async () => {
        set({ loadingHotel: true });

        const { data } = await axios
            .get(`${api}/hotels`)
            .finally(() => set({ loadingHotel: false }));
        set({ hotels: data });
        return data;
    },

    getByIdHotel: async (id) => {
        const { data } = await axios.get(`${api}/hotels/${id}/rooms`);
        set({ hotel: data });
        return data;
    },
    deleteHotel: async (id) => {
        await axios.delete(`${api}/hotels/${id}`);
        set((state) => ({
            hotels: state.hotels.filter((t) => t.id !== id)
        }));
    },
    addHotel: async (hotel) => {
        set({ loadingHotel: true });

        const { data } = await axios
            .post(`${api}/hotels`, hotel)
            .finally(() => set({ loadingHotel: false }));

        set((state) => ({
            hotels: [...state.hotels, data.hotel]
        }));

        return data.hotel;
    },
    updateHotel: async (id, updatedData) => {
        set({ loadingHotel: true });

        const { data } = await axios
            .patch(`${api}/hotels/${id}`, updatedData)
            .finally(() => set({ loadingHotel: false }));

        set((state) => ({
            hotels: state.hotels.map((hotel) =>
                hotel.id === id ? data : hotel
            ),
            hotel: state.hotel?.id === id ? data : state.hotel
        }));
        return data;
    }
}));

export const useLoadingHotel = () => useHotelStore((state) => state.loadingHotel);
export const useGetHotels = () => useHotelStore((state) => state.getHotels);
export const useHotels = () => useHotelStore((state) => state.hotels);
export const useGetByIdHotel = () => useHotelStore((state) => state.getByIdHotel);
export const useHotel = () => useHotelStore((state) => state.hotel);
export const useAddHotel = () => useHotelStore((state) => state.addHotel);
export const useDeleteHotel = () => useHotelStore((state) => state.deleteHotel);
export const useUpdateHotel = () => useHotelStore((state) => state.updateHotel);