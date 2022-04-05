import React from 'react'
import { useParams } from 'react-router-dom'
import {productService} from '../../API/Services/ProductService'
import {Card, CardImg, CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap'

function SingleProduct() {
    const [state,setState]=React.useState()
    const {id}=useParams()

    React.useEffect(()=>{
        productService.getProductById(id).then(({data})=> setState(data))
      },[])
  return (
   <div>
        {state?.map((product)=>  <Card>
        <CardImg
        alt="Card image cap"
        src={require(`../../assets/images/${product.image}`)}
        top
        width="100%"
        />
        <CardBody>
        <CardTitle tag="h5">
           {product.name}
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            {product.price}
        </CardSubtitle>
        <CardText>
        {product.description}
        </CardText>
        </CardBody>
  </Card>)}
   </div>
  )
}

export default SingleProduct