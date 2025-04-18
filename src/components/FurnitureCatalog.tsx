import React from 'react';
import { furnitureCatalog } from '../data/furnitureCatalog';
import { useStore } from '../store/store';
import { Plus } from 'lucide-react';

export function FurnitureCatalog() {
  const addFurniture = useStore((state) => state.addFurniture);

  const handleAddFurniture = (catalogItem: typeof furnitureCatalog[0]) => {
    addFurniture({
      id: crypto.randomUUID(),
      type: catalogItem.type,
      name: catalogItem.name,
      model: catalogItem.model,
      thumbnail: catalogItem.thumbnail,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: catalogItem.defaultScale,
      color: '#ffffff',
      price: catalogItem.price
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Furniture Catalog</h2>
      <div className="grid grid-cols-2 gap-4">
        {furnitureCatalog.map((item) => (
          <div key={item.id} className="relative group">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg flex items-center justify-center">
              <button
                onClick={() => handleAddFurniture(item)}
                className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white p-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                <Plus className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-2">
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}