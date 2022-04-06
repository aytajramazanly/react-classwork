import React from 'react'
import './index.scss'
import { useLocation } from 'react-router-dom'
import ProductCard from '../../Components/Product/ProductCard'
import { Container } from 'reactstrap'
import Banner from '../../Components/Banner/banner'
import {useProductContext} from '../../Context/Product'

function Products() {
  const {state: isAuth}=useLocation()
  const [{products,handleCreate,handleDetails}]=useProductContext()

  return (
    <>
      <Banner title="Products"/>
      <Container>
        <button color='secondary' className='add-btn' onClick={handleCreate}>Add Product</button>
        <div className='products-list'>
          {isAuth && products?.map((item)=><ProductCard name={item.name} price={item.price} key={item.id} imagePath={item.image} handleDetails={handleDetails} id={item.id}/>)}
        </div>
      </Container>
    </>
  )
}

export default Products