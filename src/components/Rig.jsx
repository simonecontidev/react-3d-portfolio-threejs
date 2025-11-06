import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Rig({ damp = 0.08, rotate = 0.02 }) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3());

  useFrame((_, dt) => {
    // Parallax: camera guarda verso un target smorzato dal mouse
    target.current.set(pointer.x * 0.6, pointer.y * 0.4, 0);
    camera.position.x += (target.current.x - camera.position.x) * damp;
    camera.position.y += (target.current.y - camera.position.y) * damp;

    // Leggerissima auto-rotazione della camera attorno allo Z
    camera.rotation.z += rotate * dt;
    camera.lookAt(0, 0, 0);
  });

  return null;
}