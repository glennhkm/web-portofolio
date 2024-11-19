import React from 'react'

export const DefaultCard = ({className, children}: {className: string, children: React.ReactNode}) => {
  return (
    <div className={`rounded-3xl bg-white/10 ${className}`}>
      {children}
    </div>
  )
}
