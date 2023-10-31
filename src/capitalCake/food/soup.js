import React from 'react'
import soups from '../../assets/data/soup.json';
import '../../style/soup.scss';
import { Container } from 'react-bootstrap';

const Soup = () => {
  return (
    <div><h1>Come Get Your Soup</h1>
    
    <div className='image-gallery-container m-50'>
        {/* <img src={require(`../../assets/img/${firstImage}`)} 
        width={300}
        alt="" /> */}
     <div>
     {
        soups.map((soup, index) => {
            return(
                <div key={index} className='image-item'>
                    <img 
                    src=
{require(`../../assets/images/${soup.name}`)}  
                    alt={soup.title} 
                    title={soup.title}
                    />
                    <p className='soup-title'>{soup.title}</p>
                </div>
            )
          })
      }
     </div>
    </div>


   {/* <figure class="figure">
   <img src="" class="figure-img img-fluid rounded" alt="..."/>
   <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>

   </figure> */}

  
    
    </div>
  )
}

export default Soup