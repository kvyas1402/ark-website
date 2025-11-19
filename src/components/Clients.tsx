import React, { useState, useEffect } from 'react'

interface Client {
  id: number
  name: string
  logo: string
  industry: string
}

const Clients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Sample client data - replace with actual client logos
  const clients: Client[] = [
    { id: 1, name: 'Construction Corp', logo: '🏗️', industry: 'Construction' },
    { id: 2, name: 'BuildTech Solutions', logo: '🏢', industry: 'Real Estate' },
    { id: 3, name: 'Metro Contractors', logo: '🏭', industry: 'Infrastructure' },
    { id: 4, name: 'Urban Developers', logo: '🏘️', industry: 'Development' },
    { id: 5, name: 'Steel Works Inc', logo: '⚙️', industry: 'Manufacturing' },
    { id: 6, name: 'Green Building Co', logo: '🌱', industry: 'Sustainable' },
    { id: 7, name: 'Highway Systems', logo: '🛣️', industry: 'Transportation' },
    { id: 8, name: 'Tower Builders', logo: '🏗️', industry: 'High-rise' }
  ]

  const itemsPerSlide = 4
  const totalSlides = Math.ceil(clients.length / itemsPerSlide)

  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [totalSlides, isAutoPlay])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  const getCurrentClients = () => {
    const start = currentIndex * itemsPerSlide
    return clients.slice(start, start + itemsPerSlide)
  }

  return (
    <section className="clients-section" id="clients">
      <div className="container">
        <h2>Clients we have worked with</h2>
        <div className="clients-carousel">
          <button className="carousel-btn" onClick={prevSlide}>
            ‹
          </button>
          
          <div className="clients-display">
            {getCurrentClients().map((client) => (
              <div key={client.id} className="client-item">
                <div className="client-logo-container">
                  <div className="client-logo-emoji">{client.logo}</div>
                </div>
                <div className="client-name">{client.name}</div>
                <div className="client-industry">{client.industry}</div>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn" onClick={nextSlide}>
            ›
          </button>
        </div>
        
        <div className="clients-nav">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`client-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        
        <div className="clients-auto-play-indicator">
          <div className={`clients-play-bar ${isAutoPlay ? 'active' : ''}`}></div>
        </div>
      </div>
    </section>
  )
}

export default Clients