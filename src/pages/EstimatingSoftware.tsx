import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const EstimatingSoftware: React.FC = () => {
  const softwareTools = [
    {
      name: 'Bluebeam Revu',
      description: 'Advanced PDF markup and collaboration platform for construction professionals.'
    },
    {
      name: 'On Screen Takeoff',
      description: 'Digital takeoff and estimating software for accurate quantity measurements.'
    },
    {
      name: 'Comsense',
      description: 'Comprehensive construction management and estimating solution.'
    },
    {
      name: 'Emullion',
      description: 'Specialized estimating software for detailed construction analysis.'
    },
    {
      name: 'McCormick',
      description: 'Industry-standard estimating and project management tools.'
    },
    {
      name: 'Autodesk',
      description: 'Complete suite of design and construction software solutions.'
    },
    {
      name: 'AutoCAD',
      description: 'Professional computer-aided design and drafting software.'
    },
    {
      name: 'Navisworks',
      description: '3D model review and coordination software for construction projects.'
    }
  ];

  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="software-page-header">
            <h1>Professional Estimating Software</h1>
            <p className="page-subtitle">
              We leverage cutting-edge technology and industry-leading software to deliver precise, 
              reliable construction estimates that help you make informed decisions.
            </p>
          </div>
          
          <div className="software-tools-grid">
            {softwareTools.map((tool, index) => (
              <div key={index} className="software-tool-card">
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
          
          <div className="software-benefits">
            <h2>Why We Use Professional Software</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h4>Accuracy</h4>
                <p>Precise measurements and calculations reduce errors and ensure reliable estimates.</p>
              </div>
              <div className="benefit-item">
                <h4>Efficiency</h4>
                <p>Streamlined workflows and automated processes deliver faster turnaround times.</p>
              </div>
              <div className="benefit-item">
                <h4>Collaboration</h4>
                <p>Real-time sharing and markup capabilities enhance team coordination.</p>
              </div>
              <div className="benefit-item">
                <h4>Integration</h4>
                <p>Seamless data exchange between different platforms and project stakeholders.</p>
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

export default EstimatingSoftware;