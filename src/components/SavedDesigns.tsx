import React from 'react';
import { useStore } from '../store/store';
import { Trash2, Edit3 } from 'lucide-react';

export function SavedDesigns() {
  const { savedDesigns, loadDesign, deleteDesign } = useStore();

  if (savedDesigns.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Saved Designs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {savedDesigns.map((design) => (
          <div key={design.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{design.name}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(design.createdAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {design.furniture.length} items
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => loadDesign(design.id)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  <Edit3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => deleteDesign(design.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}