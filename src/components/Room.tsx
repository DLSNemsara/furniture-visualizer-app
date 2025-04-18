import { useEffect } from 'react';
import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';
import type { RoomConfig } from '../types';

interface RoomProps {
  config: RoomConfig;
}

export function Room({ config }: RoomProps) {
  const { width, length, height, wallColor, floorColor } = config;

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[width, length]} />
        <meshStandardMaterial color={floorColor} />
      </mesh>

      {/* Walls */}
      <group position={[0, height / 2, 0]}>
        {/* Back wall */}
        <mesh position={[0, 0, -length / 2]} castShadow receiveShadow>
          <planeGeometry args={[width, height]} />
          <meshStandardMaterial color={wallColor} />
        </mesh>

        {/* Left wall */}
        <mesh position={[-width / 2, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
          <planeGeometry args={[length, height]} />
          <meshStandardMaterial color={wallColor} />
        </mesh>

        {/* Right wall */}
        <mesh position={[width / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow>
          <planeGeometry args={[length, height]} />
          <meshStandardMaterial color={wallColor} />
        </mesh>
      </group>
    </group>
  );
}