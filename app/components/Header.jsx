import { assets } from '@/assets/assets' 
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react';

const Header = ( {isDarkMode} ) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="mb-2">
       <Image src={isDarkMode ? assets.illustration_white : assets.illustration_dark}
       alt="illustration" width={380} height={380} />
      </motion.div>

      <motion.h1
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className='text-3xl sm:text-5xl lg:text-[60px] font-Ovo'>
        Hello! I'm Irena 👋🏻
      </motion.h1>

      <motion.h3
       initial={{ y: -30, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.8, delay: 0.5 }}
      className='flex items-end gap-2 text-xl md:text-2xl mt-2 font-Ovo'>
      UX/UI designer based in Cologne. </motion.h3>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className='max-w-2xl mx-auto font-Ovo'>
      I am an experienced designer with a focus on UX/UI design.
        <br />
        Explore, click, and have fun while you're here!
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-2'>
        <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
          href="/sample-resume.pdf" download
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
          Resume <Image src={assets.download_icon_white} alt="download icon" className='w-4' />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
