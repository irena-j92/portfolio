import React from 'react';
import Image from 'next/image';
import { project } from '../project/project';
import { assets } from '../../assets/assets';
import iframe from 'iframe';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import MobileImage from './MobileImage';
import ResponsiveImageModal from './ResponsiveImageModal'

const Brom = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className="text-lg">

<br />
    <motion.h1
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
    className="text-center text-5xl font-Ovo mt-8">Brom AI Assistant</motion.h1>
    <motion.h4
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='text-center mt-2 text-lg font-Ovo'>Smart support for a smart city</motion.h4>

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
   transition={{duration: 0.6, delay: 0.9}}>
    <Image src={project.brom_hero} alt="Hero Image" width={900} height={800} objectFit="cover" className="rounded-[16px] mt-12 mx-auto"
    onContextMenu={(e) => e.preventDefault()} /></motion.div>

  <motion.div
  initial={{opacity: 0, y: -20}}
  whileInView={{opacity: 1, y: 0}}
  transition={{duration: 0.5, delay: 0.3}}
  className='inline-flex text-center grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto text-[15px] justify-center gap-1 px-1 my-10'>
  <div>
    <ul className='m-0 p-0 font-bold text-[#3F47D3] dark:text-[#B9BFF9]'>ROLE:</ul>
    <ul className='m-0 p-0'>Product Design (UX/UI)</ul>
  </div>

  <div>
    <ul className='m-0 p-0 font-bold text-[#3F47D3] dark:text-[#B9BFF9]'>TIMELINE:</ul>
    <ul className='m-0 p-0'>6 weeks - 60+ hours</ul>
  </div>

  <div>
    <ul className='m-0 p-0 font-bold text-[#3F47D3] dark:text-[#B9BFF9]'>TOOLS USED:</ul>
    <ul className='m-0 p-0'>Figma</ul>
  </div>
</motion.div>

<motion.hr
  initial={{opacity: 0, y: -20}}
  whileInView={{opacity: 1, y: 0}}
  transition={{duration: 0.5, delay: 0.3}}
className="mx-auto flex justify-center mt-10 max-w-4xl border-[#ABABAB] dark:border-gray-700" />

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className="max-w-4xl mx-auto space-y-6">

<h3 className='gap-2 text-2xl md:text-2xl mb-3 mt-8 font-Ovo px-2 sm:px-0 md:px-0 font-semibold text-[#3F47D3] dark:text-[#B9BFF9]'>Project Overview </h3>

<p className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'><b>Brom is a virtual AI assistant app answering all questions regarding the
city of Bromberg.</b> Sustainability stands in the forefront of the city’s ideology and in this case, technology can help keeping the city „green“
by lowering the amount of people driving through the city to finish administrative tasks. It would also help save time, so the residents of
Bromberg could maintain a better life quality. <b>Citizens would be able to store important documents, view, edit and digitally sign them.
They have access to the city’s digital office, where they can virtually book appointments. Additionally, the app is supposed to help tourists
and newbies explore the city and build a community of like-minded people.</b></p>

</motion.div>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}
className="text-lg max-w-4xl mx-auto space-y-6">
      <h3 className='gap-2 text-2xl md:text-2xl mb-3 mt-8 font-Ovo px-2 font-semibold text-[#3F47D3] dark:text-[#B9BFF9]'>Project Goals </h3>

    <p className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'><b>The main project goal is to create an interactive app with an intuitive
      user interface that will be a helpful tool for Bromberg’s stakeholders.</b> The app should offer a wide range of functions with the AI assistant in
      the center. You can ask questions by typing or through voice recordings and view your history. Besides helping users finish their tasks faster
      and answering their questions, the app should also serve as a storage for important documents and files. <b>Users should be able to verify their
      identity and carry digital copies of their IDs.</b> The community functions like reviews and comments should be integrated. </p></motion.div>

<br />

  <motion.div
  initial={{opacity: 0, y: -20}}
  whileInView={{opacity: 1, y: 0}}
  transition={{duration: 0.5, delay: 0.3}}
  className="flex gap-4 max-w-4xl mx-auto mt-10 justify-between overflow-x-auto">
  <div className="flex flex-col items-center min-w-fit">
    <div className="bg-[#3F47D3] font-Ovo rounded-full px-8 py-7 text-center text-4xl text-white">01</div>
    <div className="mt-2 text-center text-sm font-medium text-gray-500">EMPATHIZE</div>
  </div>
