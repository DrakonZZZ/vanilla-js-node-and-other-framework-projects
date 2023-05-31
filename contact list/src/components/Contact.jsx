import React from 'react';
import List from './List';

const Contact = ({ data }) => {
  const clearLog = () => {
    setList([]);
  };
  return (
    <main>
      <section className="container">
        <h2>Call Ramainder</h2>
        <List people={data} />
        {data.length !== 0 && (
          <button className="btn" onClick={clearLog}>
            Clear
          </button>
        )}
      </section>
    </main>
  );
};

export default Contact;
