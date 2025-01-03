import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { BriefcaseBusiness, MapIcon } from "lucide-react";
import Image from "next/image";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    logo: string;
    company: string;
    position: string;
    period: string;
    location: string;
    type: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const activeItemRef = useRef<HTMLDivElement | null>(null);
  
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const updateTooltipPosition = () => {
    if (activeItemRef.current && hoveredIndex !== null) {
      const rect = activeItemRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + rect.width / 2,
        y: rect.top,
      });
    }
  };

  useEffect(() => {
    if (hoveredIndex !== null) {
      // Update position immediately and then set up interval
      updateTooltipPosition();
      const interval = setInterval(updateTooltipPosition, 16); // ~60fps

      return () => clearInterval(interval);
    }
  }, [hoveredIndex]);

  const handleMouseEnter = (event: React.MouseEvent, itemId: number, ref: React.RefObject<HTMLDivElement>) => {
    activeItemRef.current = ref.current;
    setHoveredIndex(itemId);
    updateTooltipPosition();
  };

  return (
    <>
      {items.map((item) => {
        const itemRef = useRef<HTMLDivElement>(null);
        
        return (
          <div
            className="relative group"
            key={item.id}
            ref={itemRef}
            onMouseEnter={(e) => handleMouseEnter(e, item.id, itemRef)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="group-hover:scale-105 group-hover:z-30 border-[1.2px] border-third rounded-3xl shadow-md shadow-black relative transition duration-200 p-4 group-hover:bg-black">
              <Image
                onMouseMove={handleMouseMove}
                src={item.logo}
                alt={item.company}
                width={500}
                height={500}
                className="object-contain w-8 h-8 lg:w-12 lg:h-12"
              />
            </div>

            {typeof window !== 'undefined' && hoveredIndex === item.id &&
              createPortal(
                <AnimatePresence mode="popLayout">
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 10,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                      whiteSpace: "nowrap",
                      position: "fixed",
                      left: tooltipPosition.x - 120,
                      top: tooltipPosition.y - 122,
                      transform: "translateX(-50%)",
                    }}
                    className="flex text-xs flex-col gap-2 rounded-3xl bg-black/90 border-[1.2px] border-third shadow-md shadow-black px-4 pt-4 pb-2 w-max z-[100] font-metropolis"
                  >
                    <div className="flex gap-4 items-center">
                      <Image
                        src={item.logo}
                        alt={item.company}
                        width={500}
                        height={500}
                        className="w-8 h-8 lg:w-[2.6rem] lg:h-[2.6rem] object-contain"
                      />
                      <div className="flex flex-col lg:gap-1">
                        <p className="font-medium text-[0.56rem] lg:text-[0.7rem]">{item.company}</p>
                        <p className="text-[0.64rem] lg:text-xs font-bold">{item.position}</p>
                        <p className="text-[0.56rem] lg:text-[0.7rem] font-light">{item.period}</p>
                      </div>
                    </div>
                    <div className="w-full bg-gradient-to-r from-transparent via-third to-transparent h-[1.2px]" />
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <MapIcon className="w-4 h-4"/>
                        <p className="text-[0.56rem] font-medium">{item.location}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <BriefcaseBusiness className="w-4 h-4"/>
                        <p className="text-[0.56rem] font-medium">{item.type}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>,
                document.body
              )}
          </div>
        );
      })}
    </>
  );
};

export default AnimatedTooltip;