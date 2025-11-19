import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const EstimatingServices: React.FC = () => {
  return (
    <>
      <Header />
      <main className="estimating-services-page">
        <div className="services-layout">
          <div className="services-sidebar">
            <h1>Exclusive Services</h1>
            <p>
              At ARKSimplific, we believe that our people make a difference. Our estimators are dedicated to providing bespoke preconstruction estimates tailored to your team's needs.
            </p>
            <p>
              Whether you're a General Contractor or a Sub Contractor, we offer best-in-class Standard Operating Procedures that we develop uniquely for your company. Our team operates on a well-defined set of estimation parameters, ensuring that we never miss a detail before submitting an estimate.
            </p>
            <p>
              We provide quality assistance at every stage of the process, from receiving a bid to managing all documents and updates on the bid cycle until the number is delivered to the client. With our help, you can trust that your estimate is accurate and comprehensive, giving you the confidence to make informed business decisions.
            </p>
          </div>
          
          <div className="services-content">
            <div className="service-item">
              <h2>ESTIMATING</h2>
              <p>
                At ARKSimplific, we are committed to delivering prompt and efficient preconstruction estimates to our clients. Our goal is to achieve a one-week lead time for all estimates, ensuring that you have ample time for revisions and planning your procurement strategy for each project.
              </p>
              <p>
                We understand the importance of timely and accurate estimates in the construction industry, and we strive to provide our clients with the best possible service. With our detailed estimates delivered one week before the due date, you can have peace of mind knowing that you have sufficient time to review and make informed decisions.
              </p>
            </div>
            
            <div className="service-item">
              <h2>BID MANAGEMENT</h2>
              <p>
                At ARKSimplific, we understand that managing multiple project invites can be overwhelming for our clients. That's why we have a team of experienced bid managers who can handle the influx of invites for you.
              </p>
              <p>
                You don't have to worry about missing out on potential projects or spending hours sorting through invites. Our team will keep track of all your invitations and provide you with a daily schedule of your lined-up invites. We will also provide you with a synopsis of each project, so you know which ones are the best fit for your business. With our bid management services, you can save time and focus on what you do best - managing and growing your construction business.
              </p>
            </div>
            
            <div className="service-item">
              <h2>DOCUMENT AND RFI MANAGEMENT</h2>
              <p>
                At ARKSimplific, we understand that managing project documents and RFIs can be time-consuming and tedious for our clients. That's why we have a dedicated team to help you streamline the process.
              </p>
              <p>
                Once you decide to bid on a project, we will immediately start working on the documents and organize them according to your preferences and genre of work. Our team will also provide you with a list of all the available and relevant documents, saving you time and effort in paperwork management.
              </p>
              <p>
                We will notify you of any discrepancies related to your scope and help you file RFIs with accurate detailing and a custom-made format for your team. With our document management and RFI services, you can focus on winning the project and leave the paperwork to us.
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

export default EstimatingServices;