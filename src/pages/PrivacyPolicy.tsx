import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="privacy-header">
            <h1>Privacy Policy</h1>
            <h2>ARKSimplifiq</h2>
          </div>
          
          <div className="privacy-content">
            <div className="privacy-section">
              <p className="intro-text">
                ARKSimplifiq Private Limited is committed to protecting the privacy of our customers and users of our website. This privacy policy sets out our practices for collecting, using and disclosing personal data.
              </p>
            </div>
            
            <div className="privacy-section">
              <h3>Collection of Personal Data</h3>
              <p>
                We collect personal data when you use our website or when you sign up for our services. The personal data we collect may include your name, email address, postal address, and telephone number.
              </p>
            </div>
            
            <div className="privacy-section">
              <h3>Use of Personal Data</h3>
              <p>We use personal data for the following purposes:</p>
              <ul>
                <li>To provide you with the services you have requested</li>
                <li>To communicate with you about our services and promotions</li>
                <li>To improve our website and services</li>
                <li>To comply with legal requirements</li>
              </ul>
            </div>
            
            <div className="privacy-section">
              <h3>Disclosure of Personal Data</h3>
              <p>
                We may disclose your data to third-party service providers who assist us in providing our services. We take reasonable steps to ensure that these service providers are bound by obligations of confidentiality and data protection.
              </p>
            </div>
            
            <div className="privacy-section">
              <h3>Data Security</h3>
              <p>
                We take appropriate technical and organisational measures to protect personal data against unauthorised access, disclosure, alteration, or destruction. However, no data transmission over the Internet or data storage system can be guaranteed to be 100% secure.
              </p>
            </div>
            
            <div className="privacy-section">
              <h3>Access to Personal Data</h3>
              <p>
                You have the right to access the personal data we hold about you and to request that we correct or delete it. If you would like to exercise this right, please contact us at <a href="mailto:admin@arksimplifiq.com">admin@arksimplifiq.com</a>
              </p>
            </div>
            
            <div className="privacy-section">
              <h3>Changes to Privacy Policy</h3>
              <p>
                We may update this privacy policy from time to time. We will notify you if we make any material changes by posting the updated privacy policy on our website.
              </p>
            </div>
            
            <div className="privacy-section">
              <h3>Contact Information</h3>
              <p>
                If you have any questions about this privacy policy or our practices for collecting, using, and disclosing personal data, please contact us at: <a href="mailto:admin@arksimplifiq.com">admin@arksimplifiq.com</a>
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

export default PrivacyPolicy;