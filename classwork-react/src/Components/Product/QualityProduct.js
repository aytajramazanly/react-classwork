import React from 'react'
import {useProductContext} from '../../Context/Product'
import { Container } from 'reactstrap'
import ProductCard from '../../Components/Product/ProductCard'

function QualityProduct() {
    const [{products,handleCreate,handleDetails}]=useProductContext()
  return (
    <>
        <div>
            <h2>Quality Of Products</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <div>
            <Container>
            <button color='secondary' className='add-btn' onClick={handleCreate}>Add Product</button>
            <div className='products-list'>
            {products?.map((item)=><ProductCard name={item.name} price={item.price} key={item.id} imagePath={item.image} handleDetails={handleDetails} id={item.id}/>)}
            </div>
        </Container>
        </div>
    </>
  )
}

export default QualityProduct