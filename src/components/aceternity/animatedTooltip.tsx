"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { BriefcaseBusiness, MapIcon } from "lucide-react";

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
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="relative group"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
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
                }}
                className="absolute -top-20 -left-1/2 translate-x-1/2 flex text-xs flex-col gap-2 rounded-3xl bg-black/90 border border-third z-[100] shadow-md shadow-black px-4 pt-4 pb-2 w-max"
              >
                <div className="flex gap-4 items-center">
                    <Image
                      src={item.logo}
                      alt="logo-hievents"
                      width={500}
                      height={500}
                      className="w-8 h-8 lg:w-[2.6rem] object-contain"
                    />
                    <div className="flex flex-col lg:gap-1">
                        <p className="font-medium text-[0.56rem] lg:text-[0.7rem]">{item.company}</p>
                        <p className="text-[0.64rem] lg:text-xs font-bold">{item.position}</p>
                        <p className="text-[0.56rem] lg:text-[0.7rem] font-light">{item.period}</p>
                    </div>
                </div>
                <div className="w-full bg-gradient-to-r from-transparent via-third to-transparent h-px " />
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
                <div></div>                
              </motion.div>
            )}
          </AnimatePresence>
          <div className="group-hover:scale-105 group-hover:z-30 border-[1.1px] border-third rounded-3xl shadow-md shadow-black relative transition duration-200 p-4 group-hover:bg-black ">
            <Image
              onMouseMove={handleMouseMove}
              height={500}
              width={500}
              src={item.logo}
              alt={item.company}
              className="object-contain w-8 h-8 lg:w-12 lg:h-12"
            />
          </div>
        </div>
      ))}
    </>
  );
};
