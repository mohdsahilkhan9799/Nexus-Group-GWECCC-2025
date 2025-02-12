import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../Speker/Spekerpage.css";
const speakers = [
    {
      name: "Mr. Sameer Kochhar",
      designation: "Chairman, SKOCH Group",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      description: "A well-known thought leader and policy expert in governance and economic reforms.",
    },
    {
      name: "Mr. V Srinivas",
      designation: "Secretary DARPG & DPPW, GOI",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
      description: "Government official leading reforms in public administration and pension management.",
    },
    {
      name: "Ms. S Radha Chauhan",
      designation: "Former Secretary, Govt of India",
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      description: "Expert in digital transformation and e-governance for public sector initiatives.",
    },
    {
      name: "Mr. IPS Sethi",
      designation: "Director General, NIC",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      description: "Leading National Informatics Centre with expertise in cybersecurity and digital services.",
    },
  ];
const Spekerpage = () => {
      const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    
  return (
    <div>
         <section className="speakers-section">
      <div className="container">
        <h2 className="title" data-aos="fade-up">Our Speakers</h2>

        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div className="speaker-card" key={index} data-aos="fade-up" onClick={() => setSelectedSpeaker(speaker)}>
              <div className="speaker-image">
                <img src={speaker.image} alt={speaker.name} />
              </div>
              <div className="speaker-info">
                <h3>{speaker.name}</h3>
                <p>{speaker.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Speaker Details */}
      {selectedSpeaker && (
        <div className="modal-overlay" onClick={() => setSelectedSpeaker(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setSelectedSpeaker(null)}>&times;</span>
            <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="modal-image" />
            <h3>{selectedSpeaker.name}</h3>
            <p className="modal-designation">{selectedSpeaker.designation}</p>
            <p className="modal-description">{selectedSpeaker.description}</p>
          </div>
        </div>
      )}
    </section>
    </div>
  );
}

export default Spekerpage;
