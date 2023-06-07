import React from 'react';
import TourList from './TourList';
const Packages = ({ title, secTitle }) => {
  return (
    <>
      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            {title}
            <span> {secTitle}</span>
          </h2>
        </div>

        <div className="section-center featured-center">
          <TourList />
        </div>
      </section>
    </>
  );
};

export default Packages;
