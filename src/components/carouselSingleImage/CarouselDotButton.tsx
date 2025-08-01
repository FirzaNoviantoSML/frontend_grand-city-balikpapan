'use client'
import React from 'react'
import clsx from 'clsx'

type PropType = {
  selected: boolean
  onClick: () => void
}

export const DotButton: React.FC<PropType> = ({ selected, onClick }) => {
  return (
    <button
      className={clsx(
        'w-1 h-3 rounded-full mx-1 transition-all duration-300',
        selected ? 'bg-gray-500 scale-110' : 'bg-gray-300'
      )}
      onClick={onClick}
      aria-label="Go to slide"
    />
  )
}
