import React from 'react';

const JobApplicationForm: React.FC = () => {
  return (
    <div className="job-form-container">
      <div className="job-form-left">
        <h2>If you are</h2>
        <div className="qualities-list">
          <div className="quality-item">Energetic</div>
          <div className="quality-item">Passionate</div>
          <div className="quality-item">Detail Oriented</div>
          <div className="quality-item">And love to help</div>
        </div>
      </div>
      
      <div className="job-form-right">
        <h1>We are looking for you</h1>
        
        <form className="application-form">
          <div className="form-group full-width">
            <label>First Name *</label>
            <input type="text" placeholder="e.g., John" required />
          </div>
          
          <div className="form-group full-width">
            <label>Last Name *</label>
            <input type="text" placeholder="e.g., Johnson" required />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="e.g., name@email.com" required />
            </div>
            <div className="form-group">
              <label>Phone *</label>
              <input type="tel" placeholder="e.g., +1 555-555-555" required />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Applying for *</label>
              <input type="text" placeholder="Add answer here" required />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input type="text" placeholder="Choose a date" />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Current CTC</label>
              <input type="text" placeholder="Add answer here" />
            </div>
            <div className="form-group">
              <label>Expected CTC</label>
              <input type="text" placeholder="Add answer here" />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Resume *</label>
              <input type="text" placeholder="Resume Url" required />
            </div>
            <div className="form-group">
              <label>CV</label>
              <input type="text" placeholder="CV Url" />
            </div>
          </div>
          
          <button type="submit" className="form-submit-btn">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;