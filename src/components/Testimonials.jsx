import React from 'react'
import { InfiniteMovingCards } from './ui/MovingCards'

const Testimonials = () => {
  return (
    <main className="mt-16">
      <div className='text-center mb-10'>
        <h2 className="text-blue-200 mb-3">Satisfied Clients</h2>
        <p>
          Discover the valuable feedback and testimonials from our <br/> satisfied
          clients about their experiences with us.
        </p>
      </div>

      <div className='rounded-md flex flex-col bg-grid-[#FFF]/[0.5] antialiased items-center justify-center relative overflow-hidden'>
        <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
        />
      </div>
    </main>
  )
}

const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      image: 'https://via.placeholder.com/48x48',
      rating: 3,
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
      image: 'https://via.placeholder.com/48x48',
      rating: 4,
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      image: 'https://via.placeholder.com/48x48',
      rating: 3,
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
      image: 'https://via.placeholder.com/48x48',
      rating: 5,
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
      image: 'https://via.placeholder.com/48x48',
      rating: 5,
    },
  ];

export default Testimonials
