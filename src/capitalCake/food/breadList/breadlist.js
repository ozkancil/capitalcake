import React from 'react';
import tombulbread from '../../../assets/data/breadpics.json';
import '../../../style/breadlist.scss'
import { Outlet } from 'react-router-dom';
const BreadList = ({showList}) => {
    
    return (
        <div className='breadlist'>
         
          {showList && (
            <ul>
            {tombulbread.map((imageUrl,index)=>(
              <li className='changeColor' key={index}>
              <img src={imageUrl} alt={`Image ${index}`}/>
              </li>
                ))}
             
              
            </ul>
          )}
          <Outlet/>
        </div>
      );
    }
   export default BreadList;