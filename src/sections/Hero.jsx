import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Effects from "../components/Effects";          
import Rig from "../components/Rig";     

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `Building clean, animated, 
  and meaningful web experiences.`;

  return (
    <section id="home" className="relative flex flex-col justify-end min-h-screen h-screen w-full overflow-hidden" style={{ height: "100vh", marginTop: 0, paddingTop: 0 }}>
      
      <AnimatedHeaderSection
        subTitle={"404 No Bugs Found"}
        title={"Simone Conti"}
        text={text}
        textColor={"text-black"}
      />

      <figure className="relative h-[70vh] sm:h-[75vh] md:h-[80vh]">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0.5, 0.4, 4.2], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
        >
          {/* Luci base */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 2, 2]} intensity={1.2} castShadow />

          {/* Particelle morbide sullo sfondo */}
          <Sparkles
            count={isMobile ? 80 : 160}   // ✅ NEW
            size={isMobile ? 1.2 : 1.6}
            speed={0.3}
            opacity={0.6}
            scale={[12, 6, 6]}
          />

          {/* Pianeta con Float (già usato da te) */}
          <Float
            speed={1.2}
            rotationIntensity={0.3}
            floatIntensity={0.8}
          >
            <Planet scale={isMobile ? 0.9 : 1.1} />
          </Float>

          {/* Ambiente + lightformers (come nel tuo) */}
          <Environment resolution={256} frames={Infinity} preset="city">
            <group>
              <Lightformer
                form="rect"
                intensity={1.2}
                position={[-10, 10, -10]}
                scale={10}
                target={[0, 0, 0]}
              />
              <Lightformer form="ring" intensity={2} position={[10, 1, 0]} scale={16} />
            </group>
          </Environment>

          {/* Post-processing & Camera rig */}
          <Effects />     {/* ✅ NEW */}
          <Rig />         {/* ✅ NEW */}
        </Canvas>
        
      </figure>
    </section>
  );
};

export default Hero;