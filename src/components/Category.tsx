import '../styles/category.css';
import icon from '../assets/icons/star.svg';
import blob from '/images/blob.svg';
import {categoryData} from '../db/categoryData';
import { useState } from 'react';

const Category = () => {
    const [category] = useState(categoryData);

  return (
    <>
        <div className="container-category">
            <div className='container-category-header'>
                <img src={icon} alt="icon" />
                <h3>CATEGORIAS</h3>
                <img src={icon} alt="icon" />
            </div>
            <div className='container-category-blob'>
                {
                    category.map((item) =>(
                          <>
                            <div className='container-blob'>
                                <div className='blob'>
                                    <img className='blob-img' src={blob} alt="blob" />
                                    <img className='blob-photo' src={item.img} alt={item.name} />
                                </div> 
                                <div>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Category
