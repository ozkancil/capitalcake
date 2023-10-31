import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../style/navbar.scss'
import { Button, Container, Dropdown } from 'react-bootstrap';
import Soup from '../food/soup';



const NavBar = () => {
  const [isSubTabHovered, setIsSubTabHovered] = useState(false);

  return (
    <div>
      <nav className="sticky-top">
        <Container className='container'>
          <ul className='navbar-ul'>
            <li>
              <Link to="/" className='color1'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='color2'>About</Link>
            </li>
            <li>

              <Dropdown
                onMouseEnter={() => setIsSubTabHovered(true)}
                onMouseLeave={() => setIsSubTabHovered(false)}>
                <Dropdown.Toggle to="/food" className="foodlist">FoodList</Dropdown.Toggle>


                <Dropdown.Menu>
                
                <Dropdown.Item
                  className={`souplist ${isSubTabHovered ? 'show' : ''}`}
                  onMouseEnter={() => setIsSubTabHovered(true)}
                  onMouseLeave={() => setIsSubTabHovered(false)}
                >
                  <Link to="/food/soup" id="sp">Soup</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  className={`breadlist ${isSubTabHovered ? 'show' : ''}`}
                  onMouseEnter={() => setIsSubTabHovered(true)}
                  onMouseLeave={() => setIsSubTabHovered(false)}
                >
                  <Link to="/food/bread" id="sp">Bread</Link>
                </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  );
};

export default NavBar;