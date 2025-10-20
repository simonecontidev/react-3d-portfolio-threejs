import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimateTextLines";

const Hero = () => {
    const contextRef = useRef(null);
    const headerRef = useRef(null);
    const aboutText = `I help growinf brands and company gain an unfair advantage through premium results driven webs/app`;

  return (
    <section id="home" 
    className="flex flex-col justify-end min-h-screen">
        <div ref={contextRef}>
            <div style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%"} }>
                <div ref={headerRef} className="flex flex-col justify-center gap-12 pt-16 sm:gap-16">
                    <p className="text-sm font-light tracliking-[0.5rem] uppercase px-10 text-black">404 no bugs found</p>
                <div className="px-10">
                    <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block text-5xl">Simone Conti</h1>
                    </div>
                </div>
            </div>

            <div className="relative px-10 text-black">
                <div className="absolute inset-x-0 border-t-2"></div>
                <div className="py-12 sm:py-16 text-end">
                    <AnimatedTextLines 
                    text={aboutText} 
                    className="font-light uppercase value-text-responsive">    
                    </AnimatedTextLines>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
