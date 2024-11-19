import React from 'react'

export const Navbar = () => {
  return (
    <div className='fixed bg-[#151515] left-1/2 -translate-x-1/2 z-50 top-6 px-4 rounded-full py-2 shadow-balance shadow-white/60 flex gap-4 justify-between text-sm'>
        <button>
            About
        </button>
        <button>
            Project
        </button>
        <button>
            Contact
        </button>
    </div>
  )
}
