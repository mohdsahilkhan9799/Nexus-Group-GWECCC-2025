import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../Schedule/SchedulePage.css";

const scheduleData = {
    "Day 1": [
      { time: "10:00 AM", title: "Opening Ceremony", speaker: "Mr. Sameer Kochhar", description: "Welcome address and keynote speech." },
      { time: "11:30 AM", title: "Climate Change & Policy", speaker: "Dr. John Smith", description: "Panel discussion on sustainability and government policies." },
      { time: "2:00 PM", title: "Renewable Energy Innovations", speaker: "Prof. Alice Brown", description: "Exploring the latest advancements in solar and wind energy." }
    ],
    "Day 2": [
      { time: "10:00 AM", title: "Smart Water Management", speaker: "Dr. Robert White", description: "Technology-driven solutions for water conservation." },
      { time: "12:00 PM", title: "Digital Transformation in Governance", speaker: "Ms. S Radha Chauhan", description: "How technology is reshaping government services." },
      { time: "3:00 PM", title: "Closing Remarks", speaker: "Mr. IPS Sethi", description: "Final thoughts and wrap-up of GWECCC 2025." }
    ]
  };
const SchedulePage = () => {
      const [activeDay, setActiveDay] = useState("Day 1");
        const [expandedSession, setExpandedSession] = useState(null);
  return (
    <div>
       <section className="schedule-section">
      <div className="container">
        <h2 className="title" data-aos="fade-up">Event Schedule</h2>

        {/* Day Selector Tabs */}
        <div className="tabs">
          {Object.keys(scheduleData).map((day) => (
            <button key={day} className={`tab ${activeDay === day ? "active" : ""}`} onClick={() => setActiveDay(day)}>
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Details */}
        <div className="schedule-details" data-aos="fade-up">
          {scheduleData[activeDay].map((session, index) => (
            <div key={index} className="session-card">
              <div className="session-header" onClick={() => setExpandedSession(expandedSession === index ? null : index)}>
                <h3>{session.time} - {session.title}</h3>
                <span className="toggle-icon">{expandedSession === index ? "▲" : "▼"}</span>
              </div>
              {expandedSession === index && (
                <div className="session-details">
                  <p><b>Speaker:</b> {session.speaker}</p>
                  <p>{session.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default SchedulePage;
