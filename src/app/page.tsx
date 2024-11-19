"use client";

import { SparklesCore } from "@/components/aceternity/sparkles";
import { DefaultCard } from "@/components/cards/defaultCard";
import { Linkedin } from "@/components/icons/linkedin";
import { Navbar } from "@/components/navbar/navbar";
import { useScreenSize } from "@/hooks/screenSizeValidation";
import { div } from "framer-motion/client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const { isDesktop, isMobile } = useScreenSize();
  const [isLoading, setIsLoading] = useState(true);

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
      <div className="z-50 relative">
        <Navbar />
      </div>
      <div className="fixed inset-0 w-full h-full z-20 bg-black/80 [mask-image:radial-gradient(80vw_100vh_at_top,transparent_50%,white)]"></div>
      <div
        id="hero"
        className="w-full h-screen flex flex-col items-center px-8 md:px-12 capitalize bg-[#151515]/20 bg-grid-white/5"
      >
        <div className="h-1/4 w-full flex flex-col items-center mt-24 relative">
          <h1 className="font-bold text-center text-7xl md:text-[6.6rem] lg:text-[7rem]">
            Glenn Hakim
          </h1>
          <div className="w-full lg:w-1/2 mt-6 relative">
            <div className="absolute -translate-x-1/2 inset-x-1/2 top-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent h-[2px] w-3/4 md:w-full blur-sm" />
            <div className="absolute -translate-x-1/2 inset-x-1/2 top-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent h-px w-3/4 md:w-full" />
            <div className="absolute inset-x-1/2 -translate-x-[52%] md:-translate-x-[54%] top-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent h-[5px] w-1/2 md:w-1/4 blur-sm" />
            <div className="absolute inset-x-1/2 -translate-x-[52%] md:-translate-x-[54%] top-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent h-px w-1/2 md:w-1/4" />
          </div>
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-2/3 md:w-full lg:w-1/2"
            particleColor="#FFFFFF"
          />
        </div>

        <div
          className={`w-full h-3/4 flex flex-col lg:flex-row justify-between items-start ${
            isLoading ? "lg:items-center" : "lg:items-end"
          }`}
        >
          {isLoading ? (
            <p className="text-white text-base animate-blink text-center w-[40%]">Loading...</p>
          ) : (
            isDesktop && (
              <div className="bg-gradient-to-b from-white/10 to-transparent w-[44%] rounded-t-[6rem] py-8 px-10 flex flex-col shadow-[0px_-10px_36px_1px_rgba(255,255,255,0.4)]">
                <p className="font-bold text-[3.2rem]">Tech Enthusiast</p>
                <p className="pl-2 pr-[6rem] text-balance">
                  "A tech enthusiast driven by the art of crafting web
                  solutions, engineering backends, and unlocking insights with
                  machine learning, I thrive at the intersection of creativity
                  and precision. My passion lies in transforming complex ideas
                  into functional and elegant digital experiences, building
                  robust backend systems that power seamless interactions, and
                  diving into data to extract meaningful insights. With a
                  commitment to continuous learning and a love for tackling new
                  challenges, I’m constantly exploring the latest advancements
                  in technology to push the boundaries of what’s possible."
                </p>
              </div>
            )
          )}
          <div className="w-full lg:w-1/2 h-[40%] md:h-[70%] lg:h-[66%] absolute bottom-0 left-1/2 -translate-x-1/2">
            <Image
              src="/images/foto-glenn.png"
              alt="Home"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex w-full lg:w-[44%]">
            <div className="grid grid-cols-3 gap-3 w-full">
              {isLoading ? (
                <p className="text-white text-base animate-blink text-center w-full col-span-3">
                  Loading...
                </p>
              ) : (
                <>
                  <DefaultCard className="col-span-2 w-full lg:h-full shadow-balance shadow-yellow-300 flex flex-col items-center lg:items-start gap-1 lg:gap-2.5 px-2 py-2 lg:px-5 lg:py-4">
                    {/* <div className="flex gap-2 w-full items-center"> */}
                    <h6 className="font-bold text-sm lg:text-xl lg:-mt-1 lg:mb-1.5">
                      Education
                    </h6>
                    {/* <div className="h-[0.2px] w-full bg-white"></div> */}
                    {/* </div> */}
                    <div className="flex gap-2 w-full justify-center">
                      <div className="bg-white/40 rounded-3xl p-3 pb-4 pr-4 border border-yellow-300 shadow-md shadow-black flex items-center">
                        <Image
                          src="/images/logo-usk.png"
                          alt="logo-usk"
                          width={500}
                          height={500}
                          className="w-20 lg:w-72 object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-1 lg:gap-2 justify-center">
                        <p className="text-[0.5rem] lg:text-base font-semibold">
                          Bachelor Degree, Informatics
                        </p>
                        <p className="text-[0.5rem] lg:text-xs">
                          August 2022 - Present
                        </p>
                        <div className="w-full h-[0.4px] bg-white"></div>
                        <p className="text-[0.5rem] lg:text-sm font-bold">
                          Last GPA : 3.4
                        </p>
                      </div>
                    </div>
                  </DefaultCard>
                  <DefaultCard className="lg:h-full shadow-balance shadow-sky-300 px-2 py-2 lg:px-5 lg:py-4 grid grid-cols-2 justify-center items-center">
                    <h6 className="font-bold text-sm lg:text-xl lg:-mt-1 lg:mb-1.5 col-span-2 text-center lg:text-start">
                      Socials
                    </h6>
                    <Linkedin className={`w-[2.4rem] md:w-[4.4rem] ${isMobile && 'ml-auto'}`}/>
                    <Linkedin className="w-[2.4rem] md:w-[4.4rem]"/>
                    <Linkedin className={`w-[2.4rem] md:w-[4.4rem] ${isMobile && 'ml-auto'}`}/>
                    <Linkedin className="w-[2.4rem] md:w-[4.4rem]"/>
                  </DefaultCard>
                  <DefaultCard className="w-full h-24 lg:h-48 col-span-3 rounded-b-none shadow-[0px_-4px_12px_1px_rgba(255,255,255,0.4)] shadow-teal-500">
                    <div>tes</div>
                  </DefaultCard>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="w-3/4 z-40 h-[1px] absolute bottom-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      <div>tes</div>
      <div>tes</div>
      <div>tes</div>
      <div>tes</div>
      <div>tes</div>
      <div>tes</div>
      <div>tes</div>
      <div>tes</div>
      <div>tes</div>
      <div>tes</div>
      <div>tes</div>
      <div>tes</div>
    </div>
  );
};

export default Home;
