import React from 'react';

const Loading = () => {
  return (
    <main>
      <section className="container">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  );
};

export default Loading;
