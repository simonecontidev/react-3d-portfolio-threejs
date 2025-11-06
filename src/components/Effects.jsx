import { EffectComposer, Bloom, Vignette, Noise, SMAA } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <SMAA />
      <Bloom
        intensity={0.6}
        mipmapBlur
        luminanceThreshold={0.7}
        luminanceSmoothing={0.2}
      />
      <Noise premultiply opacity={0.08} />
      <Vignette eskil={false} offset={0.25} darkness={0.8} />
    </EffectComposer>
  );
}