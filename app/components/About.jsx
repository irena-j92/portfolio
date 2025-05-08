import Image from 'next/image';
import { assets, infoList, toolsData } from '../../assets/assets';
import React from 'react';
import { motion } from 'motion/react';

const About = ({ isDarkMode }) => {
  return (
    <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20"
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
     <motion.h2 className="text-center text-5xl font-Ovo"
     initial={{opacity: 0, y: -20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5, delay: 0.5}}>
     About me</motion.h2>

      <motion.div className="flex w-full flex-col lg:flex-row items-center gap-20 my-10"
       initial={{opacity: 0}}
       whileInView={{opacity: 1}}
       transition={{duration: 0.8}}>
        <motion.div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
        </motion.div>

        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
        className="flex-1">
          <p className="mb-10 max-w-2xl">
          As a passionate UX/UI designer, I specialize in creating intuitive and engaging digital experiences that resonate with users,
          ensuring that each project not only meets functional requirements but also delivers a delightful user journey.
          </p>

          <motion.ul
           initial={{opacity: 0}}
           whileInView={{opacity: 1}}
           transition={{duration: 0.8, delay: 1}}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
              whileHover={{opacity: 1.05}}
                className="border border-gray-400 rounded-xl p-6 cursor-pointer
                hover:bg-lightHover dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
          initial={{y: 20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{delay: 1.3, duration: 0.5}}
          className="my-6 text-gray-700 text-xl font-medium
          dark:text-white/80 mb-4 mt-8">Tools I use:</motion.h4>

          <motion.ul
           initial={{opacity: 0}}
           whileInView={{opacity: 1}}
           transition={{duration: 0.6, delay: 1.5}}
          className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <motion.li
              whileHover={{scale: 1.1}}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
