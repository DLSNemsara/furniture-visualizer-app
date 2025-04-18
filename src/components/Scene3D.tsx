import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Grid, Environment } from '@react-three/drei';
import { EffectComposer, SSAO, Bloom } from '@react-three/postprocessing';
import { useStore } from '../store/store';
import { Room } from './Room';
import { Furniture } from './Furniture';

export function Scene3D() {
  const { room, furniture } = useStore();

  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 50 }}>
        <PerspectiveCamera makeDefault position={[10, 10, 10]} />
        <OrbitControls target={[0, 0, 0]} maxPolarAngle={Math.PI / 2} />
        
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        <Room config={room} />
        <Grid infiniteGrid fadeDistance={50} fadeStrength={5} />
        
        {furniture.map((item) => (
          <Furniture key={item.id} item={item} />
        ))}
        
        <Environment preset="apartment" />
        <EffectComposer>
          <SSAO radius={0.1} intensity={150} luminanceInfluence={0.5} />
          <Bloom intensity={0.5} luminanceThreshold={1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}