<ul className='flex items-center mb-6 text-[#ABABAB]'><hr className="w-[50px] border-[#ABABAB]" /></ul>
  <div className="flex flex-col items-center min-w-fit">
    <div className="bg-[#3F47D3] font-Ovo rounded-full px-7 py-7 text-center text-4xl text-white">02</div>
    <div className="mt-2 text-center text-sm font-medium text-gray-500">DEFINE</div>
  </div>
  <ul className='flex items-center mb-6 text-[#ABABAB]'><hr className="w-[50px] border-[#ABABAB]" /></ul>
  <div className="flex flex-col items-center min-w-fit">
    <div className="bg-[#3F47D3] font-Ovo rounded-full px-7 py-7 text-center text-4xl text-white">03</div>
    <div className="mt-2 text-center text-sm font-medium text-gray-500">IDEATE</div>
  </div>
  <ul className='flex items-center mb-6 text-[#ABABAB]'><hr className="w-[50px] border-[#ABABAB]" /></ul>
  <div className="flex flex-col items-center min-w-fit">
    <div className="bg-[#3F47D3] font-Ovo rounded-full px-7 py-7 text-center text-4xl text-white">04</div>
    <div className="mt-2 text-center text-sm font-medium text-gray-500">PROTOTYPE</div>
  </div>
  <ul className='flex items-center mb-6 text-[#ABABAB]'><hr className="w-[50px] border-[#ABABAB]" /></ul>
  <div className="flex flex-col items-center min-w-fit">
    <div className="bg-[#3F47D3] font-Ovo rounded-full px-7 py-7 text-center text-4xl text-white">05</div>
    <div className="mt-2 text-center text-sm font-medium text-gray-500">TEST</div>
  </div>
</motion.div>

<br />

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      className="max-w-4xl mx-auto space-y-6">
     <motion.h3
     initial={{opacity: 0, y: -20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5, delay: 0.3}}
     className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-10 px-2 font-Ovo font-semibold text-[#3F47D3] dark:text-[#B9BFF9]'>01 / Empathize </motion.h3>
     <motion.p
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 0.5, delay: 0.7}}
     className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'><b>The main theme of my research was the reception of AI by people. </b>
      The questions that were circulating in my mind were: Would the majority of Bromberg use this app? Would it be useful to integrate an AI Assistant
      or alternatively create an app where you have to navigate through all the content by yourself? One of the things I've found out is that 
      <b> experts encourage businesses to start developing and using their own AI assistants as they are efficient, time and money-saving helpers,
      that can be viewed as an employee who works 24/7 without charging extra money or lacking in their performance.</b></motion.p>
    
    <motion.h4
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.9}}
    className='flex items-end gap-2 text-2xl sm:text-lg md:text-2xl mb-3 mt-20 px-2 sm:px-0 md: px-2 sm:px-0 md:px-0 font-Ovo font-semibold'>User Interviews </motion.h4>
    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.7, delay: 1.1}}
    className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>The participants for the interviews were the same as for Bromberg’s website.
      Only this time, <b>the questions were more tech-oriented, helping me understand how technology affects the lives of the participants, how much they
      use it on daily basis and what their general thoughts on artificial intelligence is.</b> Most of them were open to finding out more about the topic while still expressing their
      concern over the impact of AI on our future. <b>For example, of the 14 participants, 47% were unsure who should be held accountable when mistakes
      occur while using certain smart technologies.</b> Some other numbers I could collect during my research are listed below.</motion.p>

      <motion.div
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.7, delay: 1.3}}
      className='grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 sm:gap-6 items-center'>
      <div className='bg-[#3F47D3] rounded-[20px] px-4 py-6 mb-6 mt-4 max-w-screen'>
      <ul className='text-center text-white text-6xl sm:text-lg lg:text-[70px] md:text-2xl mt-8 font-Ovo'>75%</ul>
      <ul className='text-center text-sm md:text-sm sm:text-sm text-white py-4'>fear losing their job <br />to artifical intelligence</ul>
      </div>

      <div className='bg-[#3F47D3] rounded-[20px] px-4 py-6 mb-6 mt-4 max-w-screen'>
      <ul className='text-center text-white text-6xl sm:text-lg lg:text-[70px] md:text-2xl mt-8 font-Ovo'>56%</ul>
      <ul className='text-center text-sm md:text-sm sm:text-sm text-white py-4'>fear relying too much<br />on this technology</ul>
      </div>

      <div className='bg-[#3F47D3] rounded-[20px] px-4 py-6 mb-6 mt-4'>
      <ul className='text-center text-white text-6xl sm:text-lg lg:text-[70px] md:text-2xl mt-8 font-Ovo'>70%</ul>
      <ul className='text-center text-sm md:text-sm sm:text-sm text-white py-4'>think speeding up tasks<br />is a benefit</ul>
      </div>

      <div className='bg-[#3F47D3] rounded-[20px] px-4 py-6 mb-6 mt-4'>
      <ul className='text-center text-white text-6xl sm:text-lg lg:text-[70px] md:text-2xl mt-8 font-Ovo'>62%</ul>
      <ul className='text-center text-sm md:text-sm sm:text-sm text-white py-4'>encourage AI laws <br />and regulations</ul>
      </div>
      </motion.div>

     <motion.h3
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 0.7, delay: 1.5}}
     className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 px-2 sm:px-0 md:px-0 font-Ovo font-semibold'>User Persona</motion.h3>

    <motion.div
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.7, delay: 1.7}}>
      <Image src={project.brom_tim} alt="Persona" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
      onContextMenu={(e) => e.preventDefault()} /></motion.div>
        <ResponsiveImageModal />

