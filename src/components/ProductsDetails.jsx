import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";

export default function ProductsDetails(){
//el hook useParams devuelve un objeto tipo clave valor
    const {productId} = useParams(); 
    const [product, setProduct] = useState(null);
    
    useEffect(()=>{ //para consumir un api 
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(response => response.json())
            .then(data => console.log(data) || setProduct(data))
    }, [productId])

    return(
        <>
        {!product && <em>Loading...</em>}
         {product && (
            <>
             <h1>Details: {product.title}</h1>  
             <img src={product.thumbnail} alt="imagenes" width={450} />
             <p>Caterory: {product.category}</p>
             <p>Description: {product.description}</p>
             <Link to="/products">Back to products page</Link>
            </>  
         )}
        </>
       
    )
}