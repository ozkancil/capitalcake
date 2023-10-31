import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import tombulbread from '../../assets/images/tombulEkmek.jpeg';

const BreadList = ({showList}) => {
    
    return (
        <div>
          <Link>
            <button style={{ backgroundColor: 'limegreen' }} disabled={!showList}>Click Image</button>
          </Link>
          {showList && (
            <ul>
              <li><img src={tombulbread}/></li>
              <li>Bread Type 2</li>
              <li>Bread Type 3</li>
            </ul>
          )}
        </div>
      );
    }
   export default BreadList;