<motion.div
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className="max-w-4xl mx-auto space-y-6">
<h3 className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 px-2 font-Ovo font-semibold text-[#3F47D3] dark:text-[#B9BFF9]'>02 / Define</h3>
</motion.div>

<motion.h3
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 px-2 sm:px-0 md:px-0 font-Ovo font-semibold'>Competitive Analysis</motion.h3>

 <motion.p
 initial={{opacity: 0}}
 whileInView={{opacity: 1}}
 transition={{duration: 0.6, delay: 0.9}}
 className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>The AI industry is growing rapidly and there are a handful of AI apps to choose
 from. For my research I've chosen two well known assistants and a website extension of the Visit Helsinki website. <b>The criteria during my inspection
 of the competition were: user support and guides, outputs, inputs, transparency and speed.</b> Since the main point of having an assistant app is to
 help users, it is important to integrate suggestions and offer edit options inside the app. Viewing their chat history and adding bookmarks would also be
 beneficial functions for the user.</motion.p>

<motion.div
 initial={{opacity: 0}}
 whileInView={{opacity: 1}}
 transition={{duration: 0.7, delay: 1.2}}>
<Image src={project.brom_analysis} alt="Analysis" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
onContextMenu={(e) => e.preventDefault()} /></motion.div>

<br />

 <motion.h3
 initial={{opacity: 0, y: -20}}
 whileInView={{opacity: 1, y: 0}}
 transition={{duration: 0.5, delay: 0.3}}
 className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 px-2 sm:px-0 md:px-0 font-Ovo font-semibold'>Affinity Mapping</motion.h3>
 <motion.p
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 0.5, delay: 0.7}}
 className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'><b>After wrapping up the competitive analysis, I started to brainstorm various ideas 
  and possible features for the app.</b> I then sorted out the ones I wanted to focus on and divided them into different groups: UX & Usability, Accessibility, Community, 
  End goals and Bugs & Fixes. Since AI answers being slow is a common problem for various users, I wanted to give the issue special attention. <b>It was also 
  interesting to see if and how the other topics align with users' end goals.</b></motion.p>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}>
<Image src={project.brom_affinity} alt="Affinity Map" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
onContextMenu={(e) => e.preventDefault()} /></motion.div>

