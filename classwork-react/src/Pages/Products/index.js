import React from 'react'
import './index.scss'
import { useLocation } from 'react-router-dom'
import ProductCard from '../../Components/Product/ProductCard'
import {productService} from '../../API/Services/ProductService'
import { Container } from 'reactstrap'
import Banner from '../../Components/Banner/banner'
import { useHistory } from 'react-router-dom'

function Products() {
  const [state,setState]=React.useState()
  const {state: isAuth}=useLocation()
  const history =useHistory()
  React.useEffect(()=>{
    productService.getAllProducts().then(({data})=> setState(data))
  },[])

  const handleCreate=()=>{
    history.push("/createProduct")
  }

  const handleDetails=(id)=>{
    history.push(`/singleProduct/${id}`)
  }

  return (
    <>
      <Banner title="Products"/>
      <Container>
        <button color='secondary' className='add-btn' onClick={handleCreate}>Add Product</button>
        <div className='products-list'>
          {isAuth && state?.map((item)=><ProductCard name={item.name} price={item.price} key={item.id} imagePath={item.image} handleDetails={handleDetails} id={item.id}/>)}
        </div>
      </Container>
    </>
  )
}

export default Products