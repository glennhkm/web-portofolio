import { Project } from '@/data/projects';
import { useScreenSize } from '@/hooks/screenSizeValidation';
import { oswald } from '@/lib/fonts/getFonts'
import { GithubIcon, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface ProjectsCardProps {
    project: Project;
}

export const ProjectsCard = ({ project }: ProjectsCardProps) => {
  const { isDesktop, isMobile } = useScreenSize()
  const variants = [
    {
        name: 'primary',
        card: 'bg-primary text-secondary border-[1.6px] border-secondary',
        techStackBorder: 'border-[1.2px] border-secondary',
        desc_color: 'text-white',
        projectUrl: 'bg-third text-white hover:bg-sky-700',
        cardNumber: 'border-secondary text-secondary',
    },
    {
        name: 'secondary',
        card: 'bg-secondary text-primary',
        techStackBorder: 'border-none',
        desc_color: 'text-primary',
        projectUrl: 'bg-third text-white hover:bg-sky-700',
        cardNumber: 'border-primary text-primary',
    },
    {
        name: 'third',
        card: 'bg-third text-primary',
        techStackBorder: 'border-none',
        desc_color: 'text-white',
        projectUrl: 'bg-secondary text-primary hover:bg-amber-400',
        cardNumber: 'border-primary text-primary',
    },
    {
        name: 'thirdAlternative',
        card: 'bg-thirdAlternative text-secondary',
        techStackBorder: 'border-none',
        desc_color: 'text-white',
        projectUrl: 'bg-secondary text-primary hover:bg-amber-400',
        cardNumber: 'border-secondary text-secondary',
    }
  ]

  const selectedVariant = variants.find((item) => item.name === project.cardVariant)

  return (
    <div className={`w-[100%] lg:w-[80%] h-full ${selectedVariant?.card} rounded-3xl flex flex-col gap-6 justify-between lg:gap-2 flex-shrink-0 font-metropolis p-4 pb-6 lg:px-10 lg:py-9 shadow-lg shadow-black lg:overflow-y-auto card-scrollbar`}>
        <div className='flex gap-4 justify-between'>
            <Image
                src={project.image1}
                alt='Pulmohealth'
                width={600}
                height={400}
                className='w-full lg:w-[49%] h-auto object-cover rounded-3xl shadow-lg shadow-black/80'
            />
            {isDesktop && (
                <Image
                    src={project.image2}
                    alt='Pulmohealth'
                    width={600}
                    height={400}
                    className='w-[49%] h-auto object-cover rounded-3xl shadow-lg shadow-black/80'
                />
            )}
        </div>
        <h4 className={`${oswald.className} font-extrabold text-2xl xs:text-5xl lg:text-[4.2rem] lg:leading-none tracking-tight lg:pt-2`}>{project.title}</h4>
        <div className='w-full flex flex-col lg:justify-between lg:flex-row lg:items-end gap-6'>
            <p className={`${selectedVariant?.desc_color} text-[0.64rem] xs:text-[0.68rem] lg:text-sm w-full lg:w-[46%]`}>{project.description}</p>
            <div className='flex flex-col gap-3'>
                <p className='font-bold -mb-2 text-sm xs:text-base'>TECH STACK</p>
                <div className={`w-fit bg-primary shadow-md shadow-black/40 flex gap-4 font-medium text-secondary text-[0.58rem] xs:text-[0.7rem] lg:text-xs px-6 py-2.5 rounded-full ${selectedVariant?.techStackBorder}`}>
                    {project.techStack.map((tech, index) => (
                        <p key={index}>{tech}</p>
                    ))}
                </div>
                <div className='flex gap-2'>
                    <Link target="_blank" href={project.github} className={`${selectedVariant?.projectUrl} duration-200 flex gap-1 rounded-full w-32 xs:w-36 py-2 justify-center items-center shadow-md shadow-black/40`}>
                        <GithubIcon className='w-3 h-3 xs:w-4 xs:h-4'/>
                        <p className='text-[0.7rem] xs:text-xs font-medium pt-0.5'>Github Project</p>
                    </Link>
                    <Link target="_blank" href={project.url} className={`${selectedVariant?.projectUrl} duration-200 flex gap-1.5 rounded-full w-32 xs:w-36 py-2 justify-center items-center shadow-md shadow-black/40`}>
                        <Globe className='w-3 h-3 xs:w-4 xs:h-4'/>
                        <p className='text-[0.7rem] xs:text-xs font-medium pt-0.5'>Website Url</p>
                    </Link>
                </div>                   
            </div>   
            {isDesktop && (
                <div className={`rounded-full border-[2.6px] ${selectedVariant?.cardNumber} w-14 h-14 flex justify-center items-center`}>
                    <p className='font-bold text-xl'>{project.id}</p>
                </div>
            )}
        </div>  
    </div>
  )
}
