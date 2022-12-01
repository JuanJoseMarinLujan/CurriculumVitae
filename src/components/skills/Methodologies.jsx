import React from "react";

function Methodologies() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Metodologías Agiles</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Scrum</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Kanban</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodologies;
