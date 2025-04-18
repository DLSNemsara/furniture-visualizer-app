import type { FurnitureCatalogItem } from '../types';

export const furnitureCatalog: FurnitureCatalogItem[] = [
  {
    id: 'chair-modern',
    type: 'chair',
    name: 'Modern Chair',
    model: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf',
    thumbnail: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=300&q=80',
    defaultScale: [1, 1, 1],
    price: 199.99
  },
  {
    id: 'table-dining',
    type: 'table',
    name: 'Dining Table',
    // model: 'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/table-wood/model.gltf',
    model:'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table-wood/model.gltf',
    thumbnail: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=300&q=80',
    defaultScale: [1.5, 1, 1.5],
    price: 499.99
  },
  {
    id: 'sofa-modern',
    type: 'sofa',
    name: 'Modern Sofa',
    model:'https://poly.pizza/m/cZltkfbEKS8.gltf',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80',
    defaultScale: [2, 1, 1],
    price: 899.99
  }
];