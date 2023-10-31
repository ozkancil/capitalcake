import React from 'react'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LinkInPage from '../linkInPage/linkInPage';
//import images from '../../assets/images/baguette.png';


const Bread = () => {
  return (
    <div>
    <h3>Come Get Your Bread</h3>
    
<Container>
<LinkInPage/>
</Container>


    <Outlet/></div>
    
  )
}

export default Bread;