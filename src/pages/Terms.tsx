import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Terms: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="terms-header">
            <h1>Terms and Conditions</h1>
            <h2>ARKSimplifiq</h2>
          </div>
          
          <div className="terms-content">
            <div className="terms-section">
              <p className="intro-text">
                Welcome to ARK Simplifiq. We are a customer-centric construction service company dedicated to providing efficient solutions for the global construction industry. We are committed to delivering exceptional customer service, and our goal is to make the preconstruction process as seamless as possible for our clients.
              </p>
            </div>
            
            <div className="terms-section">
              <h3>Preconstruction Services</h3>
              <p>
                Our preconstruction services are designed to streamline the paperwork, documentation, scheduling, and estimating processes. Whether you are a General Contractor or a subcontractor, we have the best-in-class Standard Operating Procedures uniquely developed for your company. Our estimators pay meticulous attention to detail before submitting estimates, ensuring accuracy and reliability.
              </p>
            </div>
            
            <div className="terms-section">
              <h3>Transparency and Communication</h3>
              <p>
                We believe in transparency. Our clients can expect clear communication throughout the project lifecycle. From bid management to document updates, we keep you informed every step of the way.
              </p>
            </div>
            
            <div className="terms-section">
              <h3>Estimating Software</h3>
              <p>
                We utilize industry-leading estimating software, including Bluebeam Revu, On Screen Takeoff, Comsense, Emullion, McCormick, Autodesk AutoCAD, and Navisworks. Our goal is to provide accurate estimates that empower your construction projects.
              </p>
            </div>
            
            <div className="terms-section">
              <h3>Contact Us</h3>
              <p>
                Have questions or need an estimate?<br />
                Get in touch with us today! We're here to help you construct the world as we see it.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Terms;