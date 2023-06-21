import { Routes, Route } from "react-router-dom"
import ProductsDetails from "../components/ProductsDetails"
import ProductsList from "../components/ProductsList"
import { useEffect, useState } from "react"

export default function Products(){

   const [products, setProducts] = useState([]);

   useEffect(()=>{
      fetch('https://dummyjson.com/products')
         .then(response => response.json())
         .then(data => setProducts(data.products))
   }, [])


   return(

       <>
         <h2>Products</h2>
         <Routes>
            <Route index element={<ProductsList products={products}/>}></Route>
            <Route path=":productId" element={<ProductsDetails/>}></Route>
         </Routes>
       </>
    )
}