import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';

const Layout = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const getData = await fetch('https://randomuser.me/api/?results=8');
        const jsonData = await getData.json();
        console.log(jsonData);
        setList(jsonData.results);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

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
