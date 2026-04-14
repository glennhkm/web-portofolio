import type { Project } from "@/lib/db/queries";
import { oswald } from "@/lib/fonts/getFonts";
import {
  GithubIcon,
  Globe,
  ChevronLeft,
  ChevronRight,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProjectsCardProps {
  project: Project;
}

export const ProjectsCard = ({ project }: ProjectsCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = project.images?.length ? project.images : [];
  const hasGithub = Boolean(project.github);
  const hasLiveDemo = Boolean(project.url);

  const nextImage = () => {
    if (images.length > 1) {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 1) {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const variants: Record<
    string,
    {
      card: string;
      techBg: string;
      descColor: string;
      btnPrimary: string;
      btnSecondary: string;
      dotActive: string;
      dotInactive: string;
    }
  > = {
    primary: {
      card: "bg-primary border border-white/10",
      techBg: "bg-white/10 text-secondary",
      descColor: "text-gray-300",
      btnPrimary:
        "bg-secondary text-primary hover:bg-secondary/90",
      btnSecondary:
        "bg-white/10 text-white border border-white/20 hover:bg-white/20",
      dotActive: "bg-secondary",
      dotInactive: "bg-white/30",
    },
    secondary: {
      card: "bg-secondary border border-primary/10",
      techBg: "bg-primary/10 text-primary",
      descColor: "text-primary/70",
      btnPrimary: "bg-primary text-secondary hover:bg-primary/90",
      btnSecondary:
        "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20",
      dotActive: "bg-primary",
      dotInactive: "bg-primary/30",
    },
    third: {
      card: "bg-third border border-white/10",
      techBg: "bg-white/15 text-white",
      descColor: "text-white/70",
      btnPrimary:
        "bg-secondary text-primary hover:bg-secondary/90",
      btnSecondary:
        "bg-white/10 text-white border border-white/20 hover:bg-white/20",
      dotActive: "bg-secondary",
      dotInactive: "bg-white/30",
    },
    thirdAlternative: {
      card: "bg-thirdAlternative border border-white/10",
      techBg: "bg-white/10 text-secondary",
      descColor: "text-gray-300",
      btnPrimary:
        "bg-secondary text-primary hover:bg-secondary/90",
      btnSecondary:
        "bg-white/10 text-white border border-white/20 hover:bg-white/20",
      dotActive: "bg-secondary",
      dotInactive: "bg-white/30",
    },
  };

  const v = variants[project.cardVariant] || variants.primary;

  const statusConfig: Record<
    Project["projectStatus"],
    { label: string; className: string }
  > = {
    live: {
      label: "Live",
      className: "bg-emerald-500/20 text-emerald-200 border border-emerald-400/40",
    },
    development: {
      label: "In Development",
      className: "bg-amber-500/20 text-amber-100 border border-amber-300/40",
    },
    restricted: {
      label: "Limited Access",
      className: "bg-slate-500/25 text-slate-100 border border-slate-300/35",
    },
  };

  const status = statusConfig[project.projectStatus || "development"];
  const awardLabel = project.awardTitle?.trim();

  return (
    <div
      className={`${v.card} rounded-2xl ipad-horizontal:rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col font-metropolis shadow-xl shadow-black/30 relative`}
    >
      {project.category === "Award-Winning Projects" && awardLabel && (
        <div className="absolute top-3 right-0 z-20 max-w-[88%]">
          <div className="bg-secondary text-primary pl-3 pr-4 py-1.5 rounded-l-full flex items-center gap-1.5 shadow-md shadow-black/30">
            <Trophy className="w-3.5 h-3.5" />
            <p className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wide truncate">
              {awardLabel}
            </p>
          </div>
        </div>
      )}

      {/* Image Carousel */}
      {images.length > 0 && (
        <div className="relative w-full aspect-[16/9] overflow-hidden group flex-shrink-0">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-500 ${
                idx === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`${project.title} - ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}

          {/* Dark gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          {/* Carousel controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-1.5 rounded-full transition-opacity hover:bg-black/70"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-1.5 rounded-full transition-opacity hover:bg-black/70"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImage
                        ? `${v.dotActive} w-4`
                        : v.dotInactive
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 ipad-horizontal:p-5 lg:p-6 xl:p-7 2xl:p-8 gap-3 sm:gap-4">
        {/* Title */}
        <h4
          className={`${oswald.className} uppercase font-extrabold text-xl xs:text-2xl sm:text-3xl ipad-horizontal:text-2xl lg:text-[1.75rem] xl:text-[2rem] 2xl:text-[2.25rem] leading-tight tracking-tight ${
            project.cardVariant === "secondary" ? "text-primary" : "text-white"
          }`}
        >
          {project.title}
        </h4>

        <div className="flex items-center gap-2">
          <span
            className={`${status.className} inline-flex items-center rounded-full px-2.5 py-1 text-[0.58rem] sm:text-[0.65rem] xl:text-xs font-semibold uppercase tracking-wide`}
          >
            {status.label}
          </span>
        </div>

        {/* Description */}
        <p
          className={`${v.descColor} text-xs sm:text-[0.82rem] xl:text-sm 2xl:text-base`}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className={`${v.techBg} text-[0.6rem] sm:text-xs xl:text-xs font-medium px-2.5 py-1 xl:px-3 xl:py-1.5 rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Action buttons */}
        <div className="flex gap-2 pt-1">
          {hasGithub && (
            <Link
              target="_blank"
              href={project.github as string}
              className={`${v.btnSecondary} flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-2 text-[0.65rem] sm:text-xs font-medium transition-all duration-200`}
            >
              <GithubIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              GitHub
            </Link>
          )}
          {hasLiveDemo && (
            <Link
              target="_blank"
              href={project.url as string}
              className={`${v.btnPrimary} flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-2 text-[0.65rem] sm:text-xs font-semibold transition-all duration-200`}
            >
              <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Live
            </Link>
          )}
          {!hasGithub && !hasLiveDemo && (
            <p className={`${v.descColor} text-[0.65rem] sm:text-xs italic`}>
              Akses dibatasi.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

