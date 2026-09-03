import React, { useEffect, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import * as THREE from 'three';
import './HeroSection.css';

// The 3D Scene Component
const ParticleTorus = () => {
  const pointsRef = useRef();
  const groupRef = useRef();
  const speedRef = useRef(0.15);
  const [hovered, setHovered] = useState(false);
  
  const { geometry, spriteTexture } = useMemo(() => {
    // 1. Create a TorusGeometry
    const geo = new THREE.TorusGeometry(3.5, 1.2, 80, 200);
    
    // 2. Mix White and Teal colors, and filter out any stray outlier vertices
    const positions = geo.attributes.position.array;
    const validPositions = [];
    const colors = [];
    const colorWhite = new THREE.Color("#ffffff");
    const colorTeal = new THREE.Color("#007A5E");

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      
      // Filter out stray vertices (e.g., at exact origin or way out of bounds)
      if (Math.abs(x) < 0.01 && Math.abs(y) < 0.01 && Math.abs(z) < 0.01) continue;

      validPositions.push(x, y, z);

      // 30% white, 70% teal for a balanced look
      const mixed = Math.random() > 0.7 ? colorWhite : colorTeal;
      colors.push(mixed.r, mixed.g, mixed.b);
    }
    
    const cleanGeo = new THREE.BufferGeometry();
    cleanGeo.setAttribute('position', new THREE.Float32BufferAttribute(validPositions, 3));
    cleanGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // 3. Create a soft glow circular sprite texture dynamically (so we don't need external PNGs)
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(1, 'rgba(255,255,255,0)'); // Soft edge falloff
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    
    const texture = new THREE.CanvasTexture(canvas);

    return { geometry: cleanGeo, spriteTexture: texture };
  }, []);

  // Animate the torus on every frame
  useFrame((state, delta) => {
    if (!pointsRef.current || !groupRef.current) return;
    
    // 1. Smoothly interpolate speed and scale based on hover state
    const targetSpeed = hovered ? 1.5 : 0.15; // Spin 10x faster when hovered
    const targetScale = hovered ? 1.05 : 1.0; // Expand slightly
    
    speedRef.current += (targetSpeed - speedRef.current) * 0.05;
    pointsRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
    
    // 2. Apply continuous rotation cleanly to the inner points
    pointsRef.current.rotation.y -= delta * speedRef.current;
    pointsRef.current.rotation.x += delta * (speedRef.current * 0.33);
    
    // 3. Apply subtle mouse parallax tilt to the outer group so it doesn't fight the spin
    const targetX = state.pointer.y * 0.3;
    const targetY = state.pointer.x * 0.3;
    
    const initialTiltX = Math.PI / 2.6;
    groupRef.current.rotation.x += ((initialTiltX + targetX) - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={groupRef} position={[-1, -0.5, 0]} rotation={[Math.PI / 2.6, 0, 0]} scale={[0.75, 0.75, 0.75]}>
      <points ref={pointsRef} geometry={geometry}>
        {/* Convert to points via PointsMaterial with soft glow texture */}
        <pointsMaterial
          size={0.05}
          vertexColors={true}
          map={spriteTexture}
          alphaMap={spriteTexture}
          transparent={true}
          opacity={0.8}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending} // Adds a nice luminous glow to the particles
        />
      </points>
      {/* Invisible hit-mesh to cleanly catch hover events (points are too thin to raycast reliably) */}
      <mesh 
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
        visible={false}
      >
        <torusGeometry args={[3.5, 1.2, 16, 32]} />
        <meshBasicMaterial />
      </mesh>
    </group>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(titleRef.current, 
        { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.2
      )
      .fromTo(subtitleRef.current, 
        { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.4
      )
      .fromTo(descRef.current, 
        { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.6
      )
      .fromTo(btnsRef.current, 
        { y: 20, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' }, 0.8
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero" ref={containerRef}>
      
      {/* THREE.JS BACKGROUND CANVAS */}
      <div className="threejs-wrapper">
        <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
          <ParticleTorus />
        </Canvas>
      </div>

      <div className="hero-slime" />

      {/* HERO TEXT */}
      <div className="hero-content">
        <p ref={titleRef} className="hero-subtitle" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', fontWeight: '800', color: '#007A5E', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '15px', fontFamily: "'Inter', sans-serif" }}>
          Growth Engineering Company
        </p>
        <h1 ref={subtitleRef} className="hero-title" style={{ fontSize: 'clamp(48px, 8vw, 95px)', margin: '0 0 20px', color: '#1F2937', fontFamily: "'Cormorant', serif", fontWeight: '500', lineHeight: '1.1', letterSpacing: '0.05em' }}>
          Growth Engineering for <br />
          <span style={{ color: '#007A5E' }}>Businesses Built to Scale.</span>
        </h1>
        <p ref={descRef} style={{ color: '#4B5563', maxWidth: '900px', margin: '0 auto 30px', fontSize: 'clamp(16px, 2.2vw, 20px)', lineHeight: '1.6' }}>
          We engineer connected technology, marketing, and operations systems that turn disconnected growth into sustainable business growth.
        </p>
        <div ref={btnsRef} style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" className="nav-cta" style={{ padding: '0.8rem 2rem', fontSize: '1rem', textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
