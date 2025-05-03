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

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  useEffect(() => {
    if (isOpen) {
      // Trigger layout recalculation
      window.dispatchEvent(new Event('resize'));
    }
    return () => {};
  }, [isOpen]);
  window.scrollTo(0, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (modalRef.current) {
        setShowScrollButton(modalRef.current.scrollTop > 300);
      }
    };

    const ref = modalRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

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
      className={`fixed inset-0 z-50 flex flex-col transform-gpu overflow-y-auto
        ${isDarkMode ? 'bg-[#111111] text-white' : 'bg-white text-gray-700'}`}
    >
      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110
            ${isDarkMode
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-white text-gray-800 hover:bg-gray-100'}`}
        >
          <ArrowUp size={20} />
        </button>
      )}

      <Navbar
        isModal={true}
        onClose={closeModal}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        modalRef={modalRef}
        className="bg-white dark:bg-[#111111] shadow-none border-none"
      />

      {/* Main content */}
      <div className="flex-1 pt-24 p-4 sm:p-6 md:p-8 sm:mx-6 md:mx-20">
        {renderProjectContent()}
      </div>

      {/* Close button (only visible on large screens) */}
      <div className="fixed hidden lg:block top-[180px] left-[130px] z-50">
        <button
          onClick={closeModal}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 shadow-lg dark:bg-white dark:text-black"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <Footer
        isModal={true}
        onClose={closeModal}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </div>
  );
};

export default StyledModal;