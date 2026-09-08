import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

/**
 * Three.js + GSAP 3D Interactive Hero Background.
 *
 * Combining WebGL 3D graphics (Three.js) with smooth motion curves (GSAP):
 * - Crisp White 3D Particle Field with dynamic network connection lines
 * - Rotating 3D Wireframe Icosahedron & Concentric Geometric Rings
 * - Adaptive frustum bounding for flawless mobile & desktop rendering
 * - Touch & Pointer interaction with smooth GSAP damping
 */

export default function HeroBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer Setup
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 18;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    const isMobile = width < 768;

    // Frustum Visible Dimensions at z = 0
    const vFov = (camera.fov * Math.PI) / 180;
    let visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
    let visibleWidth = visibleHeight * (width / height);

    let boundsX = Math.max(visibleWidth * 0.52, 6);
    let boundsY = Math.max(visibleHeight * 0.52, 8);
    const boundsZ = 10;

    // 2. 3D Particles
    const particleCount = isMobile ? 65 : 100;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * boundsX * 2;
      const y = (Math.random() - 0.5) * boundsY * 2;
      const z = (Math.random() - 0.5) * boundsZ;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.007,
        y: (Math.random() - 0.5) * 0.007,
        z: (Math.random() - 0.5) * 0.007,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Custom Canvas Texture — sharp crisp white circle
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(16, 16, 12, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.36 : 0.42,
      map: createParticleTexture(),
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 2b. Dynamic Network Connection Lines
    const maxConnections = isMobile ? 70 : 140;
    const linkDistance = isMobile ? 3.8 : 5.2;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 4);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 4));
    lineGeometry.setDrawRange(0, 0);

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // 3. Geometric 3D Core Wireframes
    const heroGroup = new THREE.Group();
    scene.add(heroGroup);

    // Core Icosahedron Wireframe
    const icoGeometry = new THREE.IcosahedronGeometry(isMobile ? 2.6 : 5.0, 2);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    heroGroup.add(icoMesh);

    // Concentric Outer Torus Ring
    const torusGeometry = new THREE.TorusGeometry(isMobile ? 4.2 : 7.8, 0.035, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.rotation.x = Math.PI / 3;
    heroGroup.add(torusMesh);

    // Position Group in 3D Space (Centered on mobile, offset right on desktop)
    heroGroup.position.x = isMobile ? 0 : 5.5;
    heroGroup.position.y = isMobile ? 0.4 : 0;
    heroGroup.position.z = isMobile ? -1 : -2;
    heroGroup.scale.set(0.2, 0.2, 0.2);

    // 4. GSAP Entrance Timeline & Continuous Tweens
    const ctxGSAP = gsap.context(() => {
      if (reduceMotion) {
        particleMaterial.opacity = 0.8;
        lineMaterial.opacity = 0.55;
        icoMaterial.opacity = isMobile ? 0.35 : 0.26;
        torusMaterial.opacity = isMobile ? 0.45 : 0.35;
        heroGroup.scale.set(1, 1, 1);
        return;
      }

      // Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(heroGroup.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2.0,
        ease: 'back.out(1.2)',
      }, 0);

      tl.to(particleMaterial, { opacity: 0.9, duration: 1.6 }, 0.2);
      tl.to(lineMaterial, { opacity: isMobile ? 0.6 : 0.55, duration: 1.8 }, 0.3);
      tl.to(icoMaterial, { opacity: isMobile ? 0.35 : 0.28, duration: 1.8 }, 0.4);
      tl.to(torusMaterial, { opacity: isMobile ? 0.48 : 0.38, duration: 2.0 }, 0.5);

      // Continuous Floating Bobbing with GSAP
      gsap.to(heroGroup.position, {
        y: isMobile ? '+=0.4' : '+=0.6',
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      });

      // Pulse Icosahedron Wireframe
      gsap.to(icoMesh.scale, {
        x: 1.06,
        y: 1.06,
        z: 1.06,
        duration: 3.0,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      });
    }, container);

    // 5. Interactive Mouse & Touch Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const updateCoords = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();
      const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((clientY - rect.top) / rect.height) * 2 - 1);

      mouse.targetX = nx * (isMobile ? 0.25 : 0.45);
      mouse.targetY = ny * (isMobile ? 0.2 : 0.35);

      if (!reduceMotion) {
        gsap.to(mouse, {
          x: mouse.targetX,
          y: mouse.targetY,
          duration: 1.2,
          ease: 'power2.out',
        });
      }
    };

    const onPointerMove = (e) => updateCoords(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updateCoords(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // 6. Render Loop
    let animationFrameId = null;
    let isRunning = true;

    const animate = () => {
      if (!isRunning) return;

      if (!reduceMotion) {
        // Drifting Particles
        const positions = particleGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] += particleVelocities[i].x;
          positions[i * 3 + 1] += particleVelocities[i].y;
          positions[i * 3 + 2] += particleVelocities[i].z;

          // Boundary Wrapping
          if (Math.abs(positions[i * 3]) > boundsX) particleVelocities[i].x *= -1;
          if (Math.abs(positions[i * 3 + 1]) > boundsY) particleVelocities[i].y *= -1;
          if (Math.abs(positions[i * 3 + 2]) > boundsZ) particleVelocities[i].z *= -1;
        }
        particleGeometry.attributes.position.needsUpdate = true;

        // Update Network Connection Lines
        let lineIdx = 0;
        const lp = lineGeometry.attributes.position.array;
        const lc = lineGeometry.attributes.color.array;

        for (let i = 0; i < particleCount && lineIdx < maxConnections; i++) {
          for (let j = i + 1; j < particleCount && lineIdx < maxConnections; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < linkDistance) {
              const alpha = 1 - dist / linkDistance;

              // Vertex A
              lp[lineIdx * 6] = positions[i * 3];
              lp[lineIdx * 6 + 1] = positions[i * 3 + 1];
              lp[lineIdx * 6 + 2] = positions[i * 3 + 2];
              // Vertex B
              lp[lineIdx * 6 + 3] = positions[j * 3];
              lp[lineIdx * 6 + 4] = positions[j * 3 + 1];
              lp[lineIdx * 6 + 5] = positions[j * 3 + 2];

              // RGBA for both vertices
              lc[lineIdx * 8] = 1; lc[lineIdx * 8 + 1] = 1; lc[lineIdx * 8 + 2] = 1; lc[lineIdx * 8 + 3] = alpha * 0.55;
              lc[lineIdx * 8 + 4] = 1; lc[lineIdx * 8 + 5] = 1; lc[lineIdx * 8 + 6] = 1; lc[lineIdx * 8 + 7] = alpha * 0.55;

              lineIdx++;
            }
          }
        }

        lineGeometry.setDrawRange(0, lineIdx * 2);
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;

        // 3D Geometry Rotations
        icoMesh.rotation.x += 0.003;
        icoMesh.rotation.y += 0.0045;
        torusMesh.rotation.z += 0.0035;

        // Apply Parallax to Scene Rotation
        scene.rotation.y = mouse.x * 0.4;
        scene.rotation.x = -mouse.y * 0.3;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start render loop
    animationFrameId = requestAnimationFrame(animate);

    // 7. Resize Observer
    const handleResize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      if (!width || !height) return;

      const mobileNow = width < 768;
      heroGroup.position.x = mobileNow ? 0 : 5.5;
      heroGroup.position.y = mobileNow ? 0.4 : 0;
      heroGroup.position.z = mobileNow ? -1 : -2;

      visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
      visibleWidth = visibleHeight * (width / height);
      boundsX = Math.max(visibleWidth * 0.52, 6);
      boundsY = Math.max(visibleHeight * 0.52, 8);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 8. Clean up
    return () => {
      isRunning = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchmove', onTouchMove);

      resizeObserver.disconnect();
      ctxGSAP.revert();

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="hero-canvas" aria-hidden="true" />;
}
