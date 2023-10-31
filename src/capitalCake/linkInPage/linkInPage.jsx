import React, { useState } from 'react';
import images from '../../assets/images/baguette.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import food from '../../assets/data/image.json';
import BreadList from '../food/breadList/breadlist';




 const LinkInPage = () => {    
   const [showList,setShowList]=useState(false);

   const handleClickButton=()=>{
    setShowList(!showList);
   }
  return (
    <div>
    <Container>
<div className='firstpic'>
<Link >
<button style={{backgroundColor:'rgb(104, 119, 26)'}}> Click Image<img src={images} width={300}/>
</button>
<BreadList showList={showList}/>
</Link>
  </div>
</Container>
    </div>
  )
}
export default LinkInPage;






























































































































































// {foodName && (
//     <div>
//       <h2>{foodName}</h2>
//       <ul>
//         {otherItems.map((item, index) => (
//           <li key={index}>{item}
//           <strong>{item.name}:</strong> {item.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )}