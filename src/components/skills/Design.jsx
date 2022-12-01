import React from 'react'

function Design() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Diseño</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">PhotoShop</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Illustrator</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">PremiePro</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">AfterEffects</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Design