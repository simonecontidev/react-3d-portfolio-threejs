import * as THREE from "three";
import { useMemo } from "react";
import { Line } from "@react-three/drei";

export default function OrbitLines({ rings = 3, radius = 2.8 }) {
  const curves = useMemo(() => {
    const arr = [];
    for (let i = 0; i < rings; i++) {
      const r = radius * (0.85 + (i / rings) * 0.5);
      const pts = new Array(100).fill(0).map((_, k) => {
        const t = (k / 100) * Math.PI * 2;
        return new THREE.Vector3(Math.cos(t) * r, 0, Math.sin(t) * r);
      });
      arr.push(pts);
    }
    return arr;
  }, [rings, radius]);

  return (
    <group rotation={[-0.25, 0.2, -0.8]}>
      {curves.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color="#b5c7ff"
          lineWidth={1}
          transparent
          opacity={0.35}
        />
      ))}
    </group>
  );
}