// 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'

import { useEffect, useState } from "react";
import "./style.css"

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] =  useState(false);  
  async function fetchProducts() {
    try {
        setLoading(true)
      const response =
        await fetch(`https://dummyjson.com/products?limit=20&skip=
            ${count === 0 ? 0 : count * 20}`);
            const result = await response.json();
            
            if(result && result.products && result.products.length){
                setProducts((prevData)=> [...prevData, ...result.products]); //It creates a new array by spreading the elements of the previous data and appending the products from result.products.
                setLoading(false)
            }
            console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(()=>{
    if(products && products.length === 100)
    setDisableButton(true)
  },[products])

  if(loading){
    return <div>Loading Data !! Please wait</div>
  }


  return <div className="load-more-container">
    <div className="product-container">
        {
            products && products.length?
            products.map(item=> <div
            className="product" 
            key={item.id}>
                <img src = {item.thumbnail} alt="{item.title}"/>
                <p>{item.title}</p>
            
            </div>) 
            : null
        }
    </div>
    <div className="button-container">
        <button disabled={disableButton} onClick={()=> setCount(count+1)} >Load More Products</button>
        {
            disableButton?
            <p>You have reached end of page 
                100 products displayed
            </p>
            :null
        }
    </div>
  </div>;
}
