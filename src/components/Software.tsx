import React from 'react'

const Software: React.FC = () => {
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
  ]

  return (
    <section className="software-section">
      <div className="software-content">
        <div className="software-header">
          <h2>Professional Estimating Software</h2>
          <p className="software-description">
            We leverage cutting-edge technology and industry-leading software to deliver precise, 
            reliable construction estimates that help you make informed decisions.
          </p>
        </div>
        
        <div className="software-grid">
          {softwareTools.map((tool, index) => (
            <div key={index} className="software-item">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bottom-section">
          <div className="software-image">
            <img src="/Rafty.avif" alt="Professional Estimator" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Software