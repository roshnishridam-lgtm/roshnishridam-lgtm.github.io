import React from "react";
import "./Work.css";

function Work() {
  return (
    <section className="work">
      <h2>My Work</h2>
      <div className="work-items">
        {/* Voeg hier je projecten toe */}
        <div className="work-item">
          <h3>Project Titel</h3>
          <p>Korte beschrijving van het project.</p>
        </div>
      </div>
    </section>
  );
}

export default Work;
