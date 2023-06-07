import { useState } from 'react';
import tourData from './tourData';

const TourList = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {tourData.map((data) => {
        const {
          id,
          imgURL,
          date,
          location,
          locatiionDescription,
          country,
          duration,
          price,
        } = data;

        return (
          <article
            key={id}
            className={`tour-card ${toggle && 'tour-card-block'}`}
          >
            <div className="tour-img-container">
              <img src={imgURL} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <h4>{location}</h4>
              <p>{locatiionDescription}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                  {country}
                </p>
                <p>{duration}</p>
                <p>{price}</p>
              </div>
              <div className="tour-btn">
                <button
                  className="btn tour-btn-in"
                  onClick={() => setToggle(!toggle)}
                >
                  Not interested
                </button>
                <button
                  className="btn tour-btn-in"
                  onClick={() => console.log('woo2')}
                >
                  Add
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default TourList;