<br />
   <motion.div
   initial={{opacity: 0}}
   whileInView={{opacity: 1}}
   transition={{duration: 1}}
   className="max-w-4xl mx-auto space-y-6">
   <motion.h3
   initial={{opacity: 0, y: -20}}
   whileInView={{opacity: 1, y: 0}}
   transition={{duration: 0.5, delay: 0.3}}
   className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-8 px-2 sm:px-0 md:px-0 font-Ovo font-semibold text-[#3F47D3] dark:text-[#B9BFF9]'>03 / Ideate </motion.h3>
   <motion.p
   initial={{opacity: 0}}
   whileInView={{opacity: 1}}
   transition={{duration: 0.5, delay: 0.7}}
   className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>I've created multiple task flows while working on this project, but I've chosen
   two I want to focus on. The first one would be useful for citizens, since they would be able to complete a lot of stress-inducing tasks in the comfort
   of their own home. The second task flow was created for tourists or users who are using the app briefly to search up upcoming events and happenings.</motion.p>
   </motion.div>

  <motion.div
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 0.6, delay: 0.9}}>
  <Image src={project.brom_legend} alt="Legend" width={600} height={800} objectFit="cover" className="rounded-lg mx-auto"
  onContextMenu={(e) => e.preventDefault()} /></motion.div>

  <motion.h3
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 0.7, delay: 1.1}}
  className='flex items-end gap-2 text-2xl md:text-2xl px-2 sm:px-0 md:px-0 font-Ovo font-semibold'>Task Flow: Verifying your identity</motion.h3>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.7, delay: 1.3}}>
 <Image src={project.brom_identity} alt="Identity Verification" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
 onContextMenu={(e) => e.preventDefault()} /></motion.div>

 <motion.h3
 initial={{opacity: 0}}
 whileInView={{opacity: 1}}
 transition={{duration: 0.7, delay: 1.1}}
 className='flex items-end gap-2 text-2xl md:text-2xl mt-12 px-2 sm:px-0 md:px-0 font-Ovo font-semibold'>Task Flow: Searching for events</motion.h3>

 <motion.div
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 0.7, delay: 1.3}}>
 <Image src={project.brom_event} alt="Event search" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
 onContextMenu={(e) => e.preventDefault()} /></motion.div>

<motion.p
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>As shown in the examples above, task completion was reduced to the fewest possible
 steps. Instead of exploring the app with the help of a navigation or menu, the AI assistant allows the user to get straight to their goal. This makes the
 app easy for use and efficient.</motion.p>

 <motion.h3
 initial={{opacity: 0}}
 whileInView={{opacity: 1}}
 transition={{duration: 0.5, delay: 0.7}}
 className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-8 px-2 sm:px-0 md:px-0 font-Ovo font-semibold'>Storyboarding</motion.h3>
 <motion.p
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 0.6, delay: 0.9}}
 className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>I was very excited for the storyboarding process, as designing an AI app was
 on my designer bucket list for some time. It was very challenging understanding the different aspects of the technology and its' complex nature. 
 There were so many aspects to consider while designing the app, so it took me a few tries before I was able to settle on one design.</motion.p>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.7, delay: 1.1}}>
<Image src={project.brom_screens} alt="Screens" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
onContextMenu={(e) => e.preventDefault()} /></motion.div>

<br />

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
ransition={{duration: 1}}
className="max-w-4xl mx-auto space-y-6">
<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='flex items-end gap-2 text-2xl md:text-2xl mt-8 px-2 sm:px-0 md:px-0 font-Ovo font-semibold text-[#3F47D3] dark:text-[#B9BFF9]'>04 / Prototype</motion.h3>
<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'><b>While building out my wireframes, I've worked with components and variants.</b>
 I drew inspiration from various platforms and apps, but it was important to stay focused on the particular needs of Bromberg's stakeholders. After 
 creating low-fidelity wireframes, my biggest concerns were more of a technical nature. It was important to take some extra time to figure out how to 
 incorporate features like the face scan or ID verification. <b>Brom is a very powerful app and I'm sure that there will be even more useful features coming
 in the future.</b></motion.p>
</motion.div>

<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-20 px-2 sm:px-0 md:px-0 font-Ovo font-semibold'>Style Guide</motion.h3>
<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>Bromberg's official color is a shade of pale indigo, so I've chosen it as the 
primary app color. I've combined it with a pastel violet and different neutral colors. The typography is minimalistic and simple as well. 
Alltogether, I ended up creating a simple, but seamless design that is easy understandable and accessible to everyone.</motion.p>

  <motion.div
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 1}}
  className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
  <motion.div
  initial={{opacity: 0, y: -20}}
  whileInView={{opacity: 1, y: 0}}
  transition={{duration: 0.5, delay: 0.3}}
  className='bg-gray-200 rounded-xl w-[400px] h-[400px] text-center'>
  <ul className='text-7xl sm:text-5xl lg:text-[80px] font-Urbanist text-[#3F47D3] text-center mt-20'>Urbanist</ul>
  <ul className='text-7xl sm:text-5xl lg:text-[80px] font-Urbanist text-[#3F47D3] text-center mt-10 sm:mt-6'>*123!@$%</ul>
  <div className='grid grid-cols-3 justify-between mt-20 sm:mt-20'>
  <ul className='font-Urbanist text-[#3F47D3]'>Regular</ul>
  <ul className='font-Urbanist font-semibold text-[#3F47D3]'>Semibold</ul>
  <ul className='font-Urbanist font-bold text-[#3F47D3]'>Bold</ul>
  </div>
  </motion.div>

  <div className='grid grid-cols-2 gap-4 w-[400px] h-[400px] text-center mt-3'>
  <ul className='bg-[#3F47D3] w-[180px] h-[180px] rounded-xl px-6 py-6 text-white'><p className='mt-12'>#3F47D3</p></ul>
  <ul className='bg-[#B9BFF9] w-[180px] h-[180px] rounded-xl px-6 py-6'><p className='mt-12'>#B9BFF9</p></ul>
   <ul className='bg-[#282525] w-[180px] h-[180px] rounded-xl px-6 py-6 text-white'><p className='mt-12'>#282525</p></ul>
  <ul className='bg-[#6A6A6A] w-[180px] h-[180px] rounded-xl px-6 py-6 text-white'><p className='mt-12'>#6A6A6A</p></ul>
  </div>
  </motion.div>

