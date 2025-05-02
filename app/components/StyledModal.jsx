import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../../assets/assets';
import Image from 'next/image';
import Brom from './Brom';
import Lastfm from './Lastfm';
import Bromberg from './Bromberg';
import useModalStore from './modalStore';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowUp, ArrowLeft } from 'lucide-react';

const StyledModal = ({ isDarkMode, setIsDarkMode }) => {
  const modalRef = useRef(null);
  const { isOpen, currentProject, closeModal } = useModalStore();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleScroll = () => {
      // Show button when user scrolls down 300px
      if (modalRef.current) {
        setShowScrollButton(modalRef.current.scrollTop > 300);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const renderProjectContent = () => {
    if (!currentProject) return null;

    switch (currentProject.id) {
      case 1:
        return <Bromberg project={currentProject} />;
      case 2:
        return <Brom project={currentProject} />;
      case 3:
        return <Lastfm project={currentProject} />;
      default:
        return null;
    }
  };

  const scrollToTop = () => {
    if (modalRef.current) {
      modalRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (!isOpen || !currentProject) return null;

  return (
    <div 
      ref={modalRef}
      className={`fixed inset-0 z-50 flex flex-col 
        ${isDarkMode ? 'bg-[#111111] text-white' : 'bg-white text-gray-700'}
        overflow-y-auto`}   
    >

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:transform hover:scale-110
            ${isDarkMode 
              ? 'bg-gray-800 text-white hover:bg-gray-700' 
              : 'bg-white text-gray-800 hover:bg-gray-100'}`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      )}

<Navbar
  isModal={true} 
  onClose={closeModal} 
  isDarkMode={isDarkMode} 
  setIsDarkMode={setIsDarkMode}
  modalRef={modalRef}
  className="md:bg-white dark:bg-[#111111] sm:bg-white dark:bg-[#111111] shadow-none border-none"
/>

      {/* Content */}
      
      <div className="flex-1 pt-24 p-4 sm:p-8 sm:mx-20">
        {renderProjectContent()}
      </div>

      <div className="fixed hidden lg:block sm:top-[180px] sm:left-[130px] sm:z-50">
      <button 
          onClick={closeModal}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 shadow-lg dark:bg-white dark:text-black"
  >
    <ArrowLeft size={20} />
        </button>
      </div>

      <div 
  className="fixed bottom-6 right-6 z-50"
>
  <button
    onClick={() => {
      if (modalRef.current) {
        modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }}
    className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 shadow-lg dark:bg-white dark:text-black"
  >
    <ArrowUp size={20} />
  </button>
</div>

      <Footer isModal={true}
      onClose={closeModal}
      isDarkMode={isDarkMode} 
      setIsDarkMode={setIsDarkMode}
      />
    </div>
  );
};

export default StyledModal;
