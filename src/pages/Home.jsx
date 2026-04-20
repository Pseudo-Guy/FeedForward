import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImpactMetric from '../components/ImpactMetric';
import FoodCard from '../components/FoodCard';
import Testimonials from '../components/Testimonials';
import { mockFoodListings, mockTestimonials } from '../data/mockData';
import './Home.css';

const Home = () => {
  const [heroText, setHeroText] = useState('');
  const fullText = "Every meal saved is a life changed.";
  const stepsRef = useRef(null);

  // Typewriter effect for hero headline
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setHeroText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // typing speed

    return () => clearInterval(typingInterval);
  }, []);

  // Intersection Observer for stagger animation on How it Works
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card) => observer.observe(card));

    return () => {
      stepCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const handleRequestClick = (food) => {
    // Basic redirect for home page, full logic in FindFood page
    window.location.href = '/find';
  };

  return (
    <div className="home-page page-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-headline">
            {heroText}
            <span className="cursor">|</span>
          </h1>
          <p className="hero-subheadline">
            Connecting surplus food with people who need it most — in real time.
          </p>
          <div className="hero-actions">
            <Link to="/donate" className="btn btn-primary">Donate Food</Link>
            <Link to="/find" className="btn btn-outline">Find Food Near Me</Link>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-section">
        <div className="stats-container">
          <ImpactMetric end={12400} label="Meals Donated" icon="🍛" />
          <ImpactMetric end={340} label="Donors Registered" icon="🤝" />
          <ImpactMetric end={28} label="Cities Active" icon="🏙️" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section" ref={stepsRef}>
        <div className="section-header">
          <h2>How It Works</h2>
          <p>A simple, transparent process to ensure zero food waste.</p>
        </div>
        
        <div className="steps-container">
          <div className="step-card" style={{ animationDelay: '0s' }}>
            <div className="step-icon">📦</div>
            <h3>1. List Your Surplus</h3>
            <p>Tell us what you have, how much, and when it expires.</p>
          </div>
          
          <div className="step-connector"></div>
          
          <div className="step-card" style={{ animationDelay: '0.2s' }}>
            <div className="step-icon">🤝</div>
            <h3>2. We Match It</h3>
            <p>Our platform instantly connects your listing with nearby NGOs or individuals in need.</p>
          </div>
          
          <div className="step-connector"></div>
          
          <div className="step-card" style={{ animationDelay: '0.4s' }}>
            <div className="step-icon">🏡</div>
            <h3>3. Food Reaches Families</h3>
            <p>Food is picked up and distributed before it goes bad, feeding those who need it most.</p>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Food Available Near You</h2>
          <Link to="/find" className="view-all-link">View All &rarr;</Link>
        </div>
        
        <div className="featured-scroll-container">
          <div className="featured-row">
            {mockFoodListings.slice(0, 4).map(food => (
              <div key={food.id} className="featured-card-wrapper">
                <FoodCard food={food} onRequestClick={handleRequestClick} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Community Stories</h2>
          <p>Hear from the people making a difference every day.</p>
        </div>
        <Testimonials testimonials={mockTestimonials} />
      </section>

    </div>
  );
};

export default Home;
