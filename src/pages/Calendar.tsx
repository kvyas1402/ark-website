import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import '../calendar.css';

const Calendar: React.FC = () => {
  return (
    <>
      <Header />
      <div className="calendar-page-new">
        <div className="calendar-container-new">
          <div className="calendar-header-new">
            <h1>Schedule Your Consultation</h1>
            <p>Book a meeting with Rohit Purohit, Managing Director at ARK Simplifiq</p>
          </div>
          
          <div className="calendar-wrapper-new">
            <div className="calendar-frame-new">
              <iframe
                src="https://app.usemotion.com/meet/rohit-purohit/meet"
                className="calendar-iframe"
                title="Schedule Meeting with Rohit Purohit"
              />
            </div>
            

          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Calendar;