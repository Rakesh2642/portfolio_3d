import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoder from "../Loader";

const Computers = (isMobile) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // const computer = useGLTF("./Gaming_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.15} groundColor="black" />
      <pointLight intensity={1}  />
      <spotLight 
       position={[-20,50,10]}
       angle={0.12}
       penumbra={1}
       intensity={1}
       castShadow
       shadow-mapSize={1024}
      />
      <primitive
       object={computer.scene} 
       scale={isMobile ? 0.7 : 0.75}
       position={isMobile ? [0,-4,-1.2] : [0, -3.25, -1.5]}
        // position={isMobile ? [-12,-5,-4.2] : [0, -4, -1.5]}
       rotation={[-0.01, -0.2, -0.1]}
     />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] =useState( false );
  useEffect( () =>{
    const mediaQuary = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuary.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuary.addEventListener('change',handleMediaQueryChange);
   return () => {
    mediaQuary.removeEventListener('change',handleMediaQueryChange);
   }    
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoder />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  ); 
};

export default ComputersCanvas;