import React, { useState } from 'react';
import Image from 'next/image';
import { MapIcon, BriefcaseBusiness } from 'lucide-react';

interface Experience {
    logo: string;
    company: string;
    position: string;
    period: string;
    location: string;
    type: string;
}

interface ExperienceCardProps extends Experience {
    index: number;
    hoverIndex: number | null;
    onHover: (index: number) => void;
    onLeave: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
    logo, 
    company, 
    position, 
    period, 
    location, 
    type, 
    index, 
    hoverIndex, 
    onHover, 
    onLeave 
}) => {
    return (
        <div 
            onMouseOver={() => onHover(index)} 
            onMouseLeave={() => onLeave()} 
            className={`flex items-center transition-all duration-500 shadow-md shadow-black border rounded-3xl
                ${hoverIndex === index 
                    ? "gap-4 border-secondary px-6 bg-black/40" 
                    : "w-24 justify-center border-white/30"}`}
            style={{
                width: hoverIndex === index ? 'auto' : '6rem',
                height: '6rem',
                minWidth: hoverIndex === index ? '24.4rem' : '6rem',
            }}
        >
            <Image
                src={logo}
                alt={`logo-${company}`}
                width={500}
                height={500}
                className="w-20 lg:w-12 object-contain"
            />
            {hoverIndex === index && (
                <div className="flex gap-4 whitespace-nowrap">
                    <div className="flex flex-col gap-0.5">
                        <p className="font-medium text-[0.7rem]">{company}</p>
                        <p className="text-xs font-bold">{position}</p>
                        <p className="text-[0.7rem] font-light">{period}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 justify-between">
                        <div className="flex items-center gap-2">
                            <MapIcon className="w-4 h-4"/>
                            <p className="text-xs font-medium">{location}</p>
                        </div>
                        <div className="h-[1px] w-full bg-white/30"></div>
                        <div className="flex items-center gap-2">
                            <BriefcaseBusiness className="w-4 h-4"/>
                            <p className="text-xs font-medium">{type}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const WorkExperiences: React.FC = () => {
    const [hoverExperience, setHoverExperience] = useState<number | null>(null);
    
    const experiences: Experience[] = [
        {
            logo: "/images/hievents.png",
            company: "Hievents.co",
            position: "Backend Developer",
            period: "Aug 2024 - Present",
            location: "Jakarta, Indonesia",
            type: "Remote - Internship"
        },
        {
            logo: "/images/magna.png",
            company: "Magna Partners",
            position: "Software Engineer Associate",
            period: "Jun 2024 - Present",
            location: "Jakarta, Indonesia",
            type: "Remote - Part-time"
        },
        {
            logo: "/images/sc.png",
            company: "StudentsCatalyst",
            position: "Technical Associate",
            period: "Sep 2023 - Mar 2024",
            location: "Jakarta, Indonesia",
            type: "Remote - Contract"
        }
    ];

    return (
        <div className="mx-11">
            <p className="font-bold text-2xl mb-3">Work Experiences</p>
            <div className="flex gap-4">
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        {...exp}
                        index={index}
                        hoverIndex={hoverExperience}
                        onHover={setHoverExperience}
                        onLeave={() => setHoverExperience(null)}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkExperiences;