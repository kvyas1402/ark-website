import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import '../shared/styles.css';

const ProEstimate: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const divisions = [
    { id: 'div1', title: 'Division 1 - Site Work' },
    { id: 'div2', title: 'Division 2 - Existing Conditions' },
    { id: 'div3', title: 'Division 3 - Concrete' },
    { id: 'div4', title: 'Division 4 - Masonry' },
    { id: 'div5', title: 'Division 5 - Metals' },
    { id: 'div6', title: 'Division 6 - Wood, Plastics, and Composites' },
    { id: 'div7', title: 'Division 7 - Thermal and Moisture Protection' },
    { id: 'div8', title: 'Division 8 - Openings' },
    { id: 'div9', title: 'Division 9 - Finishes' },
    { id: 'div10', title: 'Division 10 - Specialties' },
    { id: 'div11', title: 'Division 11 - Equipment' },
    { id: 'div12', title: 'Division 12 - Furnishings' },
    { id: 'div13', title: 'Division 13 - Special Construction' },
    { id: 'div14', title: 'Division 14 - Conveying Equipment' },
    { id: 'div21', title: 'Division 21 - Fire Suppression' },
    { id: 'div22', title: 'Division 22 - Plumbing' },
    { id: 'div23', title: 'Division 23 - HVAC' },
    { id: 'div25', title: 'Division 25 - Integrated Automation' },
    { id: 'div26', title: 'Division 26 - Electrical' },
    { id: 'div27', title: 'Division 27 - Communications' },
    { id: 'div28', title: 'Division 28 - Electronic Safety and Security' },
    { id: 'div31', title: 'Division 31 - Earthwork' },
    { id: 'div32', title: 'Division 32 - Exterior Improvements' },
    { id: 'div33', title: 'Division 33 - Utilities' },
    { id: 'div34', title: 'Division 34 - Transportation' },
    { id: 'div35', title: 'Division 35 - Waterway and Marine Construction' },
    { id: 'div40', title: 'Division 40 - Process Interconnections' },
    { id: 'div41', title: 'Division 41 - Material Processing and Handling Equipment' },
    { id: 'div42', title: 'Division 42 - Process Heating, Cooling, and Drying Equipment' },
    { id: 'div43', title: 'Division 43 - Process Gas and Liquid Handling' },
    { id: 'div44', title: 'Division 44 - Pollution and Waste Control Equipment' },
    { id: 'div45', title: 'Division 45 - Industry-Specific Manufacturing Equipment' },
    { id: 'div46', title: 'Division 46 - Water and Wastewater Equipment' },
    { id: 'div48', title: 'Division 48 - Electrical Power Generation' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <Header />
      <main className="proestimate-page">
        <div className="proestimate-hero">
          <div className="container">
            <h1>American Excellence: Discover Our USA Division</h1>
            <p>
              With expertise and dedication, we undertake projects big and small, building the foundations of tomorrow's 
              landscapes. From bustling urban centers to serene rural retreats, our commitment to quality craftsmanship 
              resonates in every structure we create. Join us on a journey through the heart of America's construction 
              landscape and witness the embodiment of excellence in every project we undertake.
            </p>
          </div>
        </div>
        
        <div className="proestimate-layout">
          {/* Navigation Sidebar */}
          <div className="divisions-nav">
            <h3>Quick Navigation</h3>
            <ul>
              {divisions.map((division) => (
                <li key={division.id}>
                  <button 
                    onClick={() => scrollToSection(division.id)}
                    className={activeSection === division.id ? 'active' : ''}
                  >
                    {division.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="divisions-content">
            <div className="container">
              {/* Division 1 - Site Work */}
              <div id="div1" className="division-section">
                <h2>Division 1 - Site Work</h2>

                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Division 1.avif" alt="Site Work" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Site Clearing</h3>
                      <p>Removing vegetation, debris, and structures to prepare the land for construction.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Earthwork</h3>
                      <p>Grading, excavation, and filling to achieve the desired topography and elevations.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Utilities Installation</h3>
                      <p>Laying the groundwork for essential services like water, sewer, and electricity.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Division 2 - Existing Conditions */}
              <div id="div2" className="division-section">
                <h2>Division 2 - Existing Conditions</h2>

                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Site Assessment</h3>
                      <p>Evaluate topography, soil composition, environmental factors, utilities, and legal constraints.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Demolition</h3>
                      <p>Safely remove existing structures, consider materials, environmental impact, and permits.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Site Preparation</h3>
                      <p>Clear and grade the site, control erosion, install utilities, and prepare foundations.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Division 2.avif" alt="Existing Conditions" />
                  </div>
                </div>
              </div>

              {/* Division 3 - Concrete */}
              <div id="div3" className="division-section">
                <h2>Division 3 - Concrete</h2>

                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Division 3.avif" alt="Concrete Work" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>Concrete Work</h3>
                      <p>Concrete work involves the construction and manipulation of concrete, a composite material made from cement, aggregates (such as sand and gravel), and water. It includes several key steps:</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>Formwork</h3>
                    </div>
                    
                    <div className="division-item">
                      <h3>Reinforcement</h3>
                    </div>
                    
                    <div className="division-item">
                      <h3>Pouring and Finishing</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division 4 - Masonry */}
              <div id="div4" className="division-section">
                <h2>Division 4 - Masonry</h2>

                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <p>Masonry refers to the construction method that utilizes brick and stone bound together with mortar. Masons layer these materials using mortar, an adhesive paste that fills gaps and binds materials together. The resulting structures can include walls, columns, beams, foundations, load-bearing arches, and more. Masonry is used for both structural (load-bearing walls) and non-structural (features like fireplaces and chimneys) purposes. It offers advantages such as thermal mass and fire resistance. 😊</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Masonry_ Brick, block, and stone work__j.avif" alt="Masonry Work" />
                  </div>
                </div>
              </div>

              {/* Division 5 - Metals */}
              <div id="div5" className="division-section">
                <h2>Division 5 - Metals</h2>

                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Metals_ Structural steel, metal framing,.avif" alt="Metal Work" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Structural Steel</h3>
                      <p>Strong steel is used in construction for building structures like bridges and skyscrapers.</p>
                    </div>
                    <div className="division-item">
                      <h3>2. Metal Framing</h3>
                      <p>Creating building frameworks using metal components (usually steel or aluminum).</p>
                    </div>
                    <div className="division-item">
                      <h3>3. Metal Fabrications</h3>
                      <p>Various processes for shaping and assembling metal parts.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division 6 - Wood, Plastics, and Composites */}
              <div id="div6" className="division-section">
                <h2>Division 6 - Wood, Plastics, and Composites</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Building Materials</h3>
                      <p>This division encompasses a wide range of building materials used in construction.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Wood and Carpentry</h3>
                      <p>It includes wood for both rough framing and finish carpentry, as well as modern plastics and composites.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Composite Applications</h3>
                      <p>Plastics and composites find applications in exterior elements and light structural components.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Wood, Plastics, and Composites in constr.avif" alt="Wood and Composites" />
                  </div>
                </div>
              </div>

              {/* Division 7 - Thermal and Moisture Protection */}
              <div id="div7" className="division-section">
                <h2>Division 7 - Thermal and Moisture Protection</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Thermal and Moisture Protection in const.avif" alt="Thermal Protection" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Building Envelope Protection</h3>
                      <p>Division 07 focuses on protecting the building envelope from temperature fluctuations and moisture infiltration.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Insulation and Barriers</h3>
                      <p>It covers insulation, air and vapor barriers, waterproofing, and roofing systems.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Durability and Efficiency</h3>
                      <p>Properly specified thermal and moisture protection ensures building durability and energy efficiency</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division 8 - Openings */}
              <div id="div8" className="division-section">
                <h2>Division 8 - Openings</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Opening Products</h3>
                      <p>Division 08 deals with products that fill openings in buildings, such as doors, windows, and hardware.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Components and Systems</h3>
                      <p>It includes doors, frames, entrances, storefronts, curtain walls, windows, roof windows, skylights, and more.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Functionality and Safety</h3>
                      <p>These elements contribute to aesthetics, safety, and functionality within a structure</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Doors, windows, and hardware_.avif" alt="Doors and Windows" />
                  </div>
                </div>
              </div>

              {/* Division 9 - Finishes */}
              <div id="div9" className="division-section">
                <h2>Division 9 - Finishes</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Division 09 - Finishes - Finishes_ Inter.avif" alt="Interior Finishes" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Interior Finishes</h3>
                      <p>Division 09 focuses on interior finishes, enhancing aesthetics and functionality.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Surface Materials</h3>
                      <p>It covers walls, ceilings, and floors, including materials like paint, flooring, and wall coverings.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Quality and Comfort</h3>
                      <p>Properly specified finishes contribute to the overall quality and comfort of a space</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division 10 - Specialties */}
              <div id="div10" className="division-section">
                <h2>Division 10 - Specialties</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Unique Products</h3>
                      <p>Division 10 addresses unique products and materials used in specific construction applications.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Specialty Items</h3>
                      <p>Examples include visual display surfaces, toilet partitions, signage, and lockers.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Standardization Benefits</h3>
                      <p>Standardizing these specialties ensures effective communication and coordination among project teams</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Specialties_ Signage, toilet accessories.avif" alt="Specialties" />
                  </div>
                </div>
              </div>

              {/* Division 11 - Equipment */}
              <div id="div11" className="division-section">
                <h2>Division 11 - Equipment</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Equipment_ Appliances, furnishings, and .avif" alt="Equipment" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Building Equipment</h3>
                      <p>This division encompasses various appliances, furnishings, and other equipment used in buildings.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Appliance Systems</h3>
                      <p>Examples include kitchen appliances (stoves, refrigerators), laundry equipment (washers, dryers), and HVAC systems.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Enhanced Functionality</h3>
                      <p>Properly selected and installed equipment enhances the functionality and comfort of a space.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division 12 - Furnishings */}
              <div id="div12" className="division-section">
                <h2>Division 12 - Furnishings</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Furniture Systems</h3>
                      <p>Furniture includes items like tables, chairs, desks, and beds.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Seating Elements</h3>
                      <p>Seating refers to chairs, sofas, benches, and other seating elements.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Interior Accessories</h3>
                      <p>Accessories may include lamps, artwork, and decorative items that complete the interior design.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Furnishings_ Furniture, seating, and acc.avif" alt="Furnishings" />
                  </div>
                </div>
              </div>

              {/* Division 13 - Special Construction */}
              <div id="div13" className="division-section">
                <h2>Division 13 - Special Construction</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Temporary structures, pre-engineered bui.avif" alt="Special Construction" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Specialized Elements</h3>
                      <p>This division covers unique or specialized construction elements.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Temporary Structures</h3>
                      <p>Temporary structures, such as scaffolding or construction enclosures, fall under Division 13.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Pre-engineered Buildings</h3>
                      <p>Pre-engineered buildings, which are designed off-site and assembled on-site, also fit into this category.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division 14 - Conveying Equipment */}
              <div id="div14" className="division-section">
                <h2>Division 14 - Conveying Equipment</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Vertical Transportation</h3>
                      <p>Division 14 deals with vertical transportation systems.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Essential Components</h3>
                      <p>Elevators, escalators, and lifts are essential components in multi-story buildings.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Efficient Movement</h3>
                      <p>Properly maintained conveying equipment ensures efficient movement of people and goods.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Conveying Equipment_ Elevators, escalato.avif" alt="Conveying Equipment" />
                  </div>
                </div>
              </div>

              {/* Division 21 - Fire Suppression */}
              <div id="div21" className="division-section">
                <h2>Division 21 - Fire Suppression</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/fire suppression in construction.avif" alt="Fire Suppression" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Sprinkler Systems</h3>
                      <p>Wet-pipe, dry-pipe, preaction, and deluge systems use water-filled pipes and sprinkler heads to control fires.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Fire Extinguishing Systems</h3>
                      <p>CO2, clean-agent, and wet-chemical systems suppress fires.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Fire Pumps and Water Storage</h3>
                      <p>Ensure adequate water flow and provide extra supply for sprinkler systems</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division 22 - Plumbing */}
              <div id="div22" className="division-section">
                <h2>Division 22 - Plumbing</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Common Work Results for Plumbing (Section 22 05 00)</h3>
                      <p>General plumbing requirements applicable to all Division 22 sections. Covers piping material, installation, grout, demolition, and equipment installation.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Facility Water Distribution (Section 22 10 00)</h3>
                      <p>Focuses on water distribution within a facility. Includes specifications for domestic water distribution systems and plumbing fixtures.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Facility Sanitary Sewerage (Section 22 20 00)</h3>
                      <p>Addresses sanitary waste and vent piping. Covers design and installation of sanitary waste piping.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Plumbing in construction.avif" alt="Plumbing" />
                  </div>
                </div>
              </div>

              {/* Division 23 - HVAC */}
              <div id="div23" className="division-section">
                <h2>Division 23 - Heating, Ventilating, and Air Conditioning (HVAC)</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Heating, Ventilating, and Air Conditioni.avif" alt="HVAC" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Heating (H)</h3>
                      <p>Furnaces or heat pumps provide warmth. Electric baseboard heaters are another option.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Ventilation (V)</h3>
                      <p>Mechanical or natural ventilation ensures fresh air.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Air Conditioning (AC)</h3>
                      <p>Central AC, window units, or split systems cool indoor spaces.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division 25 - Integrated Automation */}
              <div id="div25" className="division-section">
                <h2>Division 25 - Integrated Automation</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Building Automation Systems</h3>
                      <p>Focuses on building automation and control systems</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Automation Solutions</h3>
                      <p>Specializes in developing automation solutions for various industries. Designs and implements control systems to streamline processes and increase efficiency.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Technology Integration</h3>
                      <p>Utilizes technology to automate tasks, reduce human intervention, and improve overall productivity.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Integrated Automation__Description_ Focu.avif" alt="Integrated Automation" />
                  </div>
                </div>
              </div>

              {/* Division 26 - Electrical */}
              <div id="div26" className="division-section">
                <h2>Division 26 - Electrical</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Electrical_IN CONSTRUCTION.avif" alt="Electrical" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Electrical Systems</h3>
                      <p>Addresses electrical systems and components.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Design and Installation</h3>
                      <p>Deals with the design, installation, and maintenance of electrical systems. Covers a wide range of components, including wiring, lighting, switches, and circuit breakers.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Safety and Reliability</h3>
                      <p>Ensures safety and reliability of electrical infrastructure in buildings and industrial settings.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division 27 - Communications */}
              <div id="div27" className="division-section">
                <h2>Division 27 - Communications</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Communication Systems</h3>
                      <p>Focuses on communication systems within buildings.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Network Infrastructure</h3>
                      <p>Includes data networks, telecommunication, audiovisual systems, and security alarms.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Connectivity Enhancement</h3>
                      <p>Enhances connectivity, information sharing, and safety. Integrates voice, data, and video communication.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/communication systems within buildings_j.avif" alt="Communications" />
                  </div>
                </div>
              </div>

              {/* Division 28 - Electronic Safety and Security */}
              <div id="div28" className="division-section">
                <h2>Division 28 - Electronic Safety and Security</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Deals with security and life safety syst.avif" alt="Safety and Security" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Security Systems</h3>
                      <p>Deals with security and life safety systems.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Building Protection</h3>
                      <p>Focuses on protecting the building envelope from temperature fluctuations and moisture infiltration.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. System Integration</h3>
                      <p>Covers insulation, air and vapor barriers, waterproofing, and roofing systems. Properly specified thermal and moisture protection ensures building durability and energy efficiency</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division 31 - Earthwork */}
              <div id="div31" className="division-section">
                <h2>Division 31 - Earthwork</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Site Preparation</h3>
                      <p>Includes grading, excavation, and soil stabilization.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Construction Readiness</h3>
                      <p>Prepares the site for construction.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Foundation Support</h3>
                      <p>Ensures proper foundation and drainage</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Pertains to site preparation and excavat.avif" alt="Earthwork" />
                  </div>
                </div>
              </div>

              {/* Division 32 - Exterior Improvements */}
              <div id="div32" className="division-section">
                <h2>Division 32 - Exterior Improvements</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Focuses on outdoor elements.avif" alt="Exterior Improvements" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Outdoor Elements</h3>
                      <p>Covers landscaping, paving, fences, and site amenities.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Aesthetic Enhancement</h3>
                      <p>Enhances aesthetics, accessibility, and functionality.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Outdoor Spaces</h3>
                      <p>Creates welcoming outdoor spaces.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="div33" className="division-section">
                <h2>Division 33 - Utilities</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Utility Systems</h3>
                      <p>Addresses utility systems</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Infrastructure Support</h3>
                      <p>Includes water supply, sewer, gas, and electrical utilities. Ensures proper connections and distribution.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Building Operations</h3>
                      <p>Supports building operations.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Includes water supply, sewer, gas, and e.avif" alt="Utilities" />
                  </div>
                </div>
              </div>

              <div id="div34" className="division-section">
                <h2>Division 34 - Transportation</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Pertains to transportation infrastructur.avif" alt="Transportation" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Transportation Infrastructure</h3>
                      <p>Covers elevators, escalators, moving walkways, and lifts.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Vertical Transportation</h3>
                      <p>Enhances vertical transportation within buildings.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Safety Compliance</h3>
                      <p>Complies with safety standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="div35" className="division-section">
                <h2>Division 35 - Waterway and Marine Construction</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Water-Related Projects</h3>
                      <p>Focuses on water-related projects</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Marine Structures</h3>
                      <p>Includes docks, piers, seawalls, and marine structures. Supports waterfront development and navigation.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Environmental Durability</h3>
                      <p>Ensures durability in harsh aquatic environments.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Division 35 — Waterway and Marine Constr.avif" alt="Marine Construction" />
                  </div>
                </div>
              </div>

              <div id="div40" className="division-section">
                <h2>Division 40 - Process Interconnections</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/_Covers piping, valves, and process equi.avif" alt="Process Interconnections" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Industrial Processes</h3>
                      <p>Relates to industrial processes</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Process Equipment</h3>
                      <p>Covers piping, valves, and process equipment connections. Facilitates fluid transfer and control.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Manufacturing Support</h3>
                      <p>Supports manufacturing and production.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="div41" className="division-section">
                <h2>Division 41 - Material Processing and Handling Equipment</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Material Handling</h3>
                      <p>Addresses equipment for material handling</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Processing Systems</h3>
                      <p>Includes conveyors, crushers, mixers, and bulk material handling systems. Supports efficient material flow in factories and plants.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Productivity Enhancement</h3>
                      <p>Enhances productivity.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/conveyors, crushers, mixers, and bulk ma.avif" alt="Material Handling" />
                  </div>
                </div>
              </div>

              <div id="div42" className="division-section">
                <h2>Division 42 - Process Heating, Cooling, and Drying Equipment</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Process Heating, Cooling, and Drying _jp.avif" alt="Process Equipment" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Temperature Control</h3>
                      <p>Focuses on equipment related to temperature control</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Process Systems</h3>
                      <p>Includes systems for heating, cooling, and drying processes. Ensures efficient energy utilization.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Industrial Applications</h3>
                      <p>Supports industrial and commercial applications.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="div43" className="division-section">
                <h2>Division 43 - Process Gas and Liquid Handling, Purification, and Storage Equipment</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Gas and Liquid Handling</h3>
                      <p>Addresses equipment for handling gases and liquids</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Processing Equipment</h3>
                      <p>Covers pumps, compressors, tanks, and purification systems. Facilitates fluid transport and storage.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Safety Compliance</h3>
                      <p>Ensures safe handling and compliance with regulations.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Process Gas and Liquid Handling, Purific.avif" alt="Gas and Liquid Handling" />
                  </div>
                </div>
              </div>

              <div id="div44" className="division-section">
                <h2>Division 44 - Pollution and Waste Control Equipment</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Pollution and Waste Control.avif" alt="Pollution Control" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Environmental Protection</h3>
                      <p>Deals with equipment for environmental protection</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Pollution Control</h3>
                      <p>Includes air pollution control devices (scrubbers, filters). Addresses waste treatment and disposal.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Sustainability</h3>
                      <p>Enhances sustainability and compliance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="div45" className="division-section">
                <h2>Division 45 - Industry-Specific Manufacturing Equipment</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Specialized Equipment</h3>
                      <p>Pertains to specialized manufacturing equipment.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Industry-Specific Machinery</h3>
                      <p>Covers machinery specific to various industries (e.g., food processing, textiles). Supports production processes.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Quality Assurance</h3>
                      <p>Ensures quality and efficiency.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Division 45 — Industry-Specific Manufact.avif" alt="Manufacturing Equipment" />
                  </div>
                </div>
              </div>

              <div id="div46" className="division-section">
                <h2>Division 46 - Water and Wastewater Equipment</h2>
                
                <div className="division-layout">
                  <div className="division-image">
                    <img src="/ProEstimate/Water and Wastewater Equipment.avif" alt="Water Equipment" />
                  </div>
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Water Equipment</h3>
                      <p>Focuses on water-related equipment</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Treatment Systems</h3>
                      <p>Includes pumps, filters, water treatment systems, and sewage equipment. Supports water supply, distribution, and wastewater management.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Standards Compliance</h3>
                      <p>Complies with health and environmental standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="div48" className="division-section">
                <h2>Division 48 - Electrical Power Generation</h2>
                
                <div className="division-layout reverse">
                  <div className="division-content">
                    <div className="division-item">
                      <h3>1. Power Generation</h3>
                      <p>Addresses power generation systems</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>2. Electrical Equipment</h3>
                      <p>Covers generators, transformers, and related equipment. Ensures reliable electrical supply.</p>
                    </div>
                    
                    <div className="division-item">
                      <h3>3. Infrastructure Support</h3>
                      <p>Supports infrastructure and emergency power needs.</p>
                    </div>
                  </div>
                  <div className="division-image">
                    <img src="/ProEstimate/Electrical Power Generation__Addresses p.avif" alt="Power Generation" />
                  </div>
                </div>
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

export default ProEstimate;