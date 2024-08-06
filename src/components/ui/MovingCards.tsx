'use client'

import { cn } from '../../../lib/utils'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className
}: {
  items: {
    quote: string
    name: string
    title: string
    image: string
    rating: number
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px]"
            style={{
              background:
                'linear-gradient(90deg, rgba(194,194,194,1) 4%, rgba(255,255,255,0) 100%)'
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="bg-[#FFF] flex items-center rounded-full px-3 py-1 gap-1 w-fit mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < item.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <p className="ml-1 text-xs font-light">{item.rating}</p>
              </div>
              <p className="relative z-20 text-sm font-light">{item.quote}</p>
              <div className="relative z-20 mt-6 flex flex-row items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full"
                  />
                  <div className='flex items-start justify-between'>
                    <div className="flex flex-col">
                        <span className=" text-normal font-bold">{item.name}</span>
                        <span className=" text-sm font-light">{item.title}</span>
                    </div>
                <img src="quot.svg" alt="Quote Icon" />
                  </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
