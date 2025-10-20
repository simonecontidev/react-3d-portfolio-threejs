import React, { useRef } from 'react'
import { socials } from '../constants';

const Navbar = () => {
  const navRef = useRef(null);
  const linkRef = useRef([]);
  const contactRef = useRef(null);

  return (
    <nav
      ref={navRef}
      className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-10 md:w-1/2 md:left-1/2'
    >
      <div className='flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl'>
        {["home", "services", "about", "work", "contact"].map((section, index) => (
          <div key={index} ref={(el)=>(linkRef.current[index] = el)}>
            <a className='transition-all duration-300 cursor-pointer hover:text-white'>
              {section}
            </a>
          </div>
        ))}
      </div>

      <div ref={contactRef} className='flex flex-col flex-wrap justify-between gap-8 md:flex-row'>
        <div className='font-light'>
            <p className='tracking-wider text-white/50'>email</p>
            <p className='text-xl trackin-wider lowercase text-pretty'>simonecontisid@gmail.com</p>
        </div>
        <div className='font-light'>
            <p className='tracking-wider text-white/50'>Social Media</p>
            <div className='flex flex-col flex-wrap md:flex-row gap-x-2'>
                {socials.map((social, index) => (
                    <a key={index}
                    href={social.href}
                     className='text-sm tracking-widest leading-loose uppercase hover:text-white transition-colors duration-300'>
                        {"{"}{social.name}{"}"}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;