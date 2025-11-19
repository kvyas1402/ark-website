import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const RefundPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="refund-header">
            <h1>Cancellation and Refund Policy</h1>
            <h2>ARKSimplifiq Private Limited</h2>
          </div>
          
          <div className="refund-content">
            <div className="refund-section">
              <p className="intro-text">
                At ARKSimplifiq Private Limited, we value our clients and strive to provide exceptional preconstruction services. If you need to cancel a service or request a refund, please review the following guidelines:
              </p>
            </div>
            
            <div className="refund-section">
              <h3>Service Cancellation</h3>
              <p>
                We understand that circumstances may arise where clients wish to cancel our preconstruction services. Requests for cancellation are subject to the terms outlined in this policy.
              </p>
              <p>
                To initiate a cancellation, clients must submit a formal Cancellation Application to our Accounts Department at <a href="mailto:accounts@arksimplifiq.com">accounts@arksimplifiq.com</a> within 7 business days from the date of service initiation.
              </p>
            </div>
            
            <div className="refund-section">
              <h3>Review and Confirmation</h3>
              <p>
                Our team will review the cancellation request and assess its eligibility based on the terms outlined in this policy.
              </p>
              <p>
                Clients will receive a confirmation or denial of their cancellation request within 7 business days.
              </p>
            </div>
            
            <div className="refund-section">
              <h3>Return of Documents</h3>
              <p>
                If applicable, clients may be required to return any provided documents or materials related to the service within a specified timeframe as part of the cancellation process.
              </p>
            </div>
            
            <div className="refund-section">
              <h3>Refund Processing Time</h3>
              <p>
                If the cancellation request is approved, we will initiate the refund process.
              </p>
              <p>
                Refunds will be processed using the original payment method, and clients will be notified of the refund approval.
              </p>
              <p>
                Processing times may vary depending on the payment method and financial institutions involved.
              </p>
            </div>
            
            <div className="refund-section">
              <h3>Important Notes</h3>
              <ul>
                <li>Refunds are subject to the terms and conditions outlined in the service agreement and this policy.</li>
                <li>We reserve the right to deny a cancellation request if it does not meet the specified criteria.</li>
                <li>Refunds will not be provided for services completed outside the cancellation period unless required by applicable law.</li>
                <li>This Cancellation and Refund Policy is subject to change without notice. Please review it periodically for updates.</li>
              </ul>
            </div>
            
            <div className="refund-section">
              <p>
                If you have any questions or concerns, feel free to contact us at <a href="mailto:accounts@arksimplifiq.com">accounts@arksimplifiq.com</a>
              </p>
              <p className="thank-you">
                Thank you for choosing ARKSimplifiq Private Limited!
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

export default RefundPolicy;