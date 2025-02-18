import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    setAuthenticated: (status) => set({ isAuthenticated: status }),
}));

export default useAuthStore;