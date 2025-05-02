import React from 'react';
import { assets, workData } from '../../assets/assets';
import Image from 'next/image';
import StyledModal from './StyledModal';
import useModalStore from './modalStore';
import { motion } from 'motion/react';

const Work = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

    <motion.h2
     initial={{y: -20, opacity: 0}}
     whileInView={{y: 0, opacity: 1}}
     transition={{delay: 0.3, duration: 0.5}}
    className='text-center text-5xl font-Ovo'>Latest projects</motion.h2>
      
      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
      className='text-center max-w-2xl mx-auto mt-8 mb-20 font-Ovo'>
        Here's a glimpse into some of my most recent projects.
        Dive in to see how I bring ideas to life through clean interfaces, meaningful interactions, and a strong attention to detail.
      </motion.p>

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay: 0.9, duration: 0.6}}
      className='grid grid-cols-1 sm:grid-cols-3 my-10 gap-5 dark:text-black'>
        {workData.map((project, index) => (
           <motion.div
           whileHover={{scale: 1.05}}
           transition={{duration: 0.3}}
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group text-white'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => openModal(project)}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg'></div>
            <div className='w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
              justify-between duration-500 group-hover:bottom-7 bg-white/30 backdrop-blur-md'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-white'>{project.description}</p>
              </div>

              <motion.div
               initial={{y: -20, opacity: 0}}
               whileInView={{y: 0, opacity: 1}}
               transition={{delay: 0.3, duration: 0.5}}
              className='rounded-full w-9 aspect-square flex items-center
              justify-center bg-transparent group-hover:bg-gray-900 transition'>
                <Image src={assets.right_arrow_white} alt='right arrow' className='w-5' />
              </motion.div>

            </div>
          </motion.div>
        ))}
        <StyledModal />
      </motion.div>
    </motion.div>
  );
};

export default Work;
