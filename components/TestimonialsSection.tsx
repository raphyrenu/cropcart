"use client";

import { useEffect, useState } from 'react'

const testimonials = [
  { id: 1, text: "I love the fresh produce and the easy ordering process!", author: "Jane Doe" },
  { id: 2, text: "The best way to support local farmers and get healthy food.", author: "John Smith" },
  { id: 3, text: "Great variety and excellent quality. Highly recommended!", author: "Alice Johnson" },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [currentTestimonial])

  return (
    <section className="py-12 bg-gray-600 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
      <div className="testimonial-item">
        <blockquote className="text-xl italic">{testimonials[currentTestimonial].text}</blockquote>
        <p className="mt-4">- {testimonials[currentTestimonial].author}</p>
      </div>
    </section>
  )
}
