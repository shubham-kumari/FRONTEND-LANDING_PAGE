import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/Header/Header';
import Boxes from '../components/Boxes/Boxes';
import Mission from '../components/Mission/Mission';
import Footer from '../components/Footer/Footer';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Boxes/>
      <Mission/>
      <Footer/>
    </div>
  );
}

export default Home;
