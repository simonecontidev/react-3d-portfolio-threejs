import { MeshReflectorMaterial } from "@react-three/drei";

export default function ReflectiveFloor(props) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} {...props}>
      <planeGeometry args={[20, 20]} />
      <MeshReflectorMaterial
        blur={[400, 80]}
        resolution={1024}
        mixBlur={0.8}
        mixStrength={2}
        roughness={0.6}
        depthScale={0.6}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.5}
        metalness={0.2}
        mirror={0.2}
        color="#101013"
      />
    </mesh>
  );
}