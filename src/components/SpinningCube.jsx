import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cube() {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FFF700" />
    </mesh>
  );
}

export default function SpinningCube() {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube />
      </Canvas>
    </div>
  );
}