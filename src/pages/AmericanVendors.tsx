import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AmericanVendors: React.FC = () => {
  const vendors = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <>
      <Header />
      <div className="american-vendors-page">
        <div className="hero-section">
          <div className="hero-content">
            <h1>American Vendors</h1>
            <p>Trusted partnerships with leading American construction vendors</p>
          </div>
        </div>
        
        <div className="vendors-container">
          <div className="vendors-grid">
            {vendors.map((num) => (
              <div key={num} className="vendor-card">
                <img 
                  src={`/American Vendors/${num}.png`} 
                  alt={`American Vendor ${num}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AmericanVendors;