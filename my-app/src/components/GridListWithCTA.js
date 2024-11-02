import React from 'react';
import './GridListWithCTA.css'; // Import a custom CSS file

const Feature = ({ heading, text }) => {
  return (
    <div className="grid-item">
      <h3 className="feature-heading">{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default function GridListWithCTA() {
  return (
    <div className="container">
      <div className="grid-layout">
        <div className="cta-section">
          <h2 className="cta-title">Medium length title</h2>
          <button className="cta-button">Call To Action</button>
        </div>
        <div className="cta-description">
          <p>
            Provide your customers a story they would enjoy keeping in mind the
            objectives of your website. Pay special attention to the tone of voice.
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className="feature-grid">
        <Feature heading="First Feature" text="Short text describing one of your features/service" />
        <Feature heading="Second Feature" text="Short text describing one of your features/service" />
        <Feature heading="Third Feature" text="Short text describing one of your features/service" />
        <Feature heading="Fourth Feature" text="Short text describing one of your features/service" />
      </div>
    </div>
  );
}
