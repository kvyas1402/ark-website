import React, { useEffect } from 'react';

const InteractiveEffects: React.FC = () => {
  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroVideo = document.querySelector('.hero-video') as HTMLElement;
      if (heroVideo) {
        heroVideo.style.transform = `translate(-50%, -50%) scale(${1 + scrolled * 0.0005})`;
      }
    };

    // Mouse follow effect for software cards
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.software-item');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          (card as HTMLElement).style.transform = `
            translateY(-15px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            scale(1.02)
          `;
        }
      });
    };

    // Reset card transforms when mouse leaves
    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('.software-item');
      cards.forEach((card) => {
        (card as HTMLElement).style.transform = '';
      });
    };

    // Add ripple effect to buttons
    const addRippleEffect = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const button = mouseEvent.currentTarget as HTMLElement;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = mouseEvent.clientX - rect.left - size / 2;
      const y = mouseEvent.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;
      
      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    // Magnetic effect for client logos
    const addMagneticEffect = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const logo = mouseEvent.currentTarget as HTMLElement;
      const rect = logo.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      
      logo.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.15) rotate(5deg)`;
    };

    const resetMagneticEffect = (e: Event) => {
      const logo = e.currentTarget as HTMLElement;
      logo.style.transform = '';
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add ripple to buttons
    const buttons = document.querySelectorAll('.hero-button, .cta-button, .carousel-btn');
    buttons.forEach(button => {
      button.addEventListener('click', addRippleEffect);
    });

    // Add magnetic effect to client logos
    const clientLogos = document.querySelectorAll('.client-logo');
    clientLogos.forEach(logo => {
      logo.addEventListener('mousemove', addMagneticEffect);
      logo.addEventListener('mouseleave', resetMagneticEffect);
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      .software-item {
        transform-style: preserve-3d;
        perspective: 1000px;
      }
      
      .counter-item {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .counter-item:hover {
        transform-style: preserve-3d;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      buttons.forEach(button => {
        button.removeEventListener('click', addRippleEffect);
      });
      
      clientLogos.forEach(logo => {
        logo.removeEventListener('mousemove', addMagneticEffect);
        logo.removeEventListener('mouseleave', resetMagneticEffect);
      });
      
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default InteractiveEffects;