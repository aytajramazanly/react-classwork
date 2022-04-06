import React from 'react'
import { useHistory } from 'react-router-dom';
import {productService} from '../../API/Services/ProductService'

const ProductContext=React.createContext([]);

function ProductsProvider({children}) {
    const [products,setProducts] =React.useState()
    const history= useHistory();

    const handleCreate=React.useCallback(()=>{
      history.push('/createProduct')
    },[history])
  
    const handleDetails=React.useCallback((id)=>{
      history.push(`/singleProduct/${id}`)
    },[history])

    const getProducts=React.useCallback(()=>{
      productService.getAllProducts().then(({data})=>setProducts(data))
    },[])

    React.useEffect(()=>{
      getProducts()
    },[getProducts])

    
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