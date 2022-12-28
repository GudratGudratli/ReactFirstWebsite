import React, { Component } from 'react';
import './Home.css';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Layout/Footer/Footer';
import Wellcome from './Sections/Wellcome';
import Building from './Sections/Building';


class Home extends Component {
  render(){
    return(
      <div>
          <Navbar />
          <Wellcome />
          <Building />
          <Footer />
      </div>
    )
  }
}

export default Home;