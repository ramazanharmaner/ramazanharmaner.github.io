import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function SystemNodes({ count = 150, radius = 1.8 }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  // Orijinal pozisyonları ve renkleri sakla
  const { positions, originalPositions, lineIndices, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const points: THREE.Vector3[] = [];

    // Profesyonel Cyber/Tech Renk Paleti
    const palette = [
      new THREE.Color("#00f2ff"), // Cyan
      new THREE.Color("#0066ff"), // Deep Blue
      new THREE.Color("#ffffff"), // White
      new THREE.Color("#ff5e00"), // Orange Accent
    ];

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = radius * Math.cbrt(Math.random());

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Rastgele renk seçimi
      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      points.push(new THREE.Vector3(x, y, z));
    }

    const lineIndices: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = points[i].distanceTo(points[j]);
        if (dist < radius * 0.45) {
          lineIndices.push(i, j);
        }
      }
    }

    return {
      positions,
      originalPositions,
      lineIndices,
      colors,
    };
  }, [count, radius]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }

    if (pointsRef.current && pointsRef.current.geometry) {
      const posAttr = pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        const ox = originalPositions[ix];
        const oy = originalPositions[iy];
        const oz = originalPositions[iz];

        posAttr.array[ix] = ox + Math.sin(t * 0.5 + ox) * 0.15;
        posAttr.array[iy] = oy + Math.cos(t * 0.6 + oy) * 0.15;
        posAttr.array[iz] = oz + Math.sin(t * 0.7 + oz) * 0.15;
      }
      posAttr.needsUpdate = true;
    }

    if (linesRef.current && linesRef.current.geometry && pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position;
      const linePosAttr = linesRef.current.geometry.attributes.position;
      
      let linePosIndex = 0;
      for (let i = 0; i < lineIndices.length; i += 2) {
        const idx1 = lineIndices[i];
        const idx2 = lineIndices[i + 1];

        linePosAttr.array[linePosIndex++] = posAttr.array[idx1 * 3];
        linePosAttr.array[linePosIndex++] = posAttr.array[idx1 * 3 + 1];
        linePosAttr.array[linePosIndex++] = posAttr.array[idx1 * 3 + 2];
        
        linePosAttr.array[linePosIndex++] = posAttr.array[idx2 * 3];
        linePosAttr.array[linePosIndex++] = posAttr.array[idx2 * 3 + 1];
        linePosAttr.array[linePosIndex++] = posAttr.array[idx2 * 3 + 2];
      }
      linePosAttr.needsUpdate = true;
    }
  });

  const initialLinePositions = new Float32Array(lineIndices.length * 3);

  return (
    <group ref={groupRef}>
      {/* Çizgiler */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={initialLinePositions.length / 3}
            array={initialLinePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00f2ff" transparent opacity={0.15} />
      </lineSegments>

      {/* Renkli Noktalar */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          vertexColors={true}
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
