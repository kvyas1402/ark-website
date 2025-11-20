import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface JobFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  applyingFor: string;
  startDate: string;
  currentCTC: string;
  expectedCTC: string;
}

const JobVacancy: React.FC = () => {
  const [formData, setFormData] = useState<JobFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    applyingFor: '',
    startDate: '',
    currentCTC: '',
    expectedCTC: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    document.title = 'Job Vacancy - ARK Global Services';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join ARK Global Services team. Apply for construction estimating and project management positions. We are looking for energetic and passionate professionals.');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        const response = await fetch('https://script.google.com/macros/s/AKfycbzKfnVj5yWSzK6f6g1QwgmUUZS2wFoupFgNBNliHk9yrOU4PmgX3A-0JDbRJE2-HV6a/exec', {
          method: 'POST',
          body: formDataToSend,
          mode: 'cors'
        });

        const resultText = await response.text();
        
        if (resultText && resultText.trim() === 'Success') {
          setResponseMessage({ type: 'success', text: 'Application Submitted! Thank you for applying. We will review your submission shortly.' });
          setFormData({ firstName: '', lastName: '', email: '', phone: '', applyingFor: '', startDate: '', currentCTC: '', expectedCTC: '' });
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
            <h1>Join Our Team</h1>
            <p>We're looking for energetic, passionate, and detail-oriented professionals who love to help.</p>
          </div>
        </div>
        
        <div className="contact-main">
          <div className="contact-form-section">
            <h2>Apply for a Position</h2>
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
                      placeholder="e.g., John"
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
                      placeholder="e.g., Johnson"
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
                      placeholder="name@email.com"
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
                      placeholder="+1 555-555-5555"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="applyingFor">
                      Applying For <span style={{ color: 'var(--primary-red)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="applyingFor"
                      name="applyingFor"
                      value={formData.applyingFor}
                      onChange={handleChange}
                      placeholder="e.g., Senior Developer, HR Manager"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="startDate">Available Start Date</label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="currentCTC">Current CTC (LPA)</label>
                    <input
                      type="text"
                      id="currentCTC"
                      name="currentCTC"
                      value={formData.currentCTC}
                      onChange={handleChange}
                      placeholder="e.g., 8.5"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="expectedCTC">
                      Expected CTC (LPA) <span style={{ color: 'var(--primary-red)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="expectedCTC"
                      name="expectedCTC"
                      value={formData.expectedCTC}
                      onChange={handleChange}
                      placeholder="e.g., 12.0"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                {isSubmitting && (
                  <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--primary-red)', fontWeight: '500' }}>
                    Submitting... Please wait.
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
            <h2>Why Join Us?</h2>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">⚡</div>
                <div>
                  <strong>Energetic Environment</strong>
                  <p>Work in a dynamic and fast-paced construction industry</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">❤️</div>
                <div>
                  <strong>Passionate Team</strong>
                  <p>Join a team that's passionate about construction excellence</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🎯</div>
                <div>
                  <strong>Detail Oriented</strong>
                  <p>Perfect for professionals who value precision and accuracy</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🤝</div>
                <div>
                  <strong>Love to Help</strong>
                  <p>Make a difference by helping clients achieve their construction goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobVacancy;