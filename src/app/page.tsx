"use client";

import { AnimatedTooltip } from "@/components/aceternity/animatedTooltip";
import { ProjectsCard } from "@/components/cards/projectsCard";
import CircularText from "@/components/circularText/circularText";
import { LeaderIcon } from "@/components/icons/leader";
import { Navbar } from "@/components/navbar/navbar";
import { projects } from "@/data/projects";
import { WorkExperiences } from "@/data/workExperiences";
import { useScreenSize } from "@/hooks/screenSizeValidation";
import { geistMono } from "@/lib/fonts/getFonts";
import { ArrowRight, Mail, MailOpen, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";
import { ProjectsSwiper } from "@/components/swiper/projectsSwiper";
import Link from "next/link";
import { Footer } from "@/components/footer/footer";
import { contacts } from "@/data/contacts";

const Home = () => {
  const { isDesktop, isTablet, isMobile } = useScreenSize();
  const [educationCard, setEducationCard] = useState(0);
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [isPlayMarquee, setIsPlayMarquee] = useState(true);
  
  return (
    <div className="w-full h-full">
      <Navbar/>
      <div id="EssenceSection" className={`w-full h-screen flex flex-col relative font-metropolis scroll-smooth`}>
        <div className="w-full h-[20%] flex bg-secondary  px-8 relative items-center z-20">
          <div className="text-primary flex flex-col gap-3">
            <p className={`text-base xs:text-xl md:text-4xl font-bold uppercase font-moderniz`}>Hola, I'm Glenn 👋🏼</p> 
            <div className={`flex`}>
              <div className={`bg-third text-xs xs:text-sm md:text-base 2xl:text-base flex gap-2.5 rounded-full px-4 py-2 border-2 border-secondary shadow-lg shadow-primary/80 text-white font-medium ${geistMono.className}`}>
                <p className="ml-0.5">🧑🏻‍💻</p>
                <div>
                  <Typewriter
                    words={['Web Developer in the Arena', 'Machine Learning Enthusiast']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                </div>
              </div>
            </div>           
          </div>
        </div>
        <div className={`relative flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center w-full h-[80%] lg:h-[54%] py-10`}>
          <div className="bg-thirdAlternative border-2 border-secondary absolute -left-[4rem] bottom-[31%] xs:bottom-[30%] sm:bottom-[29.8%] sm:-left-[3.4rem] rotate-45 lg:-left-[4rem] lg:bottom-auto lg:top-[2.4rem] lg:-rotate-[45.2deg] z-[70] lg:z-10 w-56 sm:w-60 text-center py-2">
            <p className={`text-secondary font-bold uppercase text-xs`}>Open to Work</p>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-1/2 px-6 sm:px-16 lg:pr-0 lg:pl-12">
            <p className="font-extrabold text-5xl md:text-6xl text-secondary text-center lg:text-start -z-10">WHO AM I?</p>
            <p className="font-light text-center text-xs xs:text-sm md:text-base lg:text-sm lg:text-start">Third-year Informatics student at Syiah Kuala University, specializing in web development with a growing passion for machine learning innovations. Through startup internships and team-driven projects, I've enhanced my technical acumen and developed a forward-thinking approach to collaboration. Try to bridging the gap between robust web solutions and AI-driven technologies.</p>
            {isDesktop && ( 
              <div className="flex flex-col gap-4 mt-6 -mb-10">
                <p className="font-extrabold text-2xl uppercase">Main Tech</p>
                <div className="flex gap-4"> 
                  <div className="flex gap-4 bg-thirdAlternative px-4 py-2 rounded-3xl shadow-balance shadow-thirdAlternative text-secondary">
                      <p className="font-bold text-xs text-center">Next JS</p>
                      <p className="font-bold text-xs text-center">Express JS</p>
                  </div>
                  <div className="flex gap-4 px-4 py-2 rounded-3xl shadow-balance shadow-secondary/60 text-white">
                      <p className="font-bold text-xs text-center">Mongo DB</p>
                      <p className="font-bold text-xs text-center">MySQL</p>
                      <p className="font-bold text-xs text-center">PostgreSQL</p>
                      <p className="font-bold text-xs text-center">Docker</p>
                  </div>
                  <div className="flex gap-4 bg-secondary px-4 py-2 rounded-3xl shadow-balance shadow-secondary/60 text-primary">
                      <p className="font-bold text-xs text-center">Tensorflow</p>
                      <p className="font-bold text-xs text-center">Pytorch</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="absolute bottom-0 w-[80%] h-[60%] xs:w-[87%] xs:h-[67%] lg:w-[40%] lg:h-[74vh] left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:translate-x-0 z-[60]">
            <Image
              src="https://utfs.io/f/WjLJ1ngIOkg6cFztZLle5u7Xa4TRS2tOFfGqZ8WKk03ysLJA"
              alt="Glenn Hakim"
              fill
              className="object-contain"
            />
          </div>
          {(isMobile || isTablet) && (
            <Marquee className="lg:absolute lg:bottom-0 left-0 flex gap-8 items-center py-4 w-full -z-20" direction="left" speed={80}>
             <div className={`flex gap-8 font-moderniz text-primary items-center`}>               
              <p className="font-extrabold text-lg xs:text-2xl uppercase text-white">Main Tech</p>
              <div className="flex gap-4"> 
                <div className="flex gap-4 bg-thirdAlternative px-4 py-2 rounded-3xl shadow-balance shadow-thirdAlternative text-secondary">
                    <p className="font-bold text-[0.68rem] xs:text-xs text-center">Next JS</p>
                    <p className="font-bold text-[0.68rem] xs:text-xs text-center">Express JS</p>
                </div>
                <div className="flex gap-4 px-4 py-2 rounded-3xl shadow-balance shadow-secondary/60 text-white">
                    <p className="font-bold text-[0.68rem] xs:text-xs text-center">Mongo DB</p>
                    <p className="font-bold text-[0.68rem] xs:text-xs text-center">MySQL</p>
                    <p className="font-bold text-[0.68rem] xs:text-xs text-center">PostgreSQL</p>
                    <p className="font-bold text-[0.68rem] xs:text-xs text-center">Docker</p>
                </div>
                <div className="flex gap-4 bg-secondary px-4 py-2 rounded-3xl shadow-balance shadow-secondary/60 text-primary">
                    <p className="font-bold text-[0.68rem] xs:text-xs text-center">Tensorflow</p>
                    <p className="font-bold text-[0.68rem] xs:text-xs text-center">Pytorch</p>
                </div>
              </div>
             </div>
            </Marquee>
          )}
          {(isDesktop) && (        
            <div className="flex flex-col gap-2 font-moderniz w-1/2 text-6xl items-center justify-center">
              <p>GLENN HAKIM</p>
              <p>GLENN HAKIM</p>
              <p>GLENN HAKIM</p>
              <p>GLENN HAKIM</p>
              <p>GLENN HAKIM</p>
            </div>
          )}
        </div>
        <div className={`w-full absolute bottom-0 border-t-[1px] border-white/20 h-[20%] lg:h-[26%] bg-primary z-[80]`}>
          <button onClick={() => setIsPlayMarquee((prev) => !prev)} className="absolute -top-[2.04rem] bg-secondary shadow-balance shadow-secondary rounded-tr-xl p-2 ">
            {isPlayMarquee ? (
              <Pause className="text-primary w-4 h-4"/>
            ) : (
              <Play className="text-primary w-4 h-4"/>
            )}
          </button>
          <Marquee play={isPlayMarquee} className="w-full h-full overflow-y-hidden" speed={60} direction="left">
           <div id="EducationAndHimpunan" className="flex gap-4 text-8xl font-bold relative mx-8 lg:mx-11">
             <div onMouseOver={() => isDesktop && setEducationCard(1)} onClick={() => (isTablet || isMobile) && setEducationCard(1)} className={`${educationCard !== 1 ? '-z-10' : 'z-10'} active:scale-110 lg:hover:scale-110 duration-200 cursor-pointer px-7 h-[6.2rem] xs:h-32 absolute top-0 -left-20 border flex items-center bg-primary border-white/30 shadow-md shadow-black rounded-full gap-4`}>
               <Image
                 src="https://utfs.io/f/WjLJ1ngIOkg6Ar4qtwAKIKFQvR98o1bMXDBnGsuVfzx4Lal2"
                 alt="logo-hmif-usk"
                 width={500}
                 height={500}
                 className="w-10 xs:w-14 lg:w-[3.9rem] object-contain"
               />
               <div className={`flex flex-col gap-1 text-sm `}>
                 <p className="font-bold text-xs lg:text-sm">Himpunan Mahasiswa Informatika USK</p>
                 <div className="h-[1px] w-full bg-white/20 my-0.5"></div>
                 <div className="flex gap-2.5 items-center">
                   <LeaderIcon className="w-5 h-5 xs:w-6 xs:h-6"/>
                   <p className="text-sm lg:text-xl font-bold ">Chairman 2024/2025</p>
                 </div>
               </div>    
             </div>          
             <div onMouseOver={() => isDesktop && setEducationCard(0)} onClick={() => (isTablet || isMobile) && setEducationCard(0)} className={`active:scale-110 lg:hover:scale-110 duration-200 cursor-pointer px-7 h-[6.2rem] xs:h-32 border bg-primary border-white/30 shadow-md shadow-black rounded-full flex gap-4 items-center`}>
               <div className="flex gap-1.5">
                <Image
                 src="https://utfs.io/f/WjLJ1ngIOkg6ftAbS2oELJFSPCZ4eO06HwqphaMBGjQY9Avr"
                 alt="logo-usk"
                 width={500}
                 height={500}
                 className="w-10 xs:w-14 lg:w-[3.9rem] object-contain"
                />
                <Image
                 src="https://utfs.io/f/WjLJ1ngIOkg68kgqnifvR0a6zZ2mU4dVktXbeojGDNIE5xBY"
                 alt="logo-usk-typo"
                 width={500}
                 height={500}
                 className="w-10 xs:w-14 object-contain invert"
                />
               </div>
               <div className={`flex flex-col gap-1 text-sm `}>
                 <p className={`font-bold text-[0.68rem] xs:text-xs lg:text-sm`}>Syiah Kuala University</p>
                 <div className="h-[1px] w-full bg-white/20 my-0.5 xs:my-1 lg:my-0.5"></div>
                 <p className="text-[0.66rem] lg:text-xs font-bold">Informatics <span className="font-light text-[0.66rem] lg:text-xs">Bachelor Degree</span></p>
                 <p className="text-[0.66rem] lg:text-xs font-light">Last GPA: <span className="font-bold">3.44 / 4</span></p>
               </div>    
             </div>            
           </div>
           <div id="Projects" className="flex gap-6 mx-8 lg:mx-11">
             <div className="w-60 xs:w-72 lg:w-80 rounded-3xl border border-white/20 relative flex items-center shadow-md shadow-black bg-white/5">
               <Marquee speed={100} className="flex gap-4" direction="right">
                 <div className="flex gap-4">
                  {projects.map((project) => (
                    <div key={project.id} className="w-28 xs:w-40 rounded-xl h-20 xs:h-[5.8rem] -z-30 py-2">
                      <Image
                        src={project.image1}
                        alt="Project"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-xl border-[1px] border-white/30 shadow-md shadow-black"
                      />
                    </div>
                  ))}
                 </div>
               </Marquee>
             </div>
             <div className="flex flex-col gap-1 justify-between">
               <p className="font-semibold text-base xs:text-2xl text-secondary">Projects</p>
               <p className="font-light text-[0.65rem] xs:text-xs w-40">Explore these projects to see how I can assist you further.</p>
               <Link href={"#ProjectsSection"} className="flex gap-3 items-center cursor-pointer">
                 <button className="bg-secondary rounded-full p-1 shadow-md shadow-black border-2 border-white/40">
                   <ArrowRight className="text-primary w-4 h-4" />
                 </button>
                 <p className="font-semibold text-xs text-secondary">Learn More</p>
               </Link>
             </div>
           </div>          
           <div id="WorkExperiences" className={`flex flex-col gap-2 xs:gap-3 mx-8 lg:mx-11`}>
             <p className="font-bold text-lg xs:text-2xl text-third">Work Experiences</p>
             <div className="flex gap-4">
               <AnimatedTooltip items={WorkExperiences}/>
             </div>
           </div>
           <div id="GetInTouch" className="flex gap-4 ml-8 lg:ml-11 mr-20 lg:mr-24 relative">
             {isDesktop && (
               <CircularText 
                 text="Let’s build something amazing! • " 
                 spacing={1.16}
                 size={1.16}
               />
             )}
             {(isTablet || isMobile) && (
               <CircularText 
                 text="Let’s build something amazing! • " 
                 spacing={1.06}
                 size={1.06}
               />
             )}
             <Link href={"#ContactSection"} onMouseOver={() => setIsMailOpen(true)} onMouseLeave={() => setIsMailOpen(false)} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border border-secondary p-5 xs:p-6 lg:p-7 rounded-full shadow-md shadow-black lg:hover:bg-secondary duration-300">
               {(isMailOpen && isDesktop) ? (
                 <MailOpen className="text-primary w-6 h-6 xs:w-8 xs:h-8"/>
               ) : (
                 <Mail className="w-6 h-6 xs:w-8 xs:h-8 text-secondary"/>
               )}
             </Link>
           </div>
          </Marquee>
        </div>
      </div>
      <div id="ProjectsSection" className="h-screen w-full flex flex-col">
       <Marquee className="flex gap-8 bg-secondary items-center pt-5 pb-2.5 z-[80] overflow-y-hidden" direction="right" speed={100}>
        <div className={`text-4xl lg:text-7xl flex gap-8 font-moderniz text-primary`}>
          <p>PROJECTS</p>
          <p>PROJECTS</p>
          <p>PROJECTS</p>
          <p>PROJECTS</p>
          <p>PROJECTS</p>
          <p>PROJECTS</p>
          <p>PROJECTS</p>
          <p>PROJECTS</p>
          <p>PROJECTS</p>
        </div>
       </Marquee>  
       <div className="w-full h-full sm:p-16 lg:p-12 flex overflow-x-hidden sm:overflow-x-scroll gap-8 thin-scrollbar overflow-y-hidden">
        {(isDesktop || isTablet) && projects.map((project) => (
          <ProjectsCard key={project.id} project={project}/>
        ))}
        {isMobile && (
          <ProjectsSwiper/>
        )}                
       </div>
      </div>
      <div id="ContactSection" className="h-screen w-full flex flex-col">
       <Marquee className="flex gap-8 bg-third items-center pt-5 pb-2.5 overflow-y-hidden" direction="right" speed={100}>
        <div className={`text-4xl lg:text-7xl flex gap-8 font-moderniz text-white`}>
          <p>CONTACT</p>
          <p>CONTACT</p>
          <p>CONTACT</p>
          <p>CONTACT</p>
          <p>CONTACT</p>
          <p>CONTACT</p>
          <p>CONTACT</p>
          <p>CONTACT</p>
          <p>CONTACT</p>
        </div>
       </Marquee>
       <div className="w-full h-full p-8 lg:p-12 flex flex-col justify-center items-center overflow-x-hidden lg:overflow-x-scroll gap-20 no-scrollbar overflow-y-hidden font-metropolis">
        <h3 className="font-bold text-[2.96rem] lg:text-[5.25rem] leading-none">Hit Me Up</h3>
        <p className="text-sm max-w-2xl text-center -mt-10">
          Explore the possibilities of collaboration and innovation together. Whether you have a project in mind, want to discuss technology, or just want to say hello - I'm always excited to connect with fellow creators and tech enthusiasts. Let's turn ideas into reality!
        </p>
        <div className="lg:w-fit h-fit gap-8 flex flex-wrap w-[100%] justify-center">
          {contacts.map((contact, index) => (
            <Link key={index} href={contact.url} target="_blank" className={`bg-secondary lg:hover:scale-110 duration-200 shadow-balance shadow-secondary lg:hover:shadow-third w-16 h-16 xs:w-20 xs:h-20 lg:w-32 lg:h-32 flex justify-center items-center rounded-full`}>
              {contact.icon}
            </Link>
          ))}
        </div>
       </div>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
