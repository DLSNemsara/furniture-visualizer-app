import React, { useState } from 'react';
import { Login } from './components/Login';
import { RoomConfigurator } from './components/RoomConfigurator';
import { FurnitureCatalog } from './components/FurnitureCatalog';
import { SavedDesigns } from './components/SavedDesigns';
import { Scene3D } from './components/Scene3D';
import { useStore } from './store/store';
import { Save } from 'lucide-react';

function App() {
  const [designName, setDesignName] = useState('');
  const { user, saveDesign } = useStore();

  const handleSaveDesign = (e: React.FormEvent) => {
    e.preventDefault();
    if (designName.trim()) {
      saveDesign(designName);
      setDesignName('');
    }
  };

  if (!user.isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">3D Room Designer</h1>
            <p className="text-gray-600">Welcome, {user.username}!</p>
          </div>
          <form onSubmit={handleSaveDesign} className="flex gap-2">
            <input
              type="text"
              value={designName}
              onChange={(e) => setDesignName(e.target.value)}
              placeholder="Design name"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Save className="w-5 h-5" />
              Save Design
            </button>
          </form>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <RoomConfigurator />
            <FurnitureCatalog />
            <SavedDesigns />
          </div>
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md" style={{ height: '600px' }}>
            <Scene3D />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;