import React from 'react';
import Image from 'next/image';
import { project } from '../project/project';
import { assets } from '@/assets/assets';
import iframe from 'iframe';
import { motion } from 'motion/react';

const Bromberg = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className="text-lg sm:text-sm md:text-sm">

<br /> 
     <motion.h1
     initial={{opacity: 0, y: -20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5, delay: 0.3}}
     className="text-center text-5xl font-Ovo mt-20">Bromberg Website</motion.h1>

    <motion.h4
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='text-center mt-2 text-lg font-Ovo'>A merging of sustainability and technology</motion.h4>

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.9}}>
    <Image src={project.bromberg_hero} alt="Hero Image" width={900} height={800} objectFit="cover" className="rounded-xl mt-12 mx-auto"
    onContextMenu={(e) => e.preventDefault()} />
    
    </motion.div>

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.3}}
    className='inline-flex text-center grid grid-cols-3 sm:grid-cols-auto max-w-4xl mx-auto text-lg sm:text-lg justify-center gap-1 px-1 my-10'>

  <div>
    <ul className='m-0 p-0 font-bold text-[#3F47D3] dark:text-[#C3DE7B]'>ROLE:</ul>
    <ul className='m-0 p-0'>Product Design (UX/UI)</ul>
  </div>

  <div>
    <ul className='m-0 p-0 font-bold text-[#3F47D3] dark:text-[#C3DE7B]'>TIMELINE:</ul>
    <ul className='m-0 p-0'>10 weeks - 100+ hours</ul>
  </div>

  <div>
    <ul className='m-0 p-0 font-bold text-[#3F47D3] dark:text-[#C3DE7B]'>TOOLS USED:</ul>
    <ul className='m-0 p-0'>Figma / Balsamiq</ul>
  </div>
</motion.div>

<motion.hr
initial={{opacity: 0}}
 whileInView={{opacity: 1}}
 transition={{duration: 0.5, delay: 0.3}}
className="mx-auto flex justify-center mt-10 max-w-4xl border-gray-300 dark:border-gray-700" />

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 1}}
className="max-w-4xl mx-auto space-y-6">

<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='gap-2 text-2xl md:text-2xl mb-3 mt-8 font-Ovo font-semibold text-[#3F47D3] dark:text-[#C3DE7B]'>Project Overview </motion.h3>

<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'><b>Bromberg is a city where history, cultural traditions, and modern, eco-conscious governance intersect. </b>
In response to the unpredictable events of recent years – such as the economic crisis and the pandemic – the city has developed a new urban strategy aimed
at minimizing future risks. With a strong focus on its citizens, Bromberg has created a secure and enduring digital space that remains accessible
regardless of any ongoing challenges. <b>The website serves as a reliable source of news and information while fostering community engagement and participation. </b>
Visitors from afar and business partners are also welcomed, with dedicated sections ensuring they stay connected with Bromberg.</motion.p></motion.div>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 1}}
className="text-lg max-w-4xl mx-auto space-y-6">
<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='gap-2 text-2xl md:text-2xl mb-3 mt-8 font-Ovo font-semibold text-[#3F47D3] dark:text-[#C3DE7B]'>Project Goals </motion.h3>

