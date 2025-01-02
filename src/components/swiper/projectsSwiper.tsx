import { projects } from '@/data/projects';
import { ProjectsCard } from '../cards/projectsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { CustomCSSProperties } from '@/types/customCSSProperties';

export const ProjectsSwiper = () => {
  const projectsSwiperStyles: CustomCSSProperties  = {
    "--swiper-pagination-color": "#FFFFFF",
    "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
    "--swiper-pagination-bullet-size": "8px",
    "--swiper-pagination-bottom": "-0.4rem",
  }
  return (
    <Swiper
        effect={"cards"}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCards, Pagination]}        
        className="mySwiper w-full h-[97%]"
        style={projectsSwiperStyles}
      >
        {projects.map((project) => (
            <SwiperSlide key={project.id} className='p-6 mb-10'>
                <ProjectsCard project={project}/>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}
