import { useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Html, TransformControls } from '@react-three/drei';
import type { FurnitureItem } from '../types';
import { useStore } from '../store/store';

interface FurnitureProps {
  item: FurnitureItem;
}

export function Furniture({ item }: FurnitureProps) {
  const { updateFurniture, removeFurniture } = useStore();
  const { scene } = useGLTF(item.model);
  
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  const handleTransform = (e: any) => {
    if (ref.current) {
      const { position, rotation, scale } = ref.current;
      updateFurniture(item.id, {
        position: [position.x, position.y, position.z],
        rotation: [rotation.x, rotation.y, rotation.z],
        scale: [scale.x, scale.y, scale.z]
      });
    }
  };

  return (
    <group>
      <TransformControls
        object={ref}
        mode="translate"
        onObjectChange={handleTransform}
        onMouseDown={() => setIsTransforming(true)}
        onMouseUp={() => setIsTransforming(false)}
      >
        <primitive
          ref={ref}
          object={scene.clone()}
          position={item.position}
          rotation={item.rotation}
          scale={item.scale}
          onPointerOver={() => !isTransforming && setHovered(true)}
          onPointerOut={() => !isTransforming && setHovered(false)}
        />
      </TransformControls>
      
      {hovered && (
        <Html position={[item.position[0], item.position[1] + 1, item.position[2]]}>
          <div className="bg-white p-2 rounded shadow-lg text-sm">
            <p className="font-medium">{item.name}</p>
            <p className="text-gray-600">${item.price}</p>
            <button
              onClick={() => removeFurniture(item.id)}
              className="mt-2 px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        </Html>
      )}
    </group>
  );
}