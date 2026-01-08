import { create } from "zustand";
import axios from "axios";
import { api, apiKey } from "./api";

export const useHotelStore = create((set) => ({
  hotels: [],
  rooms: [],
  loadingHotel: false,

  getHotels: async () => {
    set({ loadingHotel: true });
    try {
      const { data } = await axios.get(`${api}/hotels`, {
        headers: {
          "X-API-KEY": `${apiKey}`,
        }
      });
      set({ hotels: data });
      return data;
    } finally {
      set({ loadingHotel: false });
    }
  },

  getByIdHotel: async (id) => {
    const { data } = await axios.get(`${api}/hotels/${id}/rooms`, {
        headers: {
          "X-API-KEY": `${apiKey}`,
        }
      });
    set({ rooms: data });
    return data;
  },
  deleteHotel: async (id) => {
    await axios.delete(`${api}/hotels/${id}`);
    set((state) => ({
      hotels: state.hotels.filter((t) => t.id !== id),
    }));
  },
  addHotel: async (hotel) => {
    set({ loadingHotel: true });

    const { data } = await axios
      .post(`${api}/hotels`, hotel)
      .finally(() => set({ loadingHotel: false }));

    set((state) => ({
      hotels: [...state.hotels, data.hotel],
    }));

    return data.hotel;
  },
  updateHotel: async (id, updatedData) => {
    set({ loadingHotel: true });

    const { data } = await axios
      .patch(`${api}/hotels/${id}`, updatedData)
      .finally(() => set({ loadingHotel: false }));

    set((state) => ({
      hotels: state.hotels.map((hotel) => (hotel.id === id ? data : hotel)),
      hotel: state.hotel?.id === id ? data : state.hotel,
    }));
    return data;
  },
}));

export const useLoadingHotel = () =>
  useHotelStore((state) => state.loadingHotel);
export const useGetHotels = () => useHotelStore((state) => state.getHotels);
export const useHotels = () => useHotelStore((state) => state.hotels);
export const useGetByIdHotel = () =>
  useHotelStore((state) => state.getByIdHotel);
export const useHotel = () => useHotelStore((state) => state.rooms);
export const useAddHotel = () => useHotelStore((state) => state.addHotel);
export const useDeleteHotel = () => useHotelStore((state) => state.deleteHotel);
export const useUpdateHotel = () => useHotelStore((state) => state.updateHotel);
