import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="testimonials-container">
      <div className="testimonials-carousel">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            style={{ 
              transform: `translateX(${100 * (index - currentIndex)}%)`,
              opacity: index === currentIndex ? 1 : 0
            }}
          >
            <div className="testimonial-avatar">
              {/* Initials as avatar placeholder */}
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
