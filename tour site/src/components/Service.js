import React from 'react';
import serviceData from './serviceData';
const Service = () => {
  return (
    <>
      {serviceData.map((data) => {
        const { icon, serviceTitle, serviceDescription, id } = data;
        return (
          <article key={id} className="service">
            <span className="service-icon">
              <i className={icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{serviceTitle}</h4>
              <p className="service-text">{serviceDescription}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Service;
