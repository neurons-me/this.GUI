// src/gui/widgets/RubiksCube/RubiksCube.tsx
import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { RubiksCubeProps } from './RubiksCube.types';

const RUBIK_COLORS = {
  px: '#ff3b30', // +X Red
  nx: '#ff7f00', // -X Orange
  py: '#ffffff', // +Y White
  ny: '#ffcc00', // -Y Yellow
  pz: '#007aff', // +Z Blue
  nz: '#34c759', // -Z Green
  base: '#111418',
};

function Sticker({
  axis,
  sign = 1,
  size = 0.56,
  inset = 0.02,
  color = '#fff',
}: {
  axis: 'x' | 'y' | 'z';
  sign?: 1 | -1;
  size?: number;
  inset?: number;
  color?: string;
}) {
  const pos: [number, number, number] = [0, 0, 0];
  const rot: [number, number, number] = [0, 0, 0];
  const half = size / 2;
  const offset = half + 0.001; // slight offset above the cube surface
  if (axis === 'x') {
    pos[0] = sign * offset;
    rot[1] = Math.PI / 2;
    if (sign === -1) rot[1] += Math.PI;
  }
  if (axis === 'y') {
    pos[1] = sign * offset;
    rot[0] = -Math.PI / 2;
    if (sign === -1) rot[0] += Math.PI;
  }
  if (axis === 'z') {
    pos[2] = sign * offset;
    if (sign === -1) rot[1] = Math.PI; // facing camera by default
  }
  return (
    <mesh position={pos} rotation={rot}>
      <planeGeometry args={[size - inset, size - inset]} />
      <meshBasicMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Cubelet({ x, y, z, unit = 0.66 }: { x: number; y: number; z: number; unit?: number }) {
  const outer = x === 1 || x === -1 || y === 1 || y === -1 || z === 1 || z === -1;
  return (
    <group position={[0, 0, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[unit, unit, unit]} />
        <meshStandardMaterial color={RUBIK_COLORS.base} roughness={0.35} metalness={0.15} />
      </mesh>
      {outer && x === 1 && <Sticker axis="x" sign={1} size={unit} color={RUBIK_COLORS.px} />}
      {outer && x === -1 && <Sticker axis="x" sign={-1} size={unit} color={RUBIK_COLORS.nx} />}
      {outer && y === 1 && <Sticker axis="y" sign={1} size={unit} color={RUBIK_COLORS.py} />}
      {outer && y === -1 && <Sticker axis="y" sign={-1} size={unit} color={RUBIK_COLORS.ny} />}
      {outer && z === 1 && <Sticker axis="z" sign={1} size={unit} color={RUBIK_COLORS.pz} />}
      {outer && z === -1 && <Sticker axis="z" sign={-1} size={unit} color={RUBIK_COLORS.nz} />}
    </group>
  );
}

function RubiksCubeGeometry({ gap = 0.68, explode = 0 }: { gap?: number; explode?: number }) {
  // 3x3x3 grid of cubelets, with a small gap
  const cubelets = [];
  for (let ix = -1; ix <= 1; ix++) {
    for (let iy = -1; iy <= 1; iy++) {
      for (let iz = -1; iz <= 1; iz++) {
        const base = new THREE.Vector3(ix * gap, iy * gap, iz * gap);
        const dir = base.length() > 0 ? base.clone().normalize() : new THREE.Vector3(0, 0, 0);
        const pos = base.clone().addScaledVector(dir, explode);
        cubelets.push(
          <group key={`${ix}${iy}${iz}`} position={pos.toArray()}>
            <Cubelet x={ix} y={iy} z={iz} />
          </group>
        );
      }
    }
  }
  return <group>{cubelets}</group>;
}

function RubiksHero({ spin = true }: { spin?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;
    // ease in/out explode between 0 and 1
    const s = (Math.sin(t * 0.9) + 1) / 2; // 0..1
    const explode = THREE.MathUtils.lerp(0, 0.3, 0.5 - 0.5 * Math.cos(s * Math.PI));
    ref.current.userData.explode = explode;
    if (spin) {
      ref.current.rotation.y = Math.sin(t * 0.3) * 0.25;
      ref.current.rotation.x = Math.cos(t * 0.2) * 0.12;
    }
  });
  return (
    <group ref={ref} position={[0.15, 0.1, 0]}>
      <RubiksCubeGeometry explode={ref.current?.userData.explode || 0} />
    </group>
  );
}

/**
 * RubiksCube
 * -------------
 * A self-assembling/disassembling animated 3D Rubik's cube, built on
 * react-three-fiber + drei. Originally lived in neurons.me's "Embracing ML"
 * business page; promoted here as a reusable GUI widget.
 */
export default function RubiksCube({
  height = 340,
  spin = true,
  orbit = true,
  borderRadius = 16,
}: RubiksCubeProps) {
  return (
    <div style={{ width: '100%', height, borderRadius, overflow: 'hidden' }}>
      <Canvas
        camera={{ position: [0.2, 0.25, 6.2], fov: 40 }}
        gl={{ alpha: true }}
        dpr={[1, 2]}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 0);
        }}
      >
        <hemisphereLight intensity={0.8} groundColor={new THREE.Color('#111418')} />
        <directionalLight position={[4, 6, 3]} intensity={0.9} color={new THREE.Color('#fff6e9')} />
        <pointLight position={[-3, -2, -2]} intensity={0.6} color={new THREE.Color('#aee3ff')} />
        <group>
          <RubiksHero spin={spin} />
        </group>
        {orbit ? <OrbitControls enabled rotateSpeed={0.6} enableZoom={false} enablePan={false} /> : null}
      </Canvas>
    </div>
  );
}
