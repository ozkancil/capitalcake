import React, { useState } from 'react';
import images from '../../assets/images/baguette.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BreadList from '../food/breadList/breadlist';
import '../../style/linkedinpageImages.scss';



 const LinkInPage = () => {    
   const [showList,setShowList]=useState(false);

   const handleClickButton=()=>{
    setShowList(!showList);
   }
  return (
    <div >
    <Container>
<div className='firstpic2'>
<Link >
<button style={{backgroundColor:'rgb(104, 119, 26)'}} onClick={handleClickButton}> Click Image<img src={images} width={300}/>
</button>
</Link>
<BreadList className='showList' showList={showList}/>
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