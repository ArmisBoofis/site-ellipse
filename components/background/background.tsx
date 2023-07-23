/**
 * Canvas qui contient toute la scène 3D qui défile dans le fond.
 */

'use client';

import { Canvas } from '@react-three/fiber';

import Planet from './planet/planet';

export default function Background() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Planet />
      <directionalLight position={[0, 2, 5]} intensity={0.4} />
    </Canvas>
  );
}