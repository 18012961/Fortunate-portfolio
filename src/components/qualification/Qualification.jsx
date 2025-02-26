import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiance
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Hoerskool Wiglerivier</h3>
                <span className="qualification__subtitle">
                  Frankfort-matric
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2018 - Completed
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">IIE Rosebank College - Diploma</h3>
                <span className="qualification__subtitle">
                Information Technology in Software Development
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Completed
                  <i className="uil uil-calender-alt"></i> 2018 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
  <div>
    <h3 className="qualification__title">National Certificate in Design Techniques Specializing in User-Centered Design</h3>
    <span className="qualification__subtitle">
      Online - Red & Yellow
    </span>
    <div className="qualification__calender">
      <i className="uil uil-calender-alt"></i>
    </div>
  </div>
  <div>
    <span className="qualification__rounder"></span>
    <span className="qualification__line"></span>
  </div>
</div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">
                  
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Tumi Sparkles </h3>
                <span className="qualification__subtitle">
                  Personal Assistance
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019- 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">TMG MakerSpace</h3>
                <span className="qualification__subtitle">
                  Software Development & UX/UI Designer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Wits Tsimologong</h3>
                <span className="qualification__subtitle">
                  Full-Stack Developer 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