<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'><b>Create a responsive website that serves all stakeholders, whether tourists or citizens. </b>
It should offer a wide range of features, from digitalized town services to hotel bookings. Design a clean interface with an accessible navigation bar and direct user flows. 
<b> The landing page should also reflect the newly developed strategy and keep the people of Bromberg at its center.</b></motion.p>
</motion.div>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}
className='grid grid-cols-3 sm:grid-cols-5 gap-4 mt-12 mx-auto max-w-screen sm:w-[900px] text-[#111111]'>
<ul className='bg-[#C3DE7B] rounded-[20px] items-center px-6 py-6'><p className="text-4xl font-Ovo">01</p> <p className="mt-6">Empathize</p></ul>
<ul className='bg-[#C3DE7B] rounded-[20px] items-center px-6 py-6'><p className="text-4xl font-Ovo">02</p> <p className="mt-6">Define</p></ul>
<ul className='bg-[#C3DE7B] rounded-[20px] items-center px-6 py-6'><p className="text-4xl font-Ovo">03</p> <p className="mt-6">Ideate</p></ul>
<ul className='bg-[#C3DE7B] rounded-[20px] items-center px-6 py-6'><p className="text-4xl font-Ovo">04</p> <p className="mt-6">Prototype</p></ul>
<ul className='bg-[#C3DE7B] rounded-[20px] items-center px-6 py-6'><p className="text-4xl font-Ovo">05</p> <p className="mt-6">Test</p></ul>
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
    className='flex items-end gap-2 text-2xl md:text-2xl sm:text-2xl mb-3 mt-8 font-Ovo font-semibold text-[#3F47D3] dark:text-[#C3DE7B]'>01 / Empathize </motion.h3>
    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'>To better understand and meet user needs, but at the same time to avoid their major pain points,
    I directly dived into conducting user interviews. The outcome of the interviews is supposed to give an insight on all the similarities and differences
    of the interviewed participants. The interviews should help in deciding which further direction the research will go.</motion.p>
    
    <motion.h4
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
    className='flex items-end gap-2 text-2xl md:text-2xl mb-6 mt-12 font-Ovo font-semibold'>User Interviews </motion.h4>
    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'><b>I recruited 6 participants of different demographics</b> as to show the wide spectrum of needs our
    potential users could have. <b>All participants shared a love for outdoor activities and showed a strong developed sensibility for sustainability and ecology.
    Furthermore, they all showed interest in digitalization and technology</b> as a tool for connecting people, minimizing their everyday stress and need for time
    management. One group of participants was approached as citizens, while the other group was considered as tourists.</motion.p>

   <br />

  <motion.div
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 0.6, delay: 0.9}}>
  <Image src={project.bromberg_melanie} alt="Persona Melanie" width={1280} height={800} objectFit="cover"
  className="rounded-lg mx-auto mt-8" onContextMenu={(e) => e.preventDefault()} /></motion.div>

  <br />

    <motion.p
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
    className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'>After finishing the interviews, I started summarizing the results, noticing patterns and finally, analyzing the data. With the information I’ve collected, I was then able to create two
      user personas for the two participant groups.</motion.p>
    
   <br />

    <motion.div
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 0.5, delay: 0.7}}>
    <Image src={project.bromberg_ulrike} alt="Persona Ulrike" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
     onClick={() => setIsOpen(true)} onContextMenu={(e) => e.preventDefault()} /></motion.div>

      <br />

    <motion.h3
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
    className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold text-[#3F47D3] dark:text-[#C3DE7B]'>02 / Define </motion.h3>
    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'>Before starting the design process, my task is to research some paremeters that could further
    help me in defining what kind of product I am supposed to deliver. Since a lot of ideas can emerge during the research process, it is important to
    analyze those and compare them to what’s already working.</motion.p>

    <motion.h3
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.9}}
    className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold'>Competitive Analysis</motion.h3>

    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 1.1}}
    className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'>It’s always important to stay on track with what direct and potential competitors offer.
    <b> In this case, the center of the focus was on usability, accessibility, design, content and booking.</b> By comparing different competitors with each
    other and finally to our research takeaways, I was one step closer to deliver a efficient product that is both, up-to-date and aesthetically pleasing.</motion.p>

    <motion.div
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 1.1}}>
    <Image src={project.bromberg_competitive} alt="Competitive Analysis" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
    onContextMenu={(e) => e.preventDefault()} /></motion.div>

<motion.h3
 initial={{opacity: 0, y: -20}}
 whileInView={{opacity: 1, y: 0}}
 transition={{duration: 0.5, delay: 0.3}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold'>Scope Matrix</motion.h3>

<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'>After understanding user needs and analyzing the competition, I went on to create a scope matrix.
<b> I've listed all the requirements the city of Bromberg, their citizens and other stakeholders (in this case tourists) would have.</b> That helped me figure out what 
  possible features I could implement on the website and rated each of them by priority and business value.</motion.p>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}>
<Image src={project.bromberg_scope} alt="Scope Matrix" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
onContextMenu={(e) => e.preventDefault()} /></motion.div>

<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold'>Site Map</motion.h3>

<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'>The main website navigation should layout all categories and their sub-categories directly on the
landing page since accessibility and usability are a top priority. Users would of course also have a optional possibility to search the website using the
search bar.</motion.p>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}>
<Image src={project.bromberg_sitemap} alt="Sitemap" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
onContextMenu={(e) => e.preventDefault()} /></motion.div>

  <br />

