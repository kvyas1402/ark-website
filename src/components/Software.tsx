import React from 'react'

const Software: React.FC = () => {
  const softwareList = [
    'Bluebeam Revu',
    'On Screen Takeoff',
    'Comsense',
    'Emullion',
    'McCormick',
    'Autodesk',
    'Autocad',
    'Naviswork'
  ]

  return (
    <section className="software-section">
      <div className="container">
        <div className="software-grid">
          <div className="software-list">
            <h3>Estimating Software</h3>
            <ul>
              {softwareList.map((software, index) => (
                <li key={index}>{software}</li>
              ))}
            </ul>
          </div>
          <div className="software-logo">
            <img src="/ARK.png" alt="ARK Logo" />
          </div>
          <div className="software-image">
            <img src="/Rafty.avif" alt="Rafty" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Software