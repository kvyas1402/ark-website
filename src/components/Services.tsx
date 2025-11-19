import React, { useState, useEffect } from 'react'

interface Service {
  title: string
  icon: string
  description: string
  features: string[]
  benefits: string[]
}

const Services: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const services: Service[] = [
    {
      title: 'ESTIMATING SERVICES',
      icon: '📊',
      description: 'Professional preconstruction estimates with bespoke standards for your team.',
      features: [
        'Best-in-class Standard Operating Procedures',
        'Unique estimation parameters for your company',
        'Complete bid cycle management',
        'Quality assistance at all stages'
      ],
      benefits: [
        'Never miss a detail',
        'Dedicated estimators',
        'Tailored for GCs & Subcontractors',
        'End-to-end support'
      ]
    },
    {
      title: 'BID MANAGEMENT',
      icon: '📋',
      description: 'Comprehensive bid invitation management and project selection assistance.',
      features: [
        'Daily bid invite monitoring',
        'Organized project schedules',
        'Project synopsis and analysis',
        'Best project recommendations'
      ],
      benefits: [
        'No missed opportunities',
        'Streamlined workflow',
        'Strategic project selection',
        'Time-efficient process'
      ]
    },
    {
      title: 'DOCUMENT & RFI MANAGEMENT',
      icon: '📁',
      description: 'Systematic document organization and professional RFI handling.',
      features: [
        'Complete document organization',
        'Scope-specific arrangement',
        'Discrepancy identification',
        'Custom RFI formatting'
      ],
      benefits: [
        'Save time on paperwork',
        'Organized data access',
        'Accurate RFI filing',
        'Reduced errors'
      ]
    },
    {
      title: 'TIME OPTIMIZATION',
      icon: '⏰',
      description: 'Fast turnaround with one-week lead time for all estimates.',
      features: [
        'One-week lead time guarantee',
        'Early estimate delivery',
        'Revision time allocation',
        'Procurement planning support'
      ],
      benefits: [
        'More time for revisions',
        'Better planning opportunity',
        'Competitive advantage',
        'Stress-free deadlines'
      ]
    }
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [services.length, isAutoPlay])

  const changeSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2>Our Professional Services</h2>
        <div className="services-slider-container">
          <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
            ‹
          </button>
          
          <div className="services-slider">
            {services.map((service, index) => (
              <div key={index} className={`service-slide ${index === currentSlide ? 'active' : ''}`}>
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-content">
                  <div className="service-features">
                    <h4>Key Features</h4>
                    <ul>
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-benefits">
                    <h4>Benefits</h4>
                    <ul>
                      {service.benefits.map((benefit, bIndex) => (
                        <li key={bIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
            ›
          </button>
        </div>
        
        <div className="services-nav">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
              title={service.title}
            >
              <span className="nav-icon">{service.icon}</span>
              <span className="nav-label">{service.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
        
        <div className="auto-play-indicator">
          <div className={`play-bar ${isAutoPlay ? 'active' : ''}`}></div>
        </div>
      </div>
    </section>
  )
}

export default Services