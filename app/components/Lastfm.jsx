import React, { useState } from 'react';
import Image from 'next/image';
import { project } from '../project/project'
import { assets } from '../../assets/assets';
import iframe from 'iframe';
import { motion } from 'motion/react';

const Lastfm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className="text-lg">

    <motion.h1
     initial={{opacity: 0, y: -20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5, delay: 0.3}}
    className="text-center text-5xl font-Ovo sm:mt-20">Last.fm Pro</motion.h1>

    <motion.h4
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 0.5, delay: 0.7}}
    className='text-center mt-2 text-lg font-Ovo'>Music counts</motion.h4>
    
    <motion.div
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.9}}>
    <Image src={project.lastfm_hero} alt="Hero Lastfm" width={900} height={800} objectFit="cover" className="rounded-xl mt-10 mx-auto max-w-screen h-auto"
    onContextMenu={(e) => e.preventDefault()} /></motion.div>
    
    <motion.div
     initial={{opacity: 0, y: -20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5, delay: 0.3}}
    className='inline-flex text-center grid grid-cols-1 sm:grid-cols-3 sm:grid-cols-auto max-w-4xl mx-auto sm:text-lg text-[15px] justify-center gap-1 px-1 my-10'>
    <div>
    <ul className='m-0 p-0 font-bold text-[#FE2E00]'>ROLE:</ul>
     <ul className='m-0 p-0'>Product Design (UX/UI)</ul>
      </div>
    
      <div>
        <ul className='m-0 p-0 font-bold text-[#FE2E00]'>TIMELINE:</ul>
        <ul className='m-0 p-0'>8 weeks - 80+ hours</ul>
      </div>
    
      <div>
        <ul className='m-0 p-0 font-bold text-[#FE2E00]'>TOOLS USED:</ul>
        <ul className='m-0 p-0'>SurveyMars / Figma</ul>
      </div>
    </motion.div>

    <br />

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className="bg-[#f4f4f4] rounded-xl justify-center items-center w-screen-10 md:w-screen sm:max-w-[900px] mx-auto">
    <div className="text-lg text-gray-700 max-w-3xl mx-auto space-y-6">
      <br />
          <h3 className='gap-2 text-2xl md:text-2xl mb-2 font-Ovo px-8 sm:px-0 md:px-0 font-semibold text-[#FE2E00]'>Project Overview </h3>
    
        <p className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-8 sm:px-0 md:px-0'>Last.fm is a music platform that creates an 
          online library based on the users’ listening habits. The data is transferred or “scrobbled” via a music player of choice (Spotify, Deezer,
          Tidal, Apple Music etc.) and stored on the user’s profile. Users are then given insight on their listening behavior through various stats. 
          The service has been around for over two decades and has therefore built a strong and loyal following.</p></div>
    
    <div className="text-lg text-gray-700 max-w-3xl mx-auto space-y-6">
    <h3 className='gap-2 text-2xl md:text-2xl mb-3 mt-8 font-Ovo font-semibold text-[#FE2E00] px-8 sm:px-0 md:px-0'>Project Goals </h3>
    
        <p className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-8 sm:px-0 md:px-0'>
        Build a mobile app for premium users with a minimalistic, but modern user interface that still mirrors the brand’s look & feel. Combine existing
        and new tools to create an attractive mix users would want to pay for. Gather as much feedback as possible on the pros and cons of using Last.fm
        and use the collected information to better understand users’ frustrations and needs. 
        </p>
    </div>

