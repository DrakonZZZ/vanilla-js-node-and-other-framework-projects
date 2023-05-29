import React from 'react';

const About = ({ title, secTitle }) => {
  return (
    <>
      <section className="section" id="about">
        <div className="section-title">
          <h2>
            {title}
            <span> {secTitle}</span>
          </h2>
        </div>

        <div className="section-center about-center">
          <div className="about-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF2oRvh80uj5eg8yEVZZ5Xl6WF3e_nVj7jsC6uRl9qX7GQX2_DBvqSAx1XXYds0zdReM&usqp=CAU"
              className="about-photo"
              alt="awesome beach"
            />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
