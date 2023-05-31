import React from 'react';
import { useState, useEffect } from 'react';
import Contact from './Contact';
import Loading from './Loading';

const Layout = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const getData = await fetch('https://randomuser.me/api/?results=8');
        const jsonData = await getData.json();
        setList(jsonData.results);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Contact data={list} />;
};

export default Layout;
