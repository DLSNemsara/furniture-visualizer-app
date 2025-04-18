import React from 'react';
import { useStore } from '../store/store';

export function RoomConfigurator() {
  const { room, setRoom } = useStore((state) => ({
    room: state.room,
    setRoom: state.setRoom,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRoom({
      ...room,
      [name]: name === 'shape' ? value : parseFloat(value) || value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Room Configuration</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Width (m)</label>
          <input
            type="number"
            name="width"
            value={room.width}
            onChange={handleChange}
            min="1"
            max="20"
            step="0.1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Length (m)</label>
          <input
            type="number"
            name="length"
            value={room.length}
            onChange={handleChange}
            min="1"
            max="20"
            step="0.1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Height (m)</label>
          <input
            type="number"
            name="height"
            value={room.height}
            onChange={handleChange}
            min="1"
            max="5"
            step="0.1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Shape</label>
          <select
            name="shape"
            value={room.shape}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="rectangle">Rectangle</option>
            <option value="square">Square</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Wall Color</label>
          <input
            type="color"
            name="wallColor"
            value={room.wallColor}
            onChange={handleChange}
            className="mt-1 block w-full h-10 rounded-md border-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Floor Color</label>
          <input
            type="color"
            name="floorColor"
            value={room.floorColor}
            onChange={handleChange}
            className="mt-1 block w-full h-10 rounded-md border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}