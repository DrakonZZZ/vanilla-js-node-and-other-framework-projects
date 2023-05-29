import React from 'react';
import Service from './Service';

const Services = ({ title, secTitle }) => {
  return (
    <>
      <section className="section services" id="services">
        <div className="section-title">
          <h2>
            {title}
            <span> {secTitle}</span>
          </h2>
        </div>
        <div className="section-center services-center">
          <Service />
        </div>
      </section>
    </>
  );
};

export default Services;
