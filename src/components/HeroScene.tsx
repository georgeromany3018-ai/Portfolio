"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// Interactive Tech Core Model
function InteractiveCore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Mouse-responsive smooth tilt and parallax
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = -(state.pointer.y * Math.PI) / 6;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetX + t * 0.15,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetY + Math.sin(t * 0.3) * 0.1,
        0.05
      );
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.4;
      ring1Ref.current.rotation.y += delta * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.35;
      ring2Ref.current.rotation.z += delta * 0.25;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += delta * 0.1;
      wireframeRef.current.rotation.z -= delta * 0.15;
    }

    if (coreRef.current) {
      const scale = 1 + Math.sin(t * 1.5) * 0.04;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  // Satellite node positions
  const satelliteNodes = useMemo(() => {
    const nodes = [];
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      nodes.push([Math.cos(angle) * 2.2, Math.sin(angle) * 2.2, 0]);
    }
    return nodes;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Central Cybernetic Emerald Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.1, 48, 48]} />
        <meshPhysicalMaterial
          color="#00A36C"
          emissive="#004D34"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </mesh>

      {/* Outer Geometric Wireframe Lattice */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#00F299"
          emissive="#00F299"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Orbiting Tech Ring 1 (Emerald Accent) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.0, 0.035, 24, 100]} />
        <meshStandardMaterial
          color="#00F299"
          emissive="#00F299"
          emissiveIntensity={0.8}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Orbiting Tech Ring 2 (Purple Accent) */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.4, 0.028, 24, 100]} />
        <meshStandardMaterial
          color="#8F7CFF"
          emissive="#8F7CFF"
          emissiveIntensity={0.7}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Satellite Node Points */}
      {satelliteNodes.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#00F299" : "#8F7CFF"}
            emissive={i % 2 === 0 ? "#00F299" : "#8F7CFF"}
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Graceful Fallback Component for no WebGL or loading
export const Hero3DFallback = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Outer glowing rings */}
      <div className="absolute inset-0 rounded-full border border-[#00F299]/30 animate-[spin_18s_linear_infinite]" />
      <div className="absolute inset-4 rounded-full border border-[#8F7CFF]/30 border-dashed animate-[spin_24s_linear_infinite_reverse]" />
      <div className="absolute inset-10 rounded-full border-2 border-[#00F299]/40 animate-pulse" />

      {/* Core Glowing Orb */}
      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#004D34] via-[#00A36C] to-[#00F299] shadow-[0_0_50px_rgba(0,242,153,0.5)] flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#0D0E11]/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xs font-mono text-[#00F299]">
          {"<DEV />"}
        </div>
      </div>
    </div>
  </div>
);

export default function HeroScene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 6, 4]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-4, -3, -2]} intensity={2.5} color="#8F7CFF" />
        <pointLight position={[3, 4, 3]} intensity={3.5} color="#00F299" />
        <pointLight position={[0, -4, 2]} intensity={1.2} color="#00A36C" />

        <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
          <InteractiveCore />
        </Float>

        {/* Ambient floating tech sparks */}
        <Sparkles count={45} scale={6.5} size={2.5} speed={0.4} color="#00F299" />
        <Sparkles count={25} scale={5.5} size={2} speed={0.3} color="#8F7CFF" />
      </Canvas>
    </div>
  );
}

