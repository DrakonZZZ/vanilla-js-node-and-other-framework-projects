import React from 'react';
import { useState } from 'react';
import contactList from '../contactList';
import List from './List';

const Layout = () => {
  const [list, setList] = useState(contactList);

  const clearLog = () => {
    setList([]);
  };

  return (
    <main>
      <section className="container">
        <h2>Call Ramainder</h2>
        <List people={list} />
        {list.length !== 0 && (
          <button className="btn" onClick={clearLog}>
            Clear
          </button>
        )}
      </section>
    </main>
  );
};

export default Layout;