<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold text-[#3F47D3] dark:text-[#C3DE7B]'>03 / Ideate </motion.h3>
<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'>In the previous steps, I have organized potential features and settled on a main navigation, so I am now able to create a task flow that will show a
step-by-step guide to starting and finishing a task – in this case, booking a hotel. It’s useful to know where users could get stuck or how to bring
them back to their path if they get lost during the booking process.</motion.p>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}>
<Image src={project.bromberg_legend} alt="Legend" width={600} height={800} objectFit="cover" className="rounded-lg mx-auto"
onContextMenu={(e) => e.preventDefault()} /></motion.div>

<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold'>Task Flow: Booking a hotel</motion.h3>
<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}>
<Image src={project.bromberg_flow} alt="Task Flow" width={1440} height={900} objectFit="cover" className="rounded-lg mx-auto"
 onContextMenu={(e) => e.preventDefault()} /></motion.div>

 <motion.h3
 initial={{opacity: 0}}
 whileInView={{opacity: 1}}
 transition={{duration: 0.6, delay: 0.9}}
 className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold'>Storyboarding</motion.h3>
 <p className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'>The final step of the research process was creating low-fidelity wireframes which I approached
 using the crazy 8’s technique. I’ve kept in mind that the design should be responsive, so I’ve worked with cards that are easily scalable, so they could
 transform based on the device. After a few rounds of brainstorming, I was able to select my favorite sketches and prepare them for prototyping.</p>

<motion.div
 initial={{opacity: 0}}
 whileInView={{opacity: 1}}
 transition={{duration: 0.6, delay: 1.1}}>
<Image src={project.bromberg_sketches} alt="Sketches" width={860} height={400} objectFit="cover" className="mx-auto items-center mt-2 rounded-lg"
onContextMenu={(e) => e.preventDefault()} /></motion.div>

<br />

<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold text-[#3F47D3] dark:text-[#C3DE7B]'>04 / Prototype </motion.h3>
<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'> <b>My role during this stage was to curate all user interface elements: the imagery,
typography, and color palette.</b> Finding the right style proved to be a bit of challenge during this project. I didn't want the website to feel monochrome and 
have a complete serious appearance, but it proved to be difficult to shape a clean and cohesive design. I was studying various city websites and tried to 
take notes on all of the interesting elements they were offering.</motion.p>

  <motion.div
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 1}}
  className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
  <motion.div
  initial={{opacity: 0, y: -20}}
  whileInView={{opacity: 1, y: 0}}
  transition={{duration: 0.5, delay: 0.3}}>
  <ul className='text-6xl lg:text-[120px] font-Urbanist text-[#C3DE7B]'>AaBb</ul>
  <div className='border border-[#3F47D3] text-xl sm:text-lg px-4 py-4 rounded-lg w-[80%] sm:w-[78%] mt-2'>
  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
  <p>abcdefghijklmnopqrstuvwxyz</p>
  <p>0123456789</p>
  </div>
  <br />
  </motion.div>

  <motion.div
  initial={{opacity: 0, y: -20}}
  whileInView={{opacity: 1, y: 0}}
  transition={{duration: 0.5, delay: 0.3}}>
  <ul className='text-3xl sm:text-5xl lg:text-[40px] font-Urbanist'>Urbanist</ul>
  <div className='grid grid-cols-4 gap-2 items-center justify-center inline-flex mt-4'>
  <h4 className='rounded-lg border border-[#3F47D3] text-center text-sm px-1 py-1'>Regular</h4>
  <h4 className='rounded-lg border border-[#3F47D3] text-center text-sm px-1 py-1'> Medium</h4>
  <h4 className='rounded-lg border border-[#3F47D3] text-center text-sm px-1 py-1'> Semibold</h4>
  <h4 className='rounded-lg border border-[#3F47D3] text-center text-sm px-1 py-1'> Bold</h4>
  </div>

  <div
  className='grid grid-cols-4 gap-2 mt-6'>
  <ul className='bg-[#C3DE7B] rounded-lg px-8 py-10'></ul>
  <ul className='bg-[#B9BFF9] rounded-lg px-8 py-10'></ul>
  <ul className='bg-[#3F47D3] rounded-lg px-8 py-10'></ul>
  <ul className='bg-[#ABABAB] border border-[#ABABAB] rounded-lg px-8 py-10'></ul>
  </div>

  <div className='grid grid-cols-4 gap-2 mt-2 mb-6'>
  <p className='text-center text-sm'>#C3DE7B</p>
  <p className='text-center text-sm'>#B9BFF9</p>
  <p className='text-center text-sm'>#3F47D3</p>
  <p className='text-center text-sm'>#ABABAB</p>
  </div>

  </motion.div>

  </motion.div>

