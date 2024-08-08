"use client";


import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, text: "I love the fresh produce and the easy ordering process!", author: "Jane Doe" },
  { id: 2, text: "The best way to support local farmers and get healthy food.", author: "John Smith" },
  { id: 3, text: "Great variety and excellent quality. Highly recommended!", author: "Alice Johnson" },
  { id: 4, text: "Great variety and excellent quality. Highly recommended!", author: "Alice Johnson" },
  { id: 5, text: "Great variety and excellent quality. Highly recommended!", author: "Alice Johnson" },
  { id: 6, text: "Great variety and excellent quality. Highly recommended!", author: "Alice Johnson" },
  { id: 7, text: "Great variety and excellent quality. Highly recommended!", author: "Alice Johnson" },
  { id: 8, text: "Great variety and excellent quality. Highly recommended!", author: "Alice Johnson" },
]

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-black flex items-center justify-center overflow-hidden flex-col text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
      
      <motion.ul 
        className="testimonials flex flex-row items-center w-full bg-transparent"
        initial={{ x: '0%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {testimonials.map(test => (
          <li 
            className="testimonial-item min-w-80 max-h-80 rounded-lg hover:shadow-me border-2 mx-6 px-7 py-16  transition-all duration-1000"
            key={test.id}
          >
            <p>{test.text}</p>
            <p className='mt-5'>Author: {'  '}<span className='underline decoration-orange-900'>{test.author}</span></p>
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
