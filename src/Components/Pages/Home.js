import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Layout/Navbar/Navbar';
import Footer from '../Layout/Footer/Footer';


class Home extends Component {
  render(){
    return(
      <div>
          <Navbar />
          <Footer />
      </div>
    )
  }
}

export default Home;