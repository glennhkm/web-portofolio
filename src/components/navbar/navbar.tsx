import { useScreenSize } from '@/hooks/screenSizeValidation'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Navbar = () => {
  const { isDesktop, isMobile, isTablet } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 1600);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(hideTimeout);
      };
    }
  }, []);

  const menuItems = [
    { name: 'Essence', link: '#EssenceSection' },
    { name: 'Project', link: '#ProjectsSection' },
    { name: 'Contact', link: '#ContactSection' }
  ];

  return (
    <>
    {isDesktop && (
      <div className={`flex gap-6 fixed text-sm font-metropolis bg-primary shadow-balance shadow-third text-white font-semibold items-center left-1/2 -translate-x-1/2 z-[100] top-6 px-7 rounded-full py-2.5 transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} `}>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.link} className={`hover:scale-[1.08] duration-200 `}>
            {item.name}
          </Link>  
        ))}
      </div>    
    )}  
    {isMobile && (
      <div className={`${isOpen ? 'w-72 pl-3' : 'w-14'} ease-in-out duration-200 justify-center text-sm rounded-l-full py-3 text-white font-metropolis font-medium fixed bg-primary border-r-0 border-2 border-secondary top-8 right-0 z-[100] flex gap-4 shadow-balance shadow-black/80`}>
        {isOpen ? (
          <>
            {menuItems.map((item, index) => (
              <Link onClick={() => setIsOpen(false)} key={index} href={item.link} className={`hover:scale-[1.08] duration-200 flex items-center `}>
                {item.name}
              </Link>  
            ))}
            <button onClick={() => setIsOpen(false)}>
              <X className='text-white h-6 w-6'/>
            </button>
          </>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <MenuIcon className='text-white h-6 w-6'/>
          </button>
        )}
      </div>
    )}
    </>
  )
}
