import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import InteractiveEffects from '../components/InteractiveEffects';

const Home: React.FC = () => {
  const [counters, setCounters] = useState({ cost: 0, projects: 0, hours: 0 });
  const [currentService, setCurrentService] = useState(0);
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const counterRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "ESTIMATING",
      description: "We believe in great people and our estimators are dedicated to cultivating a bespoke standard of preconstruction estimates for your team. Whether you are a General Contractor or a Sub Contractor, we have the best-in-class Standard Operating Procedures that we develop uniquely for your company, all our team operates on a well-written set of estimation parameters cultivated so that we never miss a detail before submitting an estimate. We provide quality assistance on all stages from receiving a bid, to managing all documents and updates on the bid cycle till the number is delivered to the clients."
    },
    {
      title: "BID MANAGEMENT",
      description: "Don't worry about getting hundreds of invites on a daily basis, our team of bid managers will catch those invites for you, and when you reach the office we will keep a daily schedule of your lined up invites and give you a synopsis of what is the next best project for you."
    },
    {
      title: "DOCUMENT AND RFI MANAGEMENT",
      description: "Once you have decided to bid on a project, we will start operating on the documents of that project. So, you will get a list of all documents that are available, and all that is useful for you, systematically arranged per your preference and genre of work. This will help you save time in paperwork management and sorting out relevant data. We will notify you of all discrepancies related to your scope and help you file those important RFIs with accurate detailing and a custom-made RFI format for your team."
    },
    {
      title: "Time Saving",
      description: "We will continuously work at achieving a one-week lead time to all your estimates, we will be ready with the detailed estimate one week before the due date. We give a strong lead time so that you get enough time for revisions and planning the procurement strategy for every individual project."
    }
  ];

  const clients = [
    { name: "ArchMills", logo: "/ArchMills.png" },
    { name: "Beacon Commercial Door & Lock", logo: "/Beacon Commercial Door & Lock.png" },
    { name: "C&G Construction Supply", logo: "/C&G Construction Supply.png" },
    { name: "CHE Mid-Atlantic", logo: "/CHE Mid-Atlantic.png" },
    { name: "Doorwayz Unlimited", logo: "/Doorwayz Unlimited.png" },
    { name: "DS Doors", logo: "/DS Doors.png" },
    { name: "Haynes Construction", logo: "/Haynes Construction.png" },
    { name: "Newport", logo: "/Newport.png" },
    { name: "NYC Door", logo: "/NYC Door.png" },
    { name: "Rapid Door & Trim Crop", logo: "/Rapid Door & Trim Crop.png" },
    { name: "Tech Build", logo: "/Tech Build.png" }
  ];

  const software = [
    "Bluebeam Revu", "On Screen Takeoff", "Comsense", "Emullion", 
    "McCormick", "Autodesk", "AutoCAD", "Navisworks", "SFH Software for Hardware"
  ];

  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsCounterVisible(true);
          setHasAnimated(true);
          
          setTimeout(() => {
            const interval = setInterval(() => {
              setCounters(prev => ({
                cost: prev.cost < 100 ? prev.cost + 3 : 100,
                projects: prev.projects < 3000 ? prev.projects + 100 : 3000,
                hours: prev.hours < 12000 ? prev.hours + 400 : 12000
              }));
            }, 50);
            
            setTimeout(() => clearInterval(interval), 3000);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      counterObserver.observe(counterRef.current);
    }
    
    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    return () => {
      const counter = counterRef.current;
      const hero = heroRef.current;
      if (counter) {
        counterObserver.unobserve(counter);
      }
      if (hero) {
        heroObserver.unobserve(hero);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % services.length);
    }, 5000);

    return () => {
      clearInterval(serviceInterval);
    };
  }, [services.length]);

  return (
    <>
      <Header />
      
      <section className={`hero ${!isHeroInView ? 'scrolled' : ''}`} ref={heroRef}>
        <div className="hero-video-container">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/ARKVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <h2>ARKSimplifiq Private Limited</h2>
          </div>
          <div className="about-content">
            <p>
              ARKSimplifiq is a customer-centric construction service company dedicated to providing efficient solutions for the global construction industry. Our team is committed to delivering exceptional quality outputs that save time and cost for our clients. We believe in streamlining the paperwork, documentation, scheduling, and estimating processes, so our clients can focus on their construction projects. Our comprehensive project management approach offers a wide range of services to meet our client's needs. Contact us today to learn more about our services and receive a customized estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="counter-section" ref={counterRef}>
        <div className="container">
          <div className="counter-grid">
            <div className={`counter-item ${isCounterVisible ? 'animate' : ''}`}>
              <div className="counter-number">${counters.cost}M+</div>
              <div className="counter-label">Estimated Project Cost</div>
            </div>
            <div className={`counter-item ${isCounterVisible ? 'animate' : ''}`}>
              <div className="counter-number">{counters.projects.toLocaleString()}+</div>
              <div className="counter-label">Projects Completed</div>
            </div>
            <div className={`counter-item ${isCounterVisible ? 'animate' : ''}`}>
              <div className="counter-number">{counters.hours.toLocaleString()}+</div>
              <div className="counter-label">Man Hours Saved</div>
            </div>
          </div>
        </div>
      </section>

      <section className="software-section">
        <div className="container">
          <h2>Estimating Software</h2>
          <div className="software-grid">
            <div className="software-list">
              <h3>Estimating Software</h3>
              <ul>
                {software.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="software-logo">
              <img src="/ARK.png" alt="ARK Logo" />
            </div>
            <div className="software-image">
              <img src="/Rafty.avif" alt="Construction" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-slider">
            <div className="service-content">
              <h3>{services[currentService].title}</h3>
              <p>{services[currentService].description}</p>
            </div>
            <div className="service-dots">
              {services.map((_, index) => (
                <button 
                  key={index} 
                  className={`dot ${index === currentService ? 'active' : ''}`}
                  onClick={() => setCurrentService(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="container">
          <h2>Clients we have worked with</h2>
          <div className="clients-display">
          <div className="clients-scroll">
            {clients.map((client, index) => (
              <div key={index} className="client-item">
                <img src={client.logo} alt={client.name} className="client-logo" />
                <div className="client-name">{client.name}</div>
              </div>
            ))}
            {clients.map((client, index) => (
              <div key={`duplicate-${index}`} className="client-item">
                <img src={client.logo} alt={client.name} className="client-logo" />
                <div className="client-name">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <InteractiveEffects />
    </>
  );
};

export default Home;