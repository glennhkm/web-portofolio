import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isIpadHorizontal: false,
    isDesktop: false,
    isUltraWide: false,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const w = window.innerWidth;
      setScreenSize({
        isMobile: w < 640,
        isTablet: w >= 640 && w < 1238,
        isIpadHorizontal: w >= 1238 && w < 1400,
        isDesktop: w >= 1400 && w < 2560,
        isUltraWide: w >= 2560,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
};
