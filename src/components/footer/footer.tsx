import React from 'react'

export const Footer = ({ text }: { text?: string }) => {
  return (
    <div className='w-full h-10 flex justify-center items-center bg-secondary font-metropolis text-xs  text-primary'>
      {text || '© 2025 Glenn Hakim. All rights reserved'}
    </div>
  )
}