<motion.h3
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold'>Wireframes</motion.h3>
<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}
className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'><b>While creating the wireframes, I focused on the tourist group from my interviews. </b>
The website is supposed to give them them the ultimate user experience – offering a wide range of options and letting them finish the booking process without 
having to interact with third-party websites. <b>The process should be straight-forward with a simple interface that is easy to understand and navigate. </b> 
Besides the obvious check-in options, I could imagine that some users would like to take their time to explore the website and that's why I listed a few 
accomodation categories on the booking page below. The versatile filter options are supposed to help the user find the perfect match as easy as possible.</motion.p>

<motion.div
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}>
<iframe src="https://embed.figma.com/proto/JmksAbnqYdjy1qYRBdH1hk/Bromberg-2025?node-id=215-1220&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share"
 className="flex items-center justify-center mx-auto mt-10 rounded-[16px] w-full h-[500px] sm:h-[800px] md:h-[600px] lg:h-[500px]"
 frameBorder="0" width="100%" height="840px"
 allowFullScreen></iframe>
</motion.div>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className="flex justify-center mt-8">
<a href="https://www.figma.com/proto/JmksAbnqYdjy1qYRBdH1hk/Bromberg-2025?node-id=224-667&t=rnjagiIjBntdxlct-1&scaling=scale-down&content-scaling=fixed&page-id=5%3A2"
target="_blank" 
rel="noopener noreferrer"
className='inline-flex items-center justify-center gap-3 px-6  
py-2 rounded-full font-Ovo bg-[#3F47D3] text-white w-auto'>
Mobile prototype
<Image src={assets.right_arrow_white} alt="right arrow" className='w-5' />
</a>
</motion.div>

<br />
   
<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-20 font-Ovo font-semibold text-[#3F47D3] dark:text-[#C3DE7B]'>05 / Test </motion.h3>

<motion.p
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.5, delay: 0.7}}
className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'><b>I've conducted 1:1 interviews with three participants as part of my usability test. </b> 
There were a lot of points to focus on, so I devided the test into two parts: <b>First, I let the users explore
  the website freely.</b> I wanted to hear their honest opinion about the look and feel of the website without nudging them into any direction. The feedback 
  was quite positive, with participants saying that landing page was a nice combination of informative content and community building. The color palette 
  was praised as refreshing. The overall experience seemed welcoming to the users.</motion.p>

<motion.p
 initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.6, delay: 0.9}}
className='sm:text-lg lg:text-[15px] text-lg mt-6 leading-relaxed'><b>The second part of my usability test focused on a certain task: the booking of 
  a hotel.</b> 2 out of 3 participants were positively surprised that they could complete the whole process, from start to finish, on the website. There weren't 
  any major annoyances during the first two steps – everything seemed self-explanatory. One of the participants had feedback regarding the hotel page's 
  room section. The infomation provided about each room was short, so I decided to add an interactive module with a longer description.</motion.p>

  <motion.div
  initial={{opacity: 0, y: -20}}
  whileInView={{opacity: 1, y: 0}}
  transition={{duration: 0.5, delay: 0.3}}
  className='grid sm:grid-cols-2 grid-cols-1 gap-4 mt-6'>
  <Image src={project.bromberg_room1} alt="Room" width={860} height={400} objectFit="cover" className="mx-auto items-center mt-2 rounded-lg" onContextMenu={(e) => e.preventDefault()} />
  <Image src={project.bromberg_room2} alt="Room Opened" width={860} height={400} objectFit="cover" className="mx-auto items-center mt-2 rounded-lg" onContextMenu={(e) => e.preventDefault()} />
  </motion.div>

    </motion.div>

    </motion.div>
  )
};


export default Bromberg;
