import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const JobVacancy: React.FC = () => {
  return (
    <>
      <Header />
      <main className="job-vacancy-redesign">
        <div className="job-container">
          <div className="job-left">
            <h2>If you are</h2>
            <div className="underline"></div>
            <div className="qualities">
              <div className="quality">Energetic</div>
              <div className="quality">Passionate</div>
              <div className="quality">Detail Oriented</div>
              <div className="quality">And love to help</div>
            </div>
          </div>
          
          <div className="job-right">
            <h1>We are looking for you</h1>
            
            <form className="job-form">
              <div className="field-group">
                <label>First Name *</label>
                <input type="text" placeholder="e.g., John" required />
              </div>
              
              <div className="field-group">
                <label>Last Name *</label>
                <input type="text" placeholder="e.g., Johnson" required />
              </div>
              
              <div className="field-row">
                <div className="field-group">
                  <label>Email *</label>
                  <input type="email" placeholder="e.g., name@email.com" required />
                </div>
                <div className="field-group">
                  <label>Phone *</label>
                  <input type="tel" placeholder="e.g., +1 555-555-555" required />
                </div>
              </div>
              
              <div className="field-row">
                <div className="field-group">
                  <label>Applying for *</label>
                  <input type="text" placeholder="Add answer here" required />
                </div>
                <div className="field-group">
                  <label>Start Date</label>
                  <input type="text" placeholder="Choose a date" />
                </div>
              </div>
              
              <div className="field-row">
                <div className="field-group">
                  <label>Current CTC</label>
                  <input type="text" placeholder="Add answer here" />
                </div>
                <div className="field-group">
                  <label>Expected CTC</label>
                  <input type="text" placeholder="Add answer here" />
                </div>
              </div>
              
              <div className="field-row">
                <div className="field-group">
                  <label>Resume *</label>
                  <input type="text" placeholder="Resume Url" required />
                </div>
                <div className="field-group">
                  <label>CV</label>
                  <input type="text" placeholder="CV Url" />
                </div>
              </div>
              
              <button type="submit" className="submit-button">
                Apply
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default JobVacancy;