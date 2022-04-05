import React from 'react'
import {Button} from 'reactstrap'
import './card.scss';

function ProductCard({id,name,price,imagePath,handleDetails}) {
  return (
    <div className="cards">
      <div className="img-box">
          <img src={require(`../../assets/images/${imagePath}`)} alt="team_member"/>
      </div>

      <div className="box-2">
        <div className="about">
            <h4>{name}</h4>
            <p>{price} $</p>
        </div>
        <div className="sm-contact">
            <ul>
                <li>
                    <Button className="more-btn" onClick={()=>{handleDetails(id)}}>More</Button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductCard