import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Profile = ({ isMobile }) => {
  const profile = useGLTF('./avatar/model (2).glb');

  const ref = useRef();
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    ref.current.position.y = Math.sin(time * 2) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]} 
        angle={0.12} penumbra = {1}
        intensity = {1} castShadow
        shadow-mapSize-width = {1024}/>
      <primitive
        object={profile.scene}
        // scale = {isMobile ? 0.7 : 0.75}
        // position = {isMobile ? [0, -3, -2]: [0, -3.25, -1.5]}
        // rotation = {[-0.01, -0.2, -0.1]}
        scale = {isMobile ? 0.7 : 3.6}
        position = {isMobile ? [0, -3, -2]: [-2, -3.5, -7.2]}
        rotation = {[0.12, 1.1, -0.1]}
        />
    </mesh>
  )
}

const ProfileCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handler = e => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    }
  }, []);


  return (
    <Canvas
    frameloop='always' shadows camera={{position: [20, 3, 5], fov: 25}}
    gl = {{preserveDrawingBuffer: true}} >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Profile isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ProfileCanvas;