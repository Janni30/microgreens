import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.css';

// --- Helper Component for the Animated Number ---
const Counter = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  // Using a ref to ensure the animation runs only once per session if desired
  const countRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      // Calculate current percentage (0 to 1)
      const percentage = Math.min(progress / duration, 1);
      
      // Update count based on percentage
      setCount(Math.floor(percentage * end));

      if (progress < duration) {
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    // Start animation
    animationFrameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// --- Main Stats Section Component ---
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll Detection Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Trigger only once when it comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const statsData = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 11v 8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3a4 4 0 0 0 4-4V6a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1-2 2h-7a3 3 0 0 1-3-3" />
        </svg>
      ),
      value: 196,
      suffix: 'K',
      title: 'Expert farmers',
      desc: 'Expert farmers worldwide work with us today!'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 10a6 6 0 0 0-6-6H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5" />
          <path d="M8 14h8" />
          <path d="M8 18h8" />
        </svg>
      ),
      value: 58,
      suffix: 'M',
      title: 'Seeds Delivered',
      desc: 'Plants and seeds delivered annually by us!'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22h20" />
          <path d="M12 2v8" />
          <path d="M12 10l4-4" />
          <path d="M12 10l-4-4" />
          <path d="M7 22l1-4a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4l1 4" />
        </svg>
      ),
      value: 98,
      suffix: 'K',
      title: 'Acres Grown',
      desc: 'Acres of growing space we plant worldwide!'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      value: 75,
      suffix: '+',
      title: 'Years Experience',
      desc: 'Years of farming with decades of work!'
    }
  ];

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon-wrapper">
              {stat.icon}
            </div>
            
            <h2 className="stat-number">
              {isVisible ? (
                <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
              ) : (
                `0${stat.suffix}`
              )}
            </h2>
            
            <h4 className="stat-title">{stat.title}</h4>
            <p className="stat-desc">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;