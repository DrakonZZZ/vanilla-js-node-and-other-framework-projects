import React from 'react';
import { useState, useEffect } from 'react';
import Contact from './Contact';
import Loading from './Loading';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const getData = await fetch('https://randomuser.me/api/?results=8');
        const jsonData = await getData.json();
        setInfo(jsonData.results);
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

  return <Contact data={info} />;
};

export default Layout;
