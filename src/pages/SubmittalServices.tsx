import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const SubmittalServices: React.FC = () => {
  return (
    <>
      <Header />
      <main className="estimating-services-page">
        <div className="services-layout">
          <div className="services-sidebar">
            <h1>Exclusive Services</h1>
            <p>
              Welcome to ARKSimplific, where we take pride in offering comprehensive solutions tailored to meet all your project needs. With a deep understanding of the door and hardware industry, we are committed to providing top-notch services that go beyond mere estimating.
            </p>
            <p>
              When your project is awarded, our dedication doesn't stop there; we seamlessly transition into project management and submittal and detailing solutions. Our team ensures that every little detail is taken care of, from handling product data and vendor responses to preparing cut sheets and door hardware specifications.
            </p>
            <p>
              With our expertise, you can rest assured that your submittal packages for all 100 projects each month will be delivered with precision and completeness. We are your one-stop-shop for project closeout and management, providing you with the peace of mind you deserve throughout the entire process. Partner with us, and let's make your projects a resounding success together.
            </p>
          </div>
          
          <div className="services-content">
            <div className="service-item">
              <h2>PREMIER ESTIMATING FOR DIVERSE CONSTRUCTION DIVISIONS</h2>
              <p>
                Welcome to ARKSimplific, a trusted partner for construction companies spanning various divisions of the US construction industry. Our unrivaled expertise and proven track record in handling over 100 projects monthly make us the go-to choice for commercial, residential, industrial, and infrastructure ventures.
              </p>
              <p>
                As your ultimate solution provider, we offer comprehensive project management and submittal services to ensure your project's success from start to finish.
              </p>
            </div>
            
            <div className="service-item">
              <h2>ENHANCED PROJECT MANAGEMENT THROUGH SUBMITTAL SOLUTIONS</h2>
              <p>
                Our commitment to delivering top-notch submittal solutions significantly enhances project management efficiency. With meticulous attention to detail, we expertly handle all documentation, including product data, vendor responses, and detailed cut sheets.
              </p>
              <p>
                These vital submittals foster effective communication and seamless coordination among stakeholders, enabling your construction team to make informed decisions and prevent costly delays. Our holistic approach streamlines workflows and empowers your team to focus on executing tasks with precision and accuracy.
              </p>
            </div>
            
            <div className="service-item">
              <h2>STREAMLINED WORKFLOWS: SUBMITTAL EXCELLENCE</h2>
              <p>
                When you choose us as your project management and estimating partner, you gain access to a complete solution that caters to all your project closeout needs. Our expertise in submittals acts as a critical tool, fostering enhanced communication, streamlined workflows, and better decision-making for your construction projects.
              </p>
              <p>
                From large-scale commercial endeavors to intricate residential ventures, our dedication to precision and accuracy remains unwavering. Let our experienced team be the backbone of your construction endeavors, providing the support and solutions you need to excel in this competitive industry.
              </p>
              <p>
                Partner with us today and experience the true power of efficient project management and submittal excellence.
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

export default SubmittalServices;