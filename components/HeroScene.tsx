"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Environment, Sparkles } from '@react-three/drei';
import { SystemNodes } from './SystemNodes';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function SystemArchitecture() {
  const scrollGroupRef = useRef<THREE.Group>(null);
  const floatGroupRef = useRef<THREE.Group>(null);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (floatGroupRef.current) {
      // Yüzen dalgalanma efekti
      floatGroupRef.current.position.y = Math.sin(t * 2) * 0.15;
      
      // Fareye göre ağın esnemesi / dönmesi
      const targetRotationX = mousePos.y * 0.2;
      const targetRotationY = mousePos.x * 0.3;
      
      floatGroupRef.current.rotation.x = THREE.MathUtils.lerp(floatGroupRef.current.rotation.x, targetRotationX, 0.05);
      floatGroupRef.current.rotation.y = THREE.MathUtils.lerp(floatGroupRef.current.rotation.y, targetRotationY, 0.05);
    }
  });

  useEffect(() => {
    if (scrollGroupRef.current) {
      const isMobile = window.innerWidth < 768;
      
      // Calculate responsive positions
      const startX = isMobile ? 0 : 4.5;
      const targetX = isMobile ? 0 : 3.5;
      const targetY = isMobile ? 1.5 : 0.5;
      const targetScale = isMobile ? 0.45 : 0.8;
      const endY = isMobile ? 5 : 3;

      // Başlangıç animasyonu
      scrollGroupRef.current.position.set(startX, -2, -2);
      scrollGroupRef.current.scale.set(0, 0, 0); 
      
      gsap.to(scrollGroupRef.current.position, {
        y: targetY,
        x: targetX,
        duration: 2.5,
        ease: "power3.out"
      });

      gsap.to(scrollGroupRef.current.scale, {
        x: targetScale, y: targetScale, z: targetScale,
        duration: 2.5,
        ease: "back.out(1.2)"
      });

      // Kaydırdıkça yukarı (ekrandan dışarı) çıksın ki diğer sayfalara taşmasın
      gsap.to(scrollGroupRef.current.position, {
        y: endY,          
        x: startX,         
        z: -3,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });
    }
  }, []);

  return (
    <group ref={scrollGroupRef}>
      <group ref={floatGroupRef}>
        <SystemNodes count={150} radius={4} />
      </group>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
      {/* Optimized DPR */}
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 1.5, 7], fov: 45 }}>
        {/* Işıklar biraz daha karanlık temaya uygun kısıldı, çünkü noktalar kendi parlıyor */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={1.5} color="#00f2ff" />
        
        <Environment preset="city" />

        <Stars radius={100} depth={50} count={1500} factor={4} saturation={1} fade speed={1} />
        <Sparkles count={50} scale={12} size={1.5} speed={0.4} opacity={0.3} color="#00f2ff" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <SystemArchitecture />
        </Float>
      </Canvas>
    </div>
  );
}