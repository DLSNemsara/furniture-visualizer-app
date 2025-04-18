export interface RoomConfig {
  width: number;
  length: number;
  height: number;
  shape: 'rectangle' | 'square';
  wallColor: string;
  floorColor: string;
}

export interface FurnitureItem {
  id: string;
  type: string;
  name: string;
  model: string;
  thumbnail: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
  price: number;
}

export interface SavedDesign {
  id: string;
  name: string;
  room: RoomConfig;
  furniture: FurnitureItem[];
  createdAt: number;
  thumbnail?: string;
}

export interface User {
  username: string;
  isAuthenticated: boolean;
}

export interface FurnitureCatalogItem {
  id: string;
  type: string;
  name: string;
  model: string;
  thumbnail: string;
  defaultScale: [number, number, number];
  price: number;
}