import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="about-page-content">
            <h1>About Us</h1>
            <h2>ARKSimplifiq Private Limited</h2>
            
            <div className="about-description">
              <p>
                At ARKSimplifiq, we are a customer-centric construction service company focused on providing efficient solutions to the global construction industry. We aim to offer time and cost-saving solutions that allow our clients to expand their businesses and continue constructing the world as we see it.
              </p>
              <p>
                Our team is dedicated to providing thorough and brilliant quality outputs to our clients, allowing them to save time on cumbersome preconstruction processes such as paperwork, documentation, scheduling, and estimating. With our help, clients can focus on their construction projects without worrying about the administrative tasks that come with them.
              </p>
              <p>
                We are committed to delivering exceptional customer service, and our goal is to make the preconstruction process as seamless as possible for our clients. Contact us today to learn more about our services and how we can help you.
              </p>
            </div>
            
            <div className="vision-purpose">
              <div className="vision-section">
                <h3>Our Vision:</h3>
                <p>
                  Our vision is to become the leading virtual contributors in preconstruction, providing innovative solutions to clients worldwide.
                </p>
              </div>
              
              <div className="purpose-section">
                <h3>Our Purpose:</h3>
                <p>
                  At the core of our purpose is a commitment to delivering services that meet globally accepted standards while remaining affordable for our customers. We strive to provide efficient solutions that enable our clients to achieve their goals and expand their businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default About;