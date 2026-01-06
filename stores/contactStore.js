import { create } from "zustand";
import axios from "axios";

export const useContactStore = create((set) => ({
    contacts: [],
    contact: null,
    loadingContact: false,

    getContacts: async () => {
        set({ loadingContact: true });

        const { data } = await axios
            .get(`${api}/contacts`)
            .finally(() => set({ loadingContact: false }));
        set({ contacts: data });
        return data;
    },

    getByIdContact: async (id) => {
        const { data } = await axios.get(`${api}/contacts/${id}`);
        set({ contact: data });
        return data;
    },
    deleteContact: async (id) => {
        await axios.delete(`${api}/contacts/${id}`);
        set((state) => ({
            contacts: state.contacts.filter((t) => t.id !== id)
        }));
    },
    addContact: async (contact) => {
        set({ loadingContact: true });

        const { data } = await axios
            .post(`${api}/contacts`, contact)
            .finally(() => set({ loadingContact: false }));

        set((state) => ({
            contacts: [...state.contacts, data.contact]
        }));

        return data.contact;
    },
    updateContact: async (id, updatedData) => {
        set({ loadingContact: true });

        const { data } = await axios
            .patch(`${api}/contacts/${id}`, updatedData)
            .finally(() => set({ loadingContact: false }));

        set((state) => ({
            contacts: state.contacts.map((contact) =>
                contact.id === id ? data : contact
            ),
            contact: state.contact?.id === id ? data : state.contact
        }));
        return data;
    }
}));

export const useLoadingContact = () => useContactStore((state) => state.loadingContact);
export const useGetContacts = () => useContactStore((state) => state.getContacts);
export const useContacts = () => useContactStore((state) => state.contacts);
export const useGetByIdContact = () => useContactStore((state) => state.getByIdContact);
export const useContact = () => useContactStore((state) => state.contact);
export const useAddContact = () => useContactStore((state) => state.addContact);
export const useDeleteContact = () => useContactStore((state) => state.deleteContact);
export const useUpdateContact = () => useContactStore((state) => state.updateContact);