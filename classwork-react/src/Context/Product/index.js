import React from 'react'
import {productService} from '../../API/Services/ProductService'
import { useHistory } from 'react-router-dom'

const ProductContext=React.createContext([]);

function ProductsProvider({children}) {
    const [products,setProducts] =React.useState()
    const history=useHistory()

    const handleCreate=()=>{
      history.push("/createProduct")
    }
  
    const handleDetails=(id)=>{
      history.push(`/singleProduct/${id}`)
    }

    React.useEffect(()=>{
        productService.getAllProducts().then(({data})=>setProducts(data))
    },[])

  return (
    <ProductContext.Provider value={[{products,handleCreate,handleDetails}]}>
        {children}
    </ProductContext.Provider>
  )
}

const useProductContext=()=>{
    const productContext=React.useContext(ProductContext)
    return productContext;
}

export {useProductContext,ProductsProvider}