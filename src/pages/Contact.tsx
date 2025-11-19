import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="contact-hero">
            <div className="hero-content">
              <h1>Contact Us</h1>
              <p>Get in touch with ARKSimplifiq Private Limited</p>
            </div>
          </div>
          
          <div className="contact-main">
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What is this regarding?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us more about your project or inquiry..." required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
            
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:admin@arksimplifiq.com">admin@arksimplifiq.com</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+13123800712">+1 (312) 380-0712</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <p><a href="https://api.whatsapp.com/send/?phone=918799943887&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">+91 87999 43887</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>ARK SQUARE CONSTRUCTION SERVICES<br />2nd & 4th floor, Plot 481, opposite women's College,<br />New Nandanvan Colony, Nandanvan,<br />Nagpur, Maharashtra 440024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="map-section-full">
            <div className="map-header">
              <h2>Our Location</h2>
              <p>Visit us at our office in Nagpur, Maharashtra</p>
            </div>
            <div className="map-container-full">
              <iframe 
                src="https://maps.app.goo.gl/Gkrxjp4Zjz7zrsti9"
                width="100%" 
                height="400" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ARKSimplifiq Location"
              ></iframe>
            </div>
            <div className="map-footer">
              <a href="https://maps.app.goo.gl/Gkrxjp4Zjz7zrsti9" target="_blank" rel="noopener noreferrer" className="map-link-btn">
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Contact;