<br />
<br />
    </motion.div>

    <motion.div
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.9}}
    className='grid grid-cols-2 sm:grid-cols-5 gap-3 sm:max-w-4xl max-w-[330px] mx-auto mt-10'>
    <ul className='bg-[#FE2E00] rounded-full px-6 py-4 mt-2 mb-2 text-[12px] sm:text-sm text-[#F4F4F4] gap-2 inline-flex items-center justify-center'><Image src={project.lastfm_empathy} alt="empathize" className='w-5' />01 / Empathize</ul>
    <ul className='bg-[#FE2E00] rounded-full px-6 py-4 mt-2 mb-2 text-[12px] sm:text-sm text-[#F4F4F4] gap-2 inline-flex items-center justify-center'><Image src={project.lastfm_define} alt="define" className='w-5' />02 / Define</ul>
    <ul className='bg-[#FE2E00] rounded-full px-6 py-4 mt-2 mb-2 text-[12px] sm:text-sm text-[#F4F4F4] gap-2 inline-flex items-center justify-center'><Image src={project.lastfm_ideate} alt="ideate" className='w-5' />03 / Ideate</ul>
    <ul className='bg-[#FE2E00] rounded-full px-6 py-4 mt-2 mb-2 text-[12px] sm:text-sm text-[#F4F4F4] gap-2 inline-flex items-center justify-center'><Image src={project.lastfm_proto} alt="prototype" className='w-5' />04 / Prototype</ul>
    <ul className='bg-[#FE2E00] rounded-full px-6 py-4 mt-2 mb-2 text-[12px] sm:text-sm text-[#F4F4F4] gap-2 inline-flex items-center justify-center'><Image src={project.lastfm_test} alt="test" className='w-5' />05 / Test</ul>
    </motion.div>

          <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1}}
          className="max-w-4xl mx-auto space-y-6">
          <motion.h3
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.3}}
          className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold text-[#FE2E00] px-2'>01 / Empathize </motion.h3>
          <motion.p
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.3}}
          className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2'>
            For this phase, I employed both indirect and direct research methods.
            Given that I am redesigning an application with a large, global user base, I incorporated app reviews and online discussion threads to gain
            deeper insights into existing issues and to better understand user needs and expectations.</motion.p>

            <motion.h3
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold px-2'>Direct research</motion.h3>

            <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
            className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2'>The user demographic for Last.fm is diverse, which prompted me to design
              a survey that also allowed for follow-up questions when necessary. <b>A total of 15 users participated in the direct research, representing
              countries such as Canada (3), the USA (3), Mexico, Thailand, Australia, and Belgium.</b> The majority of respondents indicated that they primarily
              use the platform to discover and listen to music. Notably, almost all participants mentioned a preference for rock music and its subgenres.
              <b> A shared appreciation for collecting scrobbles and viewing listening statistics emerged as a common theme.</b></motion.p>
              
              <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.5, delay: 0.7}}
              className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-2'>While social features – such as the ability to communicate with others
                through the site – were considered enjoyable, they were not viewed as essential. <b>Among the participants, 45% used iPhones, another 45% used
                Samsung devices, and the remaining 10% used alternatives like Google Pixel or Oppo.</b> Most users scrobbled their music through Spotify and
                expressed appreciation for the platform’s personalized reports. Interestingly, only half of the participants reported knowing someone else
                (either online or in real life) who also uses Last.fm. However, all respondents indicated that they would be willing to pay for a premium
                membership if it included a broader range of features.</motion.p>

                <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.9}}
                className='grid grid-cols-2 sm:grid-cols-4 sm:gap-6 md:gap-4 gap-4 items-center px-2'>
                  <div className='bg-[#FE2E00] rounded-full px-4 py-3 sm:px-8 sm:py-8 mb-2 mt-4 sm:mb-4 sm:mt-4 sm:mb-8 sm:mt-8'>
                <ul className='text-center text-white text-4xl sm:text-lg lg:text-[48px] md:text-2xl mb-2 mt-8 font-Ovo'>80%</ul>
                <ul className='text-center text-sm text-white mb-6'>active in the <br />creative field</ul>
                  </div>

                  <div className='bg-[#FE2E00] rounded-full px-4 py-3 sm:px-8 sm:py-8 mb-2 mt-4 sm:mb-4 sm:mt-4 sm:mb-8 sm:mt-8 px-2'>
                <ul className='text-center text-white text-4xl sm:text-lg lg:text-[48px] md:text-2xl mb-2 mt-8 font-Ovo'>20-60</ul>
                <ul className='text-center text-sm text-white mb-6'>participants' <br />age range</ul>
                  </div>

                  <div className='bg-[#FE2E00] rounded-full px-4 py-3 sm:px-8 sm:py-8 mb-4 mt-2 sm:mb-4 sm:mt-4 sm:mb-8 sm:mt-8 px-2'>
                <ul className='text-center text-white text-4xl sm:text-lg lg:text-[48px] md:text-2xl mb-2 mt-8 font-Ovo'>90%</ul>
                <ul className='text-center text-sm text-white mb-6'>participants <br />use Spotify</ul>
                  </div>

                  <div className='bg-[#FE2E00] rounded-full px-4 py-3 sm:px-8 sm:py-8 mb-4 mt-2 sm:mb-4 sm:mt-4 px-2'>
                <ul className='text-center text-white text-4xl sm:text-lg lg:text-[48px] md:text-2xl mb-2 mt-8 font-Ovo'>2-21</ul>
                <ul className='text-center text-sm text-white mb-6'>years of<br />using Last.fm</ul>
                  </div>
                </motion.div>

              <motion.h3
              initial={{opacity: 0, y: -20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.3}}
              className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold px-1'>Indirect research</motion.h3> 

              <motion.p
              initial={{opacity: 0, y: -20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.3}}
              className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'><b>While the direct research provided valuable insights into the target
                audience, exploring online discussions allowed me to better understand which aspects of the platform require improvement – such as missing
                features or performance issues.</b> In parallel, I encountered numerous positive accounts of users' experiences, which highlighted the strong
                emotional connection many have with the service. For many long-time users, scrobbling and tracking their listening habits have become a
                meaningful part of their music journey.</motion.p>
                
              <motion.p
               initial={{opacity: 0, y: -20}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 0.5, delay: 0.7}}
               className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'>This deep attachment reflects a broader desire among the community to see the platform thrive.
                <b> It is also worth noting that Last.fm is sustained solely through user-funded subscriptions, underscoring the importance of maintaining user
                satisfaction and loyalty.</b> Motivated by this, I delved into the platform's history and earlier design concepts to explore how key elements
                from the original site could be thoughtfully reintroduced or reinterpreted in the redesign. My goal is to preserve the unique character
                and legacy of Last.fm while enhancing its functionality and appeal for both existing and new users.</motion.p>

        <br />

              <motion.h3
              initial={{opacity: 0, y: -20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.3}}
              className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold text-[#FE2E00] px-1'>02 / Define </motion.h3>
              <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.5, delay: 0.7}}
              className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'>The first persona is a synthesis of the insights gathered through both
                direct and indirect research. <b>In addition to a strong passion for music, this user continues to engage with Last.fm due to a long-standing
                connection formed through years of scrobbling.</b> On occasion, they subscribe to the premium membership to access enhanced features, such as the
                ability to edit scrobbles. However, they expressed that they would be more likely to maintain a year-round subscription if the app offered
                improved performance and a broader range of features.</motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}>
        <Image src={project.lastfm_brad} alt="Brad" width={1280} height={800} objectFit="cover" onClick={() => setIsModalOpen(true)}
        onContextMenu={(e) => e.preventDefault()}
        className="rounded-lg mx-auto cursor-pointer sm:block md:block lg:hidden xl:hidden"
      />
        </motion.div>

        <motion.p
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'>Although the youngest participant in the study was 20 years old, I chose to also
            explore how the service might resonate with a younger demographic—specifically teenagers. <b>As digital natives, teenagers often have higher expectations
            for digital products and are quick to assess usability, design, and engagement.</b> For this audience, fun and ease of use are essential. They are more
            inclined to interact with platforms that are visually engaging, intuitive, and capable of delivering quick, enjoyable experiences.</motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}>
        <Image src={project.lastfm_christa} alt="Christa" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto" onContextMenu={(e) => e.preventDefault()} />
        </motion.div>

        <br />

        <motion.h3
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold px-1'>Competitive Analysis</motion.h3>
    
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'><b>Last.fm operates in a competitive landscape alongside various music streaming,
        discovery, and tracking platforms.</b> However, it stands out due to its distinctive focus on music tracking (scrobbling), detailed historical listening
        data, and social music discovery features. <b>The platform’s strengths lie in its real-time tracking capabilities, long-term analytics, and support
        across multiple platforms.</b> Despite these advantages, Last.fm still faces several challenges. Key shortcomings include underdeveloped music discovery
        features, occasional issues with scrobble accuracy and missing tracks, limited social interaction tools, and an outdated user interface and user
        experience design.</motion.p>
    
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.9}}>
      <Image src={project.lastfm_analysis} alt="Analysis" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
      onContextMenu={(e) => e.preventDefault()} />
      </motion.div>
    
     <br />
    <motion.h3
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
    className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold px-1'>Feature Roadmap</motion.h3>
    
    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'><b>I compiled a list of proposed features and organized them in a prioritized
    spreadsheet.</b> These decisions were grounded in insights derived from user interviews, secondary research, and competitive analysis. <b>Each feature was
    carefully selected based on its relevance to user needs and its potential to enhance the overall experience.</b></motion.p>

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.9}}>
    <Image src={project.lastfm_feature} alt="Feature Roadmap" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
    onContextMenu={(e) => e.preventDefault()} /></motion.div>
    
      <br />
    <motion.h3
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
    className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold text-[#FE2E00] px-1'>03 / Ideate </motion.h3>
    
      <motion.h3
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold px-1'>Storyboarding</motion.h3>

    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'>I began ideating by sketching early concepts on my iPad. These initial
    sketches were intentionally abstract to encourage free-form exploration. Over time, they evolved into more structured representations. <b>A significant
    challenge was adapting the platform’s full feature set – both existing and new – for mobile devices, all while maintaining usability within the
    constraints of a smaller screen.</b></motion.p>
  <motion.div
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 0.6, delay: 0.9}}>
   <Image src={project.lastfm_lofi} alt="Lofi" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
   onContextMenu={(e) => e.preventDefault()} /></motion.div>

      <br />

        <motion.h3
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold px-1'>User Flow</motion.h3>
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'><b>A key principle in the user flow design was minimizing cognitive load by
          reducing decision points and streamlining interactions.</b> The user flow was built with the assumption that users are already familiar with the
          platform. It maps out all key actions within the app, ensuring a logical, intuitive, and user-friendly navigation experience.</motion.p>
    
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}>
        <Image src={project.lastfm_flow} alt="Flow" width={1440} height={900} objectFit="cover" className="rounded-lg mx-auto"
        onContextMenu={(e) => e.preventDefault()} /></motion.div>

      <br />

    <motion.h3
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
    className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold text-[#FE2E00] px-1'>04 / Prototype </motion.h3>
    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'>Through user research, I discovered a clear preference for dark mode interfaces,
      prompting me to design the prototype in dark mode from the outset. <b>My objective was to preserve the core identity of the existing Last.fm app and website,
      while introducing a modern, refreshed aesthetic.</b> Simplicity and clarity were central to the UI design, aiming to avoid overwhelming users with unnecessary
      complexity.</motion.p>

      
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.8}}
    className='grid sm:grid-cols-2 gap-20 justify-between'>
      <ul className='text-7xl sm:text-5xl lg:text-[120px] font-Poppins text-[#FE2E00]'>Poppins</ul>

      <div className="flex sm:flex-col items-end sm:text-right mx-auto gap-4">
      <ul className='bg-gray-200 rounded-lg px-2 py-2 sm:px-3 sm:py-3 text-sm text-center text-gray-700 font-bold mt-4'>FONT FAMILY</ul>
      <ul className='text-sm sm:text-lg sm:text-gray-400 mt-4 sm:mt-10'>Regular • Medium • Semibold • Bold</ul>
      </div>
  
    </motion.div>
      
      <br />

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.7, delay: 0.9}}
    className='grid grid-cols-2 gap-4 mt-2 items-center justify-center'>
    <Image src={project.lastfm_icon} alt="Icon" width={1280} height={800} objectFit="cover" className="rounded-xl mx-auto" onContextMenu={(e) => e.preventDefault()} />

    <Image src={project.lastfm_logo} alt="Logo" width={1280} height={800} objectFit="cover" className="rounded-xl mx-auto" onContextMenu={(e) => e.preventDefault()} />
    </motion.div>

    <br />

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.7, delay: 1.0}}
    className='grid grid-cols-3 sm:grid-cols-6 gap-3 mt-6 rounded-full items-center'>
    <ul className='bg-[#FE2E00] text-sm sm:text-lg rounded-full px-6 py-6 text-white text-center'>#FE2E00</ul>
    <ul className='bg-[#FF782A] text-sm sm:text-lg rounded-full px-6 py-6 text-center'>#FF782A</ul>
    <ul className='bg-[#FFCA7C] text-sm sm:text-lg rounded-full px-6 py-6 text-gray-700 text-center'>#FFCA7C</ul>
    <ul className='bg-[#DBC29D] text-sm sm:text-lg rounded-full px-6 py-6 text-gray-700 text-center'>#DBC29D</ul>
    <ul className='bg-[#232323] text-sm sm:text-lg rounded-full px-6 py-6 text-[#ffffff] text-center'>#232323</ul>
    <ul className='bg-[#F4F4F4] border border-[#ABABAB] text-sm sm:text-lg text-gray-700 rounded-full px-6 py-6 text-center'>#F4F4F4</ul>
    </motion.div>
    <br />

    <motion.h3
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='flex items-end gap-2 text-2xl md:text-2xl mb-3 font-Ovo font-semibold px-1'>Wireframes</motion.h3>
    <motion.p
   initial={{opacity: 0}}
   whileInView={{opacity: 1}}
   transition={{duration: 0.6, delay: 0.9}}
   className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'><b>Guided by the feature roadmap and user flow, I developed wireframes that highlight
      the three core areas of the app: the home screen, user profiles (personal, other users’ and artists’) and various listening reports.</b> While there were
      many additional features I was eager to explore, I made a deliberate effort to refine the focus and prioritize only the most impactful elements to ensure
      a cohesive and streamlined user experience.</motion.p>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 1.1}}>
      <Image src={project.lastfm_wire} alt="Lastfm Wireframes 1" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
      onContextMenu={(e) => e.preventDefault()} />
      </motion.div>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 1.3}}>
      <Image src={project.lastfm_frames} alt="Lastfm Wireframes 2" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
      onContextMenu={(e) => e.preventDefault()} />
      </motion.div> 

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.9}}
      className="flex justify-center mt-8">
      <a href="https://www.figma.com/proto/1hidKvvwHWHKS44Wy1rz6m/Last.fm-Pro--click-here-to-open-Figma-file-?page-id=0%3A1&node-id=109-44&viewport=5145%2C-669%2C1&t=QpU4TKJmZLCszAvK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=109%3A44"
      target="_blank" 
      rel="noopener noreferrer"
      className='inline-flex items-center justify-center gap-3 px-6  
      py-2 rounded-full font-Ovo bg-[#FE2E00] text-white w-auto'>
      Final prototype
      <Image src={assets.right_arrow_white} alt="right arrow" className='w-5' />
      </a>
      </motion.div>

    {/*
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.7, delay: 1.1}}>
    <iframe src="https://embed.figma.com/proto/1hidKvvwHWHKS44Wy1rz6m/Last.fm-Pro?node-id=109-44&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=109%3A44&embed-host=share"
    className="flex items-center justify-center mx-auto mt-10 rounded-xl w-60% h-60% md:w-60% md:h-60% sm:w-100% sm:h-[700px]"
    frameBorder="0" width="100%" height="700px"
    allowFullScreen></iframe>
    </motion.div>*/}

<br />

<motion.h3
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='flex items-end gap-2 text-2xl md:text-2xl mb-3 mt-12 font-Ovo font-semibold text-[#FE2E00]'>05 / Test</motion.h3>
   <motion.p
   initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'><b>The first version of the app didn't have the central button that takes you 
    to the track that's currently playing. It used to be a feature on earlier desktop versions of the Last.fm Scrobbler</b> and I came to the conclusion it would be 
    beneficial to integrate it again. Much like on desktop devices, users would be able to scrobble their tracks inside the Last.fm app by enabling the Spotify 
    Playback feature.</motion.p>

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.9}}>
    <Image src={project.lastfm_iteration} alt="Iterations" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
    onContextMenu={(e) => e.preventDefault()} /></motion.div>

    <motion.p
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
    className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'><b>In the first app version I have also worked on another three sections: 
      playlists, obsessions and Labs.</b> After a few revisions, I have labeled them as second priority tasks and put the further development of the 
      sections to a halt. <b>The Labs section would be a great follow-up project as it was interesting to explore the different options for user statistics 
      and reports.</b> As seen in the wireframe below, a lot of features were already part of the Labs repertoire but I've added a few more. As already mentioned, 
      one of the key themes of my research was to explore how I could make the app more fun and enjoyable.</motion.p>

    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'>The playlist section was a little bit confusing for the user, so I took it out 
      to try new ways to integrate the feature. <b>The main issue were the import and create buttons that weren't prominent enough and in most cases, users didn't 
      intuitively know what to do next.</b> The playlist template page also presented too many options with a text-heavy interface design causing the user to feel
      overwhelmed.</motion.p>

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.9}}>
    <Image src={project.lastfm_old} alt="Old Screens" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
    onContextMenu={(e) => e.preventDefault()} /></motion.div>
      
    <motion.p
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
    className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'>During my research I then stumbled upon a lot of 
      interesting features for Spotify users, like a color generator or word cloud, all based on your listening habits. I wanted to give the Last.fm user the 
      same playful experience. <b>My personal favorite was designing the personality type generator.</b> Brainstorming ideas for the different personalities
      and sketching out the accompanying illustrations was one of the most inventive projects I've done in a while.</motion.p>

    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
    className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'>I have created the following 12 personality types: <b>The Snooper</b> - finding secret gems is their speciality, <b>The Evergreen</b> - listens to classics, 
    <b>The Zealot</b> - the hardcore fan, <b>The Master</b> - dives deep into discographies, <b>The Aesthete</b> - has a very unique taste, <b>The Looper</b> - replaying same songs, 
    <b> The Aficionado</b> - the ultimate music fanatic, <b>The Voguer</b> - keeps up with trends, <b>The Chameleon</b> - changes music genres often, <b>The Turntablist</b> - has a lot of  
    favorite songs, <b>The Tourist</b> - listens to a variety of music and <b>The Leapfrog</b> - listens to music from older decades.</motion.p>

    <motion.p
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.9}}
    className='text-[15px] sm:text-[16px] lg:text-[15px] mt-6 leading-relaxed px-1'>I also explored different types of skins since it was a frequent requested feature but
    for the first launch, I settled for the dark mode only.</motion.p>

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.7, delay: 1.1}}>
    <Image src={project.lastfm_personality} alt="Personality Type" width={1280} height={800} objectFit="cover" className="rounded-lg mx-auto"
    onContextMenu={(e) => e.preventDefault()} /></motion.div>

     </motion.div>
        </motion.div>
      )
    };

export default Lastfm;
