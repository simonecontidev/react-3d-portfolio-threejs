import { ContactShadows } from "@react-three/drei";
export default function GroundShadows() {
  return (
    <ContactShadows
      position={[0, -1.02, 0]}
      scale={12}
      opacity={0.45}
      blur={2.8}
      far={3}
      frames={1}
    />
  );
}