import React from 'react'

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2>ARKSimplific Private Limited</h2>
        <p>
          ARKSimplific is a customer-centric construction service company dedicated to providing efficient solutions for the global construction industry. Our team is committed to delivering exceptional quality outputs that save time and cost for our clients. We believe in streamlining the paperwork, documentation, scheduling, and estimating processes, so our clients can focus on their construction projects. Our comprehensive project management approach offers a wide range of services to meet our client's needs. Contact us today to learn more about our services and receive a customized estimate.
        </p>
        <button className="cta-button" onClick={() => window.location.href = '#contact'}>
          Get in touch
        </button>
      </div>
    </section>
  )
}

export default About