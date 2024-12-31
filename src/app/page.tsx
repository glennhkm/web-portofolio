"use client";

import { AnimatedTooltip } from "@/components/aceternity/animatedTooltip";
import CircularText from "@/components/circularText/circularText";
import { LeaderIcon } from "@/components/icons/leader";
import { Linkedin } from "@/components/icons/linkedin";
import { Navbar } from "@/components/navbar/navbar";
import { WorkExperiences } from "@/data/workExperiences";
import { useScreenSize } from "@/hooks/screenSizeValidation";
import { geistMono } from "@/lib/fonts/getFonts";
import { ArrowRight, Mail, MailOpen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const { isDesktop, isMobile } = useScreenSize();
  const [isLoading, setIsLoading] = useState(true);
  const [educationCard, setEducationCard] = useState(0);
  const [isMailOpen, setIsMailOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar/>
      <div id="BioSection" className={`w-full h-screen flex flex-col relative font-metropolis`}>
        <div className="w-full h-[20%] flex bg-secondary  px-8 relative items-center">
          <div className="text-primary flex flex-col gap-3">
            <p className={`text-base xs:text-xl lg:text-4xl font-bold uppercase font-moderniz`}>Hola, I'm Glenn 👋🏼</p> 
            <div className={`flex`}>
              <div className={`bg-third text-xs xs:text-sm lg:text-base flex gap-2.5 rounded-full px-4 py-2 border-2 border-secondary shadow-lg shadow-black/60 text-white font-medium ${geistMono.className}`}>
                <p className="ml-0.5">🧑🏻‍💻</p>
                <div>
                  <Typewriter
                    words={['Full-stack Web Developer', 'Machine Learning Enthusiast']}
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
          <div className="bg-[#255257] border-2 border-secondary absolute bottom-[31%] rotate-45 lg:bottom-auto lg:top-[2.4rem] lg:-rotate-[45.2deg] -left-[4rem] z-[70] lg:-z-40 w-56 text-center py-2">
            <p className={`text-secondary font-bold uppercase text-xs`}>Open to Work</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2 px-6 lg:pr-0 lg:pl-12">
            <p className="font-extrabold text-5xl lg:text-6xl text-secondary text-center lg:text-start">WHO AM I?</p>
            <p className="font-light text-center text-xs xs:text-sm lg:text-start">Third-year Informatics student at Syiah Kuala University, specializing in full-stack web development with a growing passion for machine learning innovations. Through startup internships and team-driven projects, I've enhanced my technical acumen and developed a forward-thinking approach to collaboration. Try to bridging the gap between robust web solutions and AI-driven technologies.</p>
            {isDesktop && ( 
              <div className="flex flex-col gap-4 mt-6 -mb-10">
                <p className="font-extrabold text-2xl uppercase">Main Tech</p>
                <div className="flex gap-4"> 
                  <div className="flex gap-4 bg-[#255257] px-4 py-2 rounded-3xl shadow-balance shadow-[#255257] text-secondary">
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
              src="/images/foto-glenn.png"
              alt="Home"
              fill
              className="object-contain opacity-"
            />
          </div>
          {isMobile && (
            <Marquee className="lg:absolute lg:bottom-0 left-0 flex gap-8 items-center py-4 w-full -z-20" direction="left" speed={80}>
             <div className={`flex gap-8 font-moderniz text-primary items-center`}>               
              <p className="font-extrabold text-lg xs:text-2xl uppercase text-white">Main Tech</p>
              <div className="flex gap-4"> 
                <div className="flex gap-4 bg-[#255257] px-4 py-2 rounded-3xl shadow-balance shadow-[#255257] text-secondary">
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
        {(isDesktop || isMobile) && (
          <div className={`w-full absolute bottom-0 border-t-[1px] border-white/20 h-[20%] lg:h-[26%] bg-primary z-[80]`}>
           <Marquee className="w-full h-full" speed={50} pauseOnHover={isDesktop || false} pauseOnClick={isMobile || false} direction="left">
            <div id="EducationAndHimpunan" className="flex gap-4 text-8xl font-bold relative mx-11">
              <div onMouseOver={() => isDesktop && setEducationCard(1)} onClick={() => isMobile && setEducationCard(1)} className={`${educationCard !== 1 ? '-z-10' : 'z-10'} active:scale-110 lg:hover:scale-110 duration-200 cursor-pointer px-7 h-[6.2rem] xs:h-32 absolute top-0 -left-20 border flex items-center bg-primary border-white/30 shadow-md shadow-black rounded-full gap-4`}>
                <Image
                  src="/images/HMIF.png"
                  alt="logo-usk"
                  width={500}
                  height={500}
                  className="w-14 xs:w-[3.9rem] object-contain"
                />
                <div className={`flex flex-col gap-1 text-sm `}>
                  <p className="font-bold text-xs xs:text-sm">Himpunan Mahasiswa Informatika USK</p>
                  <div className="h-[1px] w-full bg-white/20 my-0.5"></div>
                  <div className="flex gap-2.5 items-center">
                    <LeaderIcon className="w-5 h-5 xs:w-6 xs:h-6"/>
                    <p className="text-sm xs:text-xl font-bold ">Chairman 2024/2025</p>
                  </div>
                </div>    
              </div>          
              <div onMouseOver={() => setEducationCard(0)} onClick={() => isMobile && setEducationCard(0)} className={`active:scale-110 lg:hover:scale-110 duration-200 cursor-pointer px-7 h-[6.2rem] xs:h-32 border bg-primary border-white/30 shadow-md shadow-black rounded-full flex gap-4 items-center`}>
                <div className="flex gap-1.5">
                 <Image
                  src="/images/usk-logo-1.png"
                  alt="logo-usk"
                  width={500}
                  height={500}
                  className="w-14 xs:w-20 lg:w-[3.9rem] object-contain"
                 />
                 <Image
                  src="/images/logo-usk-typo.png"
                  alt="logo-usk-typo"
                  width={500}
                  height={500}
                  className="w-14 xs:w-20 object-contain invert"
                 />
                </div>
                <div className={`flex flex-col gap-1 text-sm `}>
                  <p className={`font-bold text-sm`}>Syiah Kuala University</p>
                  <div className="h-[1px] w-full bg-white/20 my-0.5"></div>
                  <p className="text-xs font-bold">Informatics <span className="font-light text-xs">Bachelor Degree</span></p>
                  <p className="text-xs font-light">Last GPA: <span className="font-bold">3.44 / 4</span></p>
                </div>    
              </div>            
            </div>
            <div id="Projects" className="flex gap-6 mx-11">
              <div className="w-80 rounded-3xl border border-white/20 relative flex items-center shadow-md shadow-black">
                <Marquee speed={60} className="flex gap-4" pauseOnHover direction="right">
                  <div className="flex gap-4">
                    <div className="w-28 xs:w-40 rounded-xl h-14 xs:h-20 bg-white -z-30"></div>
                    <div className="w-28 xs:w-40 rounded-xl h-14 xs:h-20 bg-white -z-30"></div>
                    <div className="w-28 xs:w-40 rounded-xl h-14 xs:h-20 bg-white -z-30"></div>
                    <div className="w-28 xs:w-40 rounded-xl h-14 xs:h-20 bg-white -z-30"></div>
                  </div>
                </Marquee>
              </div>
              <div className="flex flex-col gap-1 justify-between">
                <p className="font-semibold text-base xs:text-2xl text-secondary">Projects</p>
                <p className="font-light text-[0.65rem] xs:text-xs w-40">Explore these three distinct case studies to see how I can help you.</p>
                <div className="flex gap-3 items-center cursor-pointer">
                  <button className="bg-secondary rounded-full p-1 shadow-md shadow-black border-2 border-white/40">
                    <ArrowRight className="text-primary w-4 h-4" />
                  </button>
                  <p className="font-semibold text-xs text-secondary">Learn More</p>
                </div>
              </div>
            </div>          
            <div id="WorkExperiences" className={`flex flex-col gap-2 xs:gap-3 mx-11 overflow`}>
              <p className="font-bold text-lg xs:text-2xl text-third">Work Experiences</p>
              <div className="flex gap-4 overflow">
                <AnimatedTooltip items={WorkExperiences}/>
              </div>
            </div>
            <div id="GetInTouch" className="flex gap-4 ml-11 mr-24 relative">
              {isDesktop && (
                <CircularText 
                  text="Let’s build something amazing! • " 
                  spacing={1.2}
                  size={1.2}
                />
              )}
              {isMobile && (
                <CircularText 
                  text="Let’s build something amazing! • " 
                  spacing={1.06}
                  size={1.06}
                />
              )}
              <button onMouseOver={() => setIsMailOpen(true)} onMouseLeave={() => setIsMailOpen(false)} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border border-secondary p-5 xs:p-6 lg:p-8` rounded-full shadow-md shadow-black hover:bg-secondary duration-300">
                {isMailOpen ? (
                  <MailOpen className="text-primary w-6 h-6 xs:w-8 xs:h-8"/>
                ) : (
                  <Mail className="w-6 h-6 xs:w-8 xs:h-8 text-secondary"/>
                )}
              </button>
            </div>
           </Marquee>
          </div>
        )}
      </div>
      <div id="ProjectsSection" className="h-screen w-full">
       <Marquee className="flex gap-8 bg-secondary items-center pt-6 pb-3 z-[80]" direction="right" speed={100}>
        <div className={`text-5xl lg:text-7xl flex gap-8 font-moderniz text-primary`}>
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
       <Marquee className="flex gap-8 items-center mt-3" direction="left" speed={100}>
        <div className="text-8xl lg:text-[7rem] flex gap-8 font-moderniz text-white">
          <p>WELCOME!</p>
          <p>WELCOME!</p>
          <p>WELCOME!</p>
          <p>WELCOME!</p>
          <p>WELCOME!</p>
          <p>WELCOME!</p>
          <p>WELCOME!</p>
          <p>WELCOME!</p>
          <p>WELCOME!</p>
        </div>
       </Marquee>
      </div>
      <div id="ContactSection" className="h-screen w-full">
      <Marquee className="flex gap-8 bg-third items-center pt-6 pb-3" direction="right" speed={100}>
        <div className={`text-5xl lg:text-7xl flex gap-8 font-moderniz text-white`}>
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
      </div>
    </div>
  );
};

export default Home;