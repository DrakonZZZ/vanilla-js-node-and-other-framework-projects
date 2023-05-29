import tourData from './tourData';

const TourList = () => {
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
          <article key={id} className="tour-card">
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
            </div>
          </article>
        );
      })}
    </>
  );
};

export default TourList;
