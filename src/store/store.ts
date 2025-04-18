import { create } from 'zustand';
import type { RoomConfig, FurnitureItem, SavedDesign, User } from '../types';

interface State {
  user: User;
  room: RoomConfig;
  furniture: FurnitureItem[];
  savedDesigns: SavedDesign[];
  setUser: (user: User) => void;
  setRoom: (room: RoomConfig) => void;
  addFurniture: (item: FurnitureItem) => void;
  updateFurniture: (id: string, updates: Partial<FurnitureItem>) => void;
  removeFurniture: (id: string) => void;
  saveDesign: (name: string) => void;
  loadDesign: (id: string) => void;
  deleteDesign: (id: string) => void;
}

export const useStore = create<State>((set) => ({
  user: { username: '', isAuthenticated: false },
  room: {
    width: 5,
    length: 5,
    height: 3,
    shape: 'rectangle',
    wallColor: '#ffffff',
    floorColor: '#cccccc',
  },
  furniture: [],
  savedDesigns: [],
  
  setUser: (user) => set({ user }),
  
  setRoom: (room) => set({ room }),
  
  addFurniture: (item) => 
    set((state) => ({ furniture: [...state.furniture, item] })),
  
  updateFurniture: (id, updates) =>
    set((state) => ({
      furniture: state.furniture.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    })),
  
  removeFurniture: (id) =>
    set((state) => ({
      furniture: state.furniture.filter((item) => item.id !== id),
    })),
  
  saveDesign: (name) =>
    set((state) => {
      const newDesign: SavedDesign = {
        id: crypto.randomUUID(),
        name,
        room: state.room,
        furniture: state.furniture,
        createdAt: Date.now(),
      };
      
      const designs = [...state.savedDesigns, newDesign];
      localStorage.setItem('savedDesigns', JSON.stringify(designs));
      
      return { savedDesigns: designs };
    }),
  
  loadDesign: (id) =>
    set((state) => {
      const design = state.savedDesigns.find((d) => d.id === id);
      if (!design) return state;
      
      return {
        room: design.room,
        furniture: design.furniture,
      };
    }),
  
  deleteDesign: (id) =>
    set((state) => {
      const designs = state.savedDesigns.filter((d) => d.id !== id);
      localStorage.setItem('savedDesigns', JSON.stringify(designs));
      
      return { savedDesigns: designs };
    }),
}));