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
  const contentRef = useRef(null);
  const { isOpen, currentProject, closeModal } = useModalStore();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Handle escape key and scroll button visibility
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleScroll = () => {
      if (modalRef.current) {
        setShowScrollButton(modalRef.current.scrollTop > 300);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const modalEl = modalRef.current;
    if (modalEl) {
      modalEl.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (modalEl) modalEl.removeEventListener('scroll', handleScroll);
    };
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
        behavior: 'smooth',
      });
    }
  };

  // Return early if modal isn't open or current project is not set
  if (!isOpen || !currentProject) return null;

  // Determine content padding and max width based on screen size
  const getContentPadding = () => {
    if (windowSize.width < 640) {
      return 'px-4 py-6 mx-2'; // Mobile
    } else if (windowSize.width < 1024) {
      return 'px-6 py-8 mx-4 sm:mx-8'; // Tablet
    } else {
      return 'px-8 py-10 mx-auto sm:mx-12 md:mx-16 lg:mx-20'; // Desktop
    }
  };

  const getContentMaxWidth = () => {
    if (windowSize.width < 640) {
      return 'w-full';
    } else if (windowSize.width < 1024) {
      return 'w-full max-w-3xl';
    } else {
      return 'w-full max-w-5xl';
    }
  };

  return (
    <div
      ref={modalRef}
      className={`fixed inset-0 z-50 flex flex-col
        ${isDarkMode ? 'bg-[#111111] text-white' : 'bg-white text-gray-700'}
        overflow-y-auto`}
      style={{
        height: '100vh',
        maxHeight: '100vh',
      }}
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

      {/* Navbar */}
      <Navbar
        isModal={true}
        onClose={closeModal}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        modalRef={modalRef}
        className={`sticky top-0 w-full z-40 shadow-hidden border border-hidden ${
          isDarkMode ? 'bg-[#111111]' : 'bg-white'
        }`}
      />

      {/* Content */}
      <div className={`flex-1 pt-24 ${getContentPadding()}`} style={{ flexGrow: 1 }}>
        {renderProjectContent()}
      </div>

      {/* Close Button for Larger Screens */}
      <div className="fixed hidden lg:block sm:top-[180px] sm:left-[130px] sm:z-50">
        <button
          onClick={closeModal}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 shadow-lg dark:bg-white dark:text-black"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 shadow-lg dark:bg-white dark:text-black"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Footer with margin-top auto to push it to the bottom */}
      <Footer
        isModal={true}
        onClose={closeModal}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        className="mt-auto"
      />
    </div>
  );
};

export default StyledModal;