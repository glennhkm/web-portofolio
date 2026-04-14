"use client";

import { AnimatedTooltip } from "@/components/aceternity/animatedTooltip";
import { ProjectsCard } from "@/components/cards/projectsCard";
import CircularText from "@/components/circularText/circularText";
import { LeaderIcon } from "@/components/icons/leader";
import { Navbar } from "@/components/navbar/navbar";
import { useScreenSize } from "@/hooks/screenSizeValidation";
import {
  ArrowRight,
  Mail,
  MailOpen,
  Pause,
  Play,
  FileText,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { Footer } from "@/components/footer/footer";
import { ContactIcon } from "@/components/icons/contactIcon";
import { CvModal } from "@/components/modal/cvModal";
import type {
  Project,
  Contact,
  WorkExperience,
  SiteContent,
  Education,
} from "@/lib/db/queries";
import { useRouter } from "next/navigation";

interface HomeClientProps {
  projects: Project[];
  contacts: Contact[];
  workExperiences: WorkExperience[];
  siteContent: SiteContent;
}

const HomeClient = ({
  projects,
  contacts,
  workExperiences,
  siteContent,
}: HomeClientProps) => {
  const router = useRouter();
  const { isMobile, isTablet, isIpadHorizontal, isDesktop, isUltraWide } = useScreenSize();
  const isLargeScreen = isDesktop || isUltraWide;
  const isNotMobile = !isMobile;
  const [educationCard, setEducationCard] = useState(0);
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [isPlayMarquee, setIsPlayMarquee] = useState(true);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [activeProjectsCategory, setActiveProjectsCategory] = useState<
    "Award-Winning Projects" | "Freelance Projects" | "Personal Projects"
  >("Award-Winning Projects");
  const projectCategories = [
    {
      name: "Award-Winning Projects",
      description:
        "Projects that have earned recognition in competitions such as hackathons, showcasing innovation, strong problem-solving, and the ability to perform under pressure.",
    },
    {
      name: "Freelance Projects",
      description:
        "Projects developed for clients, focusing on delivering reliable, scalable, and tailored solutions while maintaining clear communication and professionalism.",
    },
    {
      name: "Personal Projects",
      description:
        "Passion-driven projects where I explore ideas, experiment with new technologies, and build solutions based on my own curiosity and creativity.",
    },
  ];

  // Find the education with an organization (for the overlay card)
  const eduWithOrg = siteContent.educations.find(
    (e: Education) => e.organization,
  );
  const eduPrimary =
    siteContent.educations.find((e: Education) => !e.organization) ||
    siteContent.educations[0];

  // CircularText sizing based on screen
  const getCircularTextProps = () => {
    if (isUltraWide) return { spacing: 1.16, size: 1.16 };
    if (isDesktop) return { spacing: 1.04, size: 1.04 };
    if (isIpadHorizontal) return { spacing: 0.94, size: 0.94 };
    if (isTablet) return { spacing: 0.9, size: 0.9 };
    return { spacing: 0.84, size: 0.84 };
  };

  const circularProps = getCircularTextProps();

  return (
    <div className="w-full h-full">
      <Navbar />
      {/* CV Modal */}
      {siteContent.cvUrl && (
        <CvModal
          isOpen={isCvOpen}
          onClose={() => setIsCvOpen(false)}
          cvUrl={siteContent.cvUrl}
        />
      )}
      <div
        id="EssenceSection"
        className={`w-full h-screen flex flex-col relative font-metropolis scroll-smooth`}
      >
        {/* ─── Yellow Greeting Bar ─── */}
        <div className="w-full h-[10%] ipad-horizontal:h-[14%] lg:h-[20%] flex bg-secondary px-4 sm:px-8 ipad-horizontal:px-10 lg:px-12 2xl:px-16 relative items-center z-20 overflow-hidden">
          {/* Decorative grid dots */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #1d1d1d 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Decorative corner accent lines */}
          <div className="absolute top-3 right-4 sm:right-8 ipad-horizontal:right-10 lg:right-12 flex gap-1.5 opacity-20">
            <div className="w-8 sm:w-12 ipad-horizontal:w-14 lg:w-16 h-[2px] bg-primary rounded-full" />
            <div className="w-4 sm:w-6 ipad-horizontal:w-8 lg:w-10 h-[2px] bg-primary rounded-full" />
            <div className="w-2 sm:w-3 h-[2px] bg-primary rounded-full" />
          </div>
          <div className="absolute bottom-3 right-4 sm:right-8 ipad-horizontal:right-10 lg:right-12 flex gap-1.5 opacity-20">
            <div className="w-2 sm:w-3 h-[2px] bg-primary rounded-full" />
            <div className="w-4 sm:w-6 ipad-horizontal:w-8 lg:w-10 h-[2px] bg-primary rounded-full" />
            <div className="w-8 sm:w-12 ipad-horizontal:w-14 lg:w-16 h-[2px] bg-primary rounded-full" />
          </div>

          <div className="text-primary flex flex-col gap-2 sm:gap-3 relative z-10">
            <p
              className={`text-lg xs:text-xl sm:text-2xl md:text-3xl ipad-horizontal:text-3xl lg:text-4xl xl:text-[2.6rem] 2xl:text-5xl font-bold uppercase font-moderniz`}
            >
              {siteContent.heroGreeting}
            </p>
          </div>

          {/* Decorative diagonal slash — non-mobile */}
          {isNotMobile && (
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-40 h-[200%] bg-primary/[0.03] -rotate-12 pointer-events-none" />
          )}
        </div>

        {/* ─── Hero Content Area ─── */}
        <div
          className={`relative flex flex-col gap-8 sm:gap-10 ipad-horizontal:flex-row ipad-horizontal:justify-between ipad-horizontal:items-center lg:flex-row lg:justify-between lg:items-center w-full h-[80%] ipad-horizontal:h-[54%] lg:h-[54%] py-6 sm:py-8 ipad-horizontal:py-10 text-white`}
        >
          {/* Open to Work Badge */}
          {siteContent.openToWork && (
            <div className="bg-thirdAlternative backdrop-blur-sm border-2 border-secondary absolute -left-[3rem] xs:-left-[3.5rem] sm:-left-[4rem] bottom-[18%] sm:bottom-[22.8%] rotate-45 ipad-horizontal:-left-[3rem] ipad-horizontal:bottom-auto ipad-horizontal:top-[2rem] ipad-horizontal:-rotate-[45.2deg] lg:-left-[3rem] xl:-left-[4rem] lg:bottom-auto lg:top-[2rem] xl:top-[2.4rem] lg:-rotate-[45.2deg] z-[70] ipad-horizontal:z-10 lg:z-10 w-48 xs:w-52 sm:w-56 md:w-60 ipad-horizontal:w-56 lg:w-60 xl:w-64 text-center py-1.5 sm:py-2">
              <p
                className={`text-secondary font-bold uppercase text-xs sm:text-sm`}
              >
                Open to Work
              </p>
            </div>
          )}

          {/* ─── About Text ─── */}
          <div className="relative z-[70] flex flex-col gap-3 sm:gap-4 w-full ipad-horizontal:w-1/2 lg:w-1/2 px-4 sm:px-6 md:px-16 ipad-horizontal:pr-0 ipad-horizontal:pl-8 lg:pr-0 lg:pl-8 xl:pl-12 2xl:pl-16">
            <p className="font-extrabold text-3xl sm:text-5xl md:text-6xl ipad-horizontal:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-secondary text-center ipad-horizontal:text-start lg:text-start">
              {siteContent.aboutTitle}
            </p>
            <p className="text-center text-[0.7rem] sm:text-base md:text-lg ipad-horizontal:text-sm lg:text-sm xl:text-base 2xl:text-lg ipad-horizontal:text-start lg:text-start leading-relaxed">
              {siteContent.aboutText}
            </p>
            {/* CTA Buttons */}
            <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-3 justify-center ipad-horizontal:justify-start lg:justify-start">
              {siteContent.cvUrl && (
                <button
                  onClick={() => {
                    isDesktop ? setIsCvOpen(true) : router.push(siteContent.cvUrl);
                  }}
                  className="group flex items-center gap-2 sm:gap-2.5 bg-secondary hover:bg-secondary/90 text-primary font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  View CV
                </button>
              )}
              <Link
                href="#ContactSection"
                className="group flex items-center gap-2 sm:gap-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Find Me
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ─── Profile Image ─── */}
          <div className="pointer-events-none absolute -bottom-12 ipad-horizontal:-bottom-12 lg:bottom-0 w-[80%] h-[60%] xs:w-[87%] xs:h-[67%] sm:w-[85%] sm:h-[65%] ipad-horizontal:w-[42%] ipad-horizontal:h-[70vh] lg:w-[40%] lg:h-[74vh] xl:w-[38%] xl:h-[76vh] 2xl:w-[35%] 2xl:h-[78vh] left-1/2 -translate-x-1/2 ipad-horizontal:left-auto ipad-horizontal:right-6 ipad-horizontal:translate-x-0 lg:left-auto lg:right-8 xl:right-12 2xl:right-16 lg:translate-x-0 z-[60]">
            <Image
              src={siteContent.profileImageUrl}
              alt="Profile"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ─── Bottom Marquee Strip ─── */}
        <div
          className={`w-full absolute bottom-0 border-t-[1px] border-white/20 h-[20%] ipad-horizontal:h-[26%] lg:h-[26%] bg-primary z-[80]`}
        >
          <button
            onClick={() => setIsPlayMarquee((prev) => !prev)}
            className="absolute -top-[2.04rem] bg-secondary shadow-balance shadow-secondary rounded-tr-xl p-2 "
          >
            {isPlayMarquee ? (
              <Pause className="text-primary w-4 h-4" />
            ) : (
              <Play className="text-primary w-4 h-4" />
            )}
          </button>
          <Marquee
            play={isPlayMarquee}
            className="w-full h-full overflow-y-hidden text-white"
            speed={60}
            direction="left"
          >
            {/* ─── Education Cards ─── */}
            <div
              id="EducationAndHimpunan"
              className="flex gap-3 sm:gap-4 text-8xl font-bold relative mx-6 sm:mx-8 ipad-horizontal:mx-8 lg:mx-9 xl:mx-10 2xl:mx-11"
            >
              {eduWithOrg && (
                <div
                  onMouseOver={() => isLargeScreen && setEducationCard(1)}
                  onClick={() => !isLargeScreen && setEducationCard(1)}
                  className={`${educationCard !== 1 ? "-z-10" : "z-10"} active:scale-110 lg:hover:scale-110 duration-200 cursor-pointer px-3 xs:px-4 sm:px-5 ipad-horizontal:px-4 lg:px-5 xl:px-6 2xl:px-7 h-[5rem] xs:h-[5.5rem] sm:h-[6.5rem] ipad-horizontal:h-[5.5rem] lg:h-[6.5rem] xl:h-[7.5rem] 2xl:h-32 absolute top-0 -left-14 xs:-left-16 sm:-left-20 ipad-horizontal:-left-16 lg:-left-18 border flex items-center bg-primary border-white/30 shadow-md shadow-black rounded-full gap-2 sm:gap-3 ipad-horizontal:gap-2.5 lg:gap-3`}
                >
                  {eduWithOrg.organizationLogo && (
                    <Image
                      src={eduWithOrg.organizationLogo}
                      alt={eduWithOrg.organization || ""}
                      width={500}
                      height={500}
                      className="w-7 xs:w-8 sm:w-12 ipad-horizontal:w-9 lg:w-11 xl:w-[3.2rem] 2xl:w-[3.9rem] object-contain"
                    />
                  )}
                  <div className={`flex flex-col gap-0.5 text-sm`}>
                    <p className="font-bold text-[0.58rem] xs:text-[0.65rem] sm:text-xs ipad-horizontal:text-[0.65rem] lg:text-xs xl:text-xs 2xl:text-sm">
                      {eduWithOrg.organization}
                    </p>
                    <div className="h-[1px] w-full bg-white/20 my-0.5"></div>
                    <div className="flex gap-1 sm:gap-2 ipad-horizontal:gap-1.5 items-center">
                      <LeaderIcon className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ipad-horizontal:w-4 ipad-horizontal:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
                      <p className="text-[0.65rem] xs:text-xs sm:text-sm ipad-horizontal:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold">
                        {eduWithOrg.organizationRole}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {eduPrimary && (
                <div
                  onMouseOver={() => isLargeScreen && setEducationCard(0)}
                  onClick={() => !isLargeScreen && setEducationCard(0)}
                  className={`active:scale-110 lg:hover:scale-110 duration-200 cursor-pointer px-3 xs:px-4 sm:px-5 ipad-horizontal:px-4 lg:px-5 xl:px-6 2xl:px-7 h-[5rem] xs:h-[5.5rem] sm:h-[6.5rem] ipad-horizontal:h-[5.5rem] lg:h-[6.5rem] xl:h-[7.5rem] 2xl:h-32 border bg-primary border-white/30 shadow-md shadow-black rounded-full flex gap-2 sm:gap-3 ipad-horizontal:gap-2.5 lg:gap-3 items-center`}
                >
                  <div className="flex gap-1 sm:gap-1.5">
                    {eduPrimary.logo && (
                      <Image
                        src={eduPrimary.logo}
                        alt={eduPrimary.institution}
                        width={500}
                        height={500}
                        className="w-7 xs:w-8 sm:w-12 ipad-horizontal:w-9 lg:w-11 xl:w-[3.2rem] 2xl:w-[3.9rem] object-contain"
                      />
                    )}
                    {eduPrimary.secondaryLogo && (
                      <Image
                        src={eduPrimary.secondaryLogo}
                        alt={`${eduPrimary.institution}-typo`}
                        width={500}
                        height={500}
                        className="w-7 xs:w-8 sm:w-12 ipad-horizontal:w-9 lg:w-11 object-contain invert"
                      />
                    )}
                  </div>
                  <div className={`flex flex-col gap-0.5 text-sm`}>
                    <p
                      className={`font-bold text-[0.55rem] xs:text-[0.6rem] sm:text-[0.7rem] ipad-horizontal:text-[0.62rem] lg:text-xs xl:text-xs 2xl:text-sm`}
                    >
                      {eduPrimary.institution}
                    </p>
                    <div className="h-[1px] w-full bg-white/20 my-0.5"></div>
                    <p className="text-[0.55rem] xs:text-[0.6rem] sm:text-[0.7rem] ipad-horizontal:text-[0.62rem] lg:text-xs xl:text-xs font-bold">
                      {eduPrimary.field}{" "}
                      <span className="font-light text-[0.55rem] xs:text-[0.6rem] sm:text-[0.7rem] ipad-horizontal:text-[0.62rem] lg:text-xs xl:text-xs">
                        {eduPrimary.degree}
                      </span>
                    </p>
                    {eduPrimary.gpa && (
                      <p className="text-[0.55rem] xs:text-[0.6rem] sm:text-[0.7rem] ipad-horizontal:text-[0.62rem] lg:text-xs xl:text-xs font-light">
                        Last GPA:{" "}
                        <span className="font-bold">{eduPrimary.gpa}</span>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ─── Projects Marquee Thumbnail ─── */}
            <div
              id="Projects"
              className="flex gap-3 sm:gap-4 ipad-horizontal:gap-3 lg:gap-4 mx-5 sm:mx-7 ipad-horizontal:mx-7 lg:mx-8 xl:mx-9 2xl:mx-11"
            >
              <div className="w-40 xs:w-48 sm:w-60 ipad-horizontal:w-52 lg:w-64 xl:w-72 2xl:w-80 rounded-2xl sm:rounded-3xl border border-white/20 relative flex items-center shadow-md shadow-black bg-white/5">
                <Marquee
                  speed={100}
                  className="flex gap-2 sm:gap-3"
                  direction="right"
                >
                  <div className="flex gap-2 sm:gap-3">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="w-20 xs:w-24 sm:w-32 ipad-horizontal:w-28 lg:w-32 xl:w-36 2xl:w-40 rounded-lg sm:rounded-xl h-14 xs:h-16 sm:h-[4.8rem] ipad-horizontal:h-[4rem] lg:h-[4.8rem] xl:h-[5.4rem] 2xl:h-[5.8rem] -z-30 py-1.5 sm:py-2"
                      >
                        {project.images?.[0] && (
                          <Image
                            src={project.images[0]}
                            alt="Project"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-lg sm:rounded-xl border-[1px] border-white/30 shadow-md shadow-black"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
              <div className="flex flex-col gap-0.5 sm:gap-1 justify-between">
                <p className="font-semibold text-xs xs:text-sm sm:text-lg ipad-horizontal:text-base lg:text-xl xl:text-xl 2xl:text-2xl text-secondary">
                  Projects
                </p>
                <p className="font-light text-[0.5rem] xs:text-[0.58rem] sm:text-[0.7rem] ipad-horizontal:text-[0.62rem] lg:text-xs xl:text-xs w-28 xs:w-32 sm:w-36 ipad-horizontal:w-32 lg:w-36 xl:w-40">
                  Explore these projects to see how I can assist you further.
                </p>
                <Link
                  href={"#ProjectsSection"}
                  className="flex gap-1.5 sm:gap-2 items-center cursor-pointer"
                >
                  <button className="bg-secondary rounded-full p-0.5 sm:p-1 shadow-md shadow-black border-2 border-white/40">
                    <ArrowRight className="text-primary w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                  </button>
                  <p className="font-semibold text-[0.55rem] xs:text-[0.65rem] sm:text-xs text-secondary">
                    Learn More
                  </p>
                </Link>
              </div>
            </div>

            {/* ─── Work Experiences ─── */}
            <div
              id="WorkExperiences"
              className={`flex flex-col gap-1 sm:gap-1.5 ipad-horizontal:gap-1.5 lg:gap-2 mx-5 sm:mx-7 ipad-horizontal:mx-7 lg:mx-8 xl:mx-9 2xl:mx-11`}
            >
              <p className="font-bold text-sm xs:text-base sm:text-lg ipad-horizontal:text-base lg:text-xl xl:text-xl 2xl:text-2xl text-third">
                Work Experiences
              </p>
              <div className="flex gap-2 sm:gap-3 ipad-horizontal:gap-2.5 lg:gap-3">
                <AnimatedTooltip items={workExperiences} />
              </div>
            </div>

            {/* ─── Get In Touch (Circular Text) ─── */}
            <div
              id="GetInTouch"
              className="flex gap-2 sm:gap-3 ml-5 sm:ml-7 ipad-horizontal:ml-7 lg:ml-8 xl:ml-9 mr-12 sm:mr-16 ipad-horizontal:mr-16 lg:mr-18 xl:mr-20 2xl:mr-24 relative"
            >
              <CircularText
                text="Let's build something amazing! • "
                spacing={circularProps.spacing}
                size={circularProps.size}
              />
              <Link
                href={"#ContactSection"}
                onMouseOver={() => setIsMailOpen(true)}
                onMouseLeave={() => setIsMailOpen(false)}
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border border-secondary p-3 xs:p-4 sm:p-5 ipad-horizontal:p-4 lg:p-5 xl:p-6 2xl:p-7 rounded-full shadow-md shadow-black lg:hover:bg-secondary duration-300"
              >
                {isMailOpen && isLargeScreen ? (
                  <MailOpen className="text-primary w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ipad-horizontal:w-5 ipad-horizontal:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
                ) : (
                  <Mail className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ipad-horizontal:w-5 ipad-horizontal:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-secondary" />
                )}
              </Link>
            </div>
          </Marquee>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          PROJECTS SECTION
      ═══════════════════════════════════════════════════════ */}
      <div id="ProjectsSection" className="min-h-screen w-full flex flex-col">
        <Marquee
          className="flex gap-6 sm:gap-8 bg-secondary items-center pt-4 sm:pt-5 pb-2 sm:pb-2.5 z-[80] overflow-y-hidden"
          direction="right"
          speed={100}
        >
          <div
            className={`text-3xl xs:text-4xl sm:text-5xl ipad-horizontal:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl flex gap-6 sm:gap-8 font-moderniz text-primary`}
          >
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

        <div className="w-full flex-1 p-4 sm:p-8 ipad-horizontal:p-10 lg:p-12 xl:p-14 2xl:p-16 flex flex-col gap-6 sm:gap-8">
          {/* Category Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 ipad-horizontal:gap-4 lg:gap-5 2xl:gap-6">
            {projectCategories.map((category) => {
              const isActive = activeProjectsCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() =>
                    setActiveProjectsCategory(
                      category.name as typeof activeProjectsCategory,
                    )
                  }
                  className={`group relative flex-1 rounded-xl font-metropolis sm:rounded-2xl p-4 sm:p-5 ipad-horizontal:p-5 lg:p-6 2xl:p-7 text-left duration-300 overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-br from-third to-thirdAlternative shadow-lg shadow-third/20 border-none"
                      : "bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  <span
                    className={`block font-bold text-sm sm:text-lg ipad-horizontal:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-tight transition-colors ${
                      isActive
                        ? "text-secondary"
                        : "text-white/60 group-hover:text-white/80"
                    }`}
                  >
                    {category.name}
                  </span>
                  <span
                    className={`block mt-1 sm:mt-1.5 text-[0.6rem] sm:text-xs ipad-horizontal:text-xs lg:text-xs xl:text-sm 2xl:text-sm leading-relaxed transition-colors ${
                      isActive
                        ? "text-white/80"
                        : "text-white/30 group-hover:text-white/40"
                    }`}
                  >
                    {category.description}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 ipad-horizontal:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-5 ipad-horizontal:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
            {projects
              .filter((p) => p.category === activeProjectsCategory)
              .map((project) => (
                <ProjectsCard key={project.id} project={project} />
              ))}
            {projects.filter((p) => p.category === activeProjectsCategory)
              .length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-16 sm:py-24 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-white/20" />
                </div>
                <p className="text-white/40 text-sm sm:text-base lg:text-lg font-medium">
                  No projects in this category yet
                </p>
                <p className="text-white/20 text-xs sm:text-sm lg:text-base mt-1">
                  Check back soon for updates!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════════════════ */}
      <div id="ContactSection" className="h-screen w-full flex flex-col">
        <Marquee
          className="flex gap-6 sm:gap-8 bg-third items-center pt-4 sm:pt-5 pb-2 sm:pb-2.5 overflow-y-hidden"
          direction="left"
          speed={100}
        >
          <div
            className={`text-3xl xs:text-4xl sm:text-5xl ipad-horizontal:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl flex gap-6 sm:gap-8 font-moderniz text-white`}
          >
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
        <div className="w-full h-full p-6 sm:p-8 ipad-horizontal:p-10 lg:p-12 xl:p-14 2xl:p-16 flex flex-col justify-center items-center overflow-x-hidden lg:overflow-x-scroll gap-16 sm:gap-20 ipad-horizontal:gap-16 no-scrollbar overflow-y-hidden font-metropolis text-white">
          <h3 className="font-bold text-[2.5rem] xs:text-[2.8rem] sm:text-[3.5rem] ipad-horizontal:text-[4rem] lg:text-[4.5rem] xl:text-[5.25rem] 2xl:text-[6rem] leading-none text-center">
            {siteContent.contactSectionTitle}
          </h3>
          <p className="text-xs sm:text-sm ipad-horizontal:text-sm lg:text-base xl:text-lg 2xl:text-xl max-w-2xl 2xl:max-w-3xl text-center -mt-8 sm:-mt-10 ipad-horizontal:-mt-8 px-4">
            {siteContent.contactSectionDescription}
          </p>
          <div className="lg:w-fit h-fit gap-6 sm:gap-8 ipad-horizontal:gap-7 flex flex-wrap w-[100%] justify-center">
            {contacts.map((contact, index) => (
              <Link
                key={index}
                href={contact.url}
                target="_blank"
                className={`bg-secondary lg:hover:scale-110 duration-200 shadow-balance shadow-secondary lg:hover:shadow-third w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 ipad-horizontal:w-24 ipad-horizontal:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 flex justify-center items-center rounded-full`}
              >
                <ContactIcon name={contact.icon} />
              </Link>
            ))}
          </div>
        </div>
        <Footer text={siteContent.footerText} />
      </div>
    </div>
  );
};

export default HomeClient;
