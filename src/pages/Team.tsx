import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchTeamMembers, TeamMember } from '../services/googleSheets';

const Team: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Our Team - ARK Global Services';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet our expert team of construction professionals at ARK Global Services. Experienced estimators and project managers.');
    }

    const loadTeamData = async () => {
      const members = await fetchTeamMembers();
      setTeamMembers(members);
      if (members.length > 0) {
        setSelectedMember(members[0]);
      }
      setLoading(false);
    };

    loadTeamData();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div className="team-page">
          <div className="loading">Loading team data...</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="team-page">
        <div className="team-header">
          <h1>Our Team</h1>
          <p>Meet the experts behind ARK Global Services</p>
        </div>
        
        <div className="team-container">
          <div className="team-profile">
            {selectedMember ? (
              <div className="profile-card">
                <img src={selectedMember.image} alt={selectedMember.name} />
                <h2>{selectedMember.name}</h2>
                <h3>{selectedMember.role}</h3>
                <div className="bio">
                  <h4>Profile</h4>
                  <p>{selectedMember.profile}</p>
                </div>
              </div>
            ) : (
              <div className="no-selection">
                <p>Select a team member to view their profile</p>
              </div>
            )}
          </div>
          
          <div className="team-list">
            <h3>Team Members</h3>
            <div className="members-list">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`member-item ${selectedMember?.id === member.id ? 'active' : ''}`}
                  onClick={() => setSelectedMember(member)}
                >
                  <img src={member.image} alt={member.name} />
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;