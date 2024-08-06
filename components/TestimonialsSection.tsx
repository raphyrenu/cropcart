"use client";

import { useEffect, useState } from 'react'

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
    <section className="py-12 bg-black flex items-center justify-center overflow-x-auto flex-col text-center">
      <h2 className="text-3xl font-bold mb-8 fixed">What Our Users Say</h2>
      
      <div className="testimonials flex flex-row justify-between items-center w-full">
        {testimonials.map(test => (
            <div className="testimonial-item min-w-80 max-h-80 rounded-lg border-2 mx-6 px-7 py-16">
            <blockquote key={test.id}>{test.text}</blockquote>
            <p className='mt-5'>Author: {'  '}<span className=' underline decoration-orange-900'>{test.author}</span></p>
            </div>
          ))}
      </div>
      
    </section>
  )
}
