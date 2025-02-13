import React, { useState, useEffect } from 'react';
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

const agendaItems = [
    {
        title: "Opening Ceremony & Keynote Speech",
        time: "10:00 AM - 11:00 AM",
        description: "Welcome address by industry leaders, followed by an inspiring keynote speech on sustainability and innovation.",
    },
    {
        title: "Panel Discussion: Future of Green Energy",
        time: "11:30 AM - 12:30 PM",
        description: "Experts discuss advancements in renewable energy, the role of policy, and industry challenges.",
    },
    {
        title: "Lunch & Networking Session",
        time: "12:30 PM - 1:30 PM",
        description: "A chance to connect with industry leaders, professionals, and fellow attendees over a networking lunch.",
    },
    {
        title: "Workshop: Climate Action Strategies",
        time: "2:00 PM - 3:30 PM",
        description: "Interactive workshop covering sustainable solutions and climate resilience planning.",
    },
    {
        title: "Closing Remarks & Future Roadmap",
        time: "4:00 PM - 5:00 PM",
        description: "Final thoughts, takeaways from the conference, and future collaborations.",
    },
];

const Spekerpage = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const toggleAgenda = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="speakers-section">
            <div className="container">
                <h2 className="title" data-aos="fade-up">Our Speakers</h2>

                <div className="row speakers-grid">
                    {speakers.map((speaker, index) => (
                        <div 
                            className="col-lg-3 col-md-6 col-sm-12 speaker-card" 
                            key={index} 
                            data-aos="fade-up" 
                            onClick={() => setSelectedSpeaker(speaker)}
                        >
                            <div className="speaker-image">
                                <img src={speaker.image} alt={speaker.name} />
                            </div>
                            <div className="speaker-info">
                                <h3>{speaker.name}</h3>
                                <p>{speaker.designation}</p>
                            </div>
                            {/* Downward Arrow Icon */}
                            <div className="arrow-down">▼</div>
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

            {/* Agenda Section */}
            <section className="agenda-section">
                <div className="container">
                    <h2 className="agenda-title" data-aos="fade-up">Event Agenda</h2>

                    <div className="row agenda-list">
                        {agendaItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`col-lg-10 col-md-12 agenda-item ${openIndex === index ? "active" : ""}`} 
                                onClick={() => toggleAgenda(index)}
                            >
                                <div className="agenda-header">
                                    <h3>{item.title}</h3>
                                    <span className="agenda-time">{item.time}</span>
                                    <span className="agenda-arrow">{openIndex === index ? "▲" : "▼"}</span>
                                </div>
                                {openIndex === index && (
                                    <div className="agenda-content">
                                        <p>{item.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Spekerpage;
