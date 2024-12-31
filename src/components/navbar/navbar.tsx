import { useScreenSize } from '@/hooks/screenSizeValidation'
import { MenuIcon, X } from 'lucide-react'
import React, { useState } from 'react'

export const Navbar = () => {
  const { isDesktop, isMobile, isTablet } = useScreenSize()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    {isDesktop && (
      <div className='flex gap-6 fixed text-sm font-metropolis bg-primary shadow-balance shadow-black/90 text-white font-semibold items-center left-1/2 -translate-x-1/2 z-[100] top-6 px-7 rounded-full py-2.5 '>
        <button className={`hover:scale-[1.08] duration-200 `}>
          Essence
        </button>
        <button className='hover:scale-[1.08] duration-200 '>
          Project
        </button>
        <button className='hover:scale-[1.08] duration-200 '>
          Contact
        </button>
      </div>    
    )}
    {isMobile && (
      <div className={`${isOpen ? 'w-72 pl-3' : 'w-14'} ease-in-out duration-200 justify-center text-sm rounded-l-full py-3 text-white font-metropolis font-medium fixed bg-primary border-r-0 border-2 border-secondary top-8 right-0 z-[100] flex gap-4 shadow-balance shadow-black/80`}>
        {isOpen ? (
          <>
            <button className={`hover:scale-[1.08] duration-200 `}>
              Essence
            </button>
            <button className='hover:scale-[1.08] duration-200 '>
              Project
            </button>
            <button className='hover:scale-[1.08] duration-200 '>
              Contact
            </button>
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