<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>Designing the logo was a rather complex process, as I've tried a few different styles first.
  <b> I have finally chosen a simple, minimalistic icon so it would be easily resizable to any format needed.</b> The icon represents a stylized blackberry since it is the symbol
  of the city of Bromberg. I've reduced it to a shape consisting of only a stroke and a cartoon-like face. The colors were chosen to match the overall app color palette.
</motion.p>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}
className='flex grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 justify-between'>
<Image src={project.brom_notion} alt="Notion Logo" width={200} height={200} objectFit="cover" className="rounded-lg mx-auto" onContextMenu={(e) => e.preventDefault()} />
<Image src={project.brom_cartoon} alt="Cartoon Logo" width={200} height={200} objectFit="cover" className="rounded-lg mx-auto" onContextMenu={(e) => e.preventDefault()} />
<Image src={project.brom_sketch} alt="Sketch" width={200} height={200} objectFit="cover" className="rounded-lg mx-auto" onContextMenu={(e) => e.preventDefault()} />
<Image src={project.brom_logo} alt="Final Logo" width={200} height={200} objectFit="cover" className="rounded-lg mx-auto" onContextMenu={(e) => e.preventDefault()} />
</motion.div>

<motion.div
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='grid grid-cols-2 sm:grid-cols-4 gap-10 mt-2 justify-between'>
    <p className='text-center text-sm'>Logo Version 1</p>
    <p className='text-center text-sm'>Logo Version 2</p>
    <p className='text-center text-sm'>Sketch</p>
    <p className='text-center text-sm'>Final Logo</p>
  </motion.div>

<br />

<motion.h3
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-20 px-2 sm:px-0 md:px-0 font-Ovo font-semibold'>Wireframes</motion.h3>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}>
<iframe src="https://embed.figma.com/proto/67xDB4SHWgmHKNWVFz5JHN/Bromberg-App?node-id=1-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share"
    className="flex items-center justify-center mx-auto mt-10 rounded-[16px]"
    frameBorder="0" width="100%" height="700px"
    allowFullScreen></iframe></motion.div>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 1}}
className="max-w-4xl mx-auto space-y-6">
<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-6 mt-12 px-2 sm:px-0 md:px-0 font-Ovo font-semibold text-[#3F47D3] dark:text-[#B9BFF9]'>05 / Test</motion.h3>
<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>After creating the wireframes, it was time to conduct the usability testing.
<b> Four participants were chosen to test the core features of the app, including interacting with the virtual assistant.</b> The overall user experience was
positive, but the following points needed to be considered and optimized:</motion.p>
  
<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>• Participants faced dissatisfaction when they realized they can't edit or undo
their previously added input. That's why <b>I integrated an edit button, as well as an undo button.</b></motion.p>

<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}
className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>• Not receiving any kind of status feedback from the system while waiting confused some participants. 
<b> I made sure to incorporate loading animations to update the user while their request is being processed.</b></motion.p>

<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.7, delay: 1.1}}
className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2 sm:px-0 md:px-0'>• The close button has been removed from the top right corner since users didn't recognize it. 
<b> Instead, I went for the "Cancel" option under the main button. The applying process for events was also confusing at first.</b></motion.p>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.7, delay: 1.3}}>
<Image src={project.brom_cancel} alt="Cancel Option" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
onContextMenu={(e) => e.preventDefault()} /></motion.div>

</motion.div>

    </motion.div>

    </motion.div>
  )
};


export default Brom;