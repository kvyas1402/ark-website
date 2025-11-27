import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    document.title = 'Contact Us - ARK Global Services';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact ARK Global Services for professional construction estimating and project management services. Get in touch today.');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    const maxRetries = 3;
    let currentRetry = 0;

    const makeRequest = async (): Promise<void> => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxwB5x10Ueh-nlAfNZ7tgQCqagCLBbce0L8mKZGg4ki_324sXive709zg3K4BskGCYL/exec', {
          method: 'POST',
          body: formDataToSend,
          mode: 'cors'
        });

        const resultText = await response.text();
        
        if (resultText && resultText.trim() === 'Success') {
          setResponseMessage({ type: 'success', text: 'Success! Your message has been sent and recorded. We will be in touch soon.' });
          setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
          setShowForm(false);
        } else if (resultText.includes('Error: Sheet not found')) {
          throw new Error('Apps Script Error: Sheet not found. Please run setup() and Redeploy the script.');
        } else {
          throw new Error(`Submission Failed: ${resultText || 'Unknown error occurred.'}`);
        }
      } catch (error) {
        currentRetry++;
        if (currentRetry < maxRetries) {
          const delay = Math.pow(2, currentRetry) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          return makeRequest();
        } else {
          setResponseMessage({ 
            type: 'error', 
            text: `Error! Submission failed after multiple retries. Details: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again later.` 
          });
        }
      } finally {
        if (currentRetry >= maxRetries || responseMessage?.type === 'success') {
          setIsSubmitting(false);
        }
      }
    };

    await makeRequest();
  };

  return (
    <>
      <Header />
      <div className="page-content">
        <div className="contact-hero">
          <div className="hero-content">
            <h1>Contact ARK Global Services</h1>
            <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img 
            src="https://drive.google.com/uc?export=view&id=1UZRgviGgUWMoUb7kB" 
            alt="ARK Office Location" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}
          />
        </div>
        
        <div className="contact-main">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>

            {showForm && (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      First Name <span style={{ color: 'var(--primary-red)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">
                      Last Name <span style={{ color: 'var(--primary-red)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span style={{ color: 'var(--primary-red)' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span style={{ color: 'var(--primary-red)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message <span style={{ color: 'var(--primary-red)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {isSubmitting && (
                  <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--primary-red)', fontWeight: '500' }}>
                    Sending... Please wait.
                  </div>
                )}
              </form>
            )}
          
            {responseMessage && (
              <div className={`response-message ${
                responseMessage.type === 'success' ? 'success' : 'error'
              }`}>
                <span style={{ fontWeight: 'bold' }}>
                  {responseMessage.type === 'success' ? 'Success!' : 'Error!'}
                </span> {responseMessage.text}
              </div>
            )}
          </div>
          
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:admin@arksimplifiq.com">admin@arksimplifiq.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:+13123800712">+1 (312) 380-0712</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div>
                  <strong>WhatsApp</strong>
                  <p><a href="https://api.whatsapp.com/send/?phone=918799943887" target="_blank" rel="noopener noreferrer">+91 87999 43887</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
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
            <img 
              src="https://drive.google.com/uc?export=view&id=1UZRgviGgUWMoUb7kB" 
              alt="ARK Square Construction Services Location" 
              style={{ width: '100%', height: '400px', objectFit: 'cover', border: 0 }}
            />
          </div>
          <div className="map-footer">
            <a href="https://maps.app.goo.gl/3pVAnNco31qSdz8A6" target="_blank" rel="noopener noreferrer" className="map-link-btn">
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;