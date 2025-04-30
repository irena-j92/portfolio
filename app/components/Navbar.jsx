import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode, isModal = false, modalRef = null, onClose }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  const handleNavigation = (id) => {
    if (isModal) {
      // Step 1: Close the modal first
      onClose?.();
  
      // Step 2: Wait for the modal to be closed and unmounted
      setTimeout(() => {
        if (id === "#top") {
          // Scroll the main window to the top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Scroll inside the landing page to a specific section
          const element = document.querySelector(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 400); // 400ms delay = enough time for your modal to close
    } else {
      // Normal navigation (not inside modal)
      if (id === "#top") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };
  
  const scrollToSection = (id) => {
    if (modalRef?.current) {
      const element = modalRef.current.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Image */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="header" className='w-full' />
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 w-full px-5 lg:px-8 xl:px-[8%] py-4
        flex items-center justify-between z-50 ${isScroll ? 
          "bg-white bg-opacity-100 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:bg-opacity-100" : ""}`}>
        
        {/* Logo */}
        <button onClick={() => handleNavigation("#top")}>
  <Image src={isDarkMode ? assets.logo_dark : assets.logo} className="w-28 cursor-pointer mr-14" alt="Logo" />
</button>


        {/* Links */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
        ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
        
        {[
          { id: "#top", label: "Home" },
          { id: "#about", label: "About" },
          { id: "#services", label: "Services" },
          { id: "#work", label: "Projects" }
        ].map((item) => (
          <li key={item.id}>
            <button 
              onClick={() => handleNavigation(item.id)}
              className="font-Ovo"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

        {/* Right Side */}
        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="sun icon" className='w-6' />
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10
            py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo
            dark:border-white/50'>Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow icon" className='w-3' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu" className='w-6' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-gray-100 transition duration-500
        dark:bg-darkHover dark:text-white'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className='w-5 cursor-pointer' />
          </div>

          {/* Mobile links */}
          {[
          { id: "#top", label: "Home" },
          { id: "#about", label: "About me" },
          { id: "#services", label: "Services" },
          { id: "#work", label: "My Work" },
          { id: "#contact", label: "Contact me" }
        ].map((item) => (
          <li key={item.id}>
            <button 
              onClick={() => {
                handleNavigation(item.id);
                closeMenu();
              }}
              className="font-Ovo"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      </nav>
    </>
  );
};

export default Navbar;


