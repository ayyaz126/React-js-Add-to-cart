import React, { useState } from 'react'
import Data from './components/Data';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const {products} = Data;
//hool for adding the products into cart
const[cartItems,setCartItems] = useState ([]);

  //function for adding the products intpp card.
  const onAdd = (product) => {

   //check if the products is already exist Card or not
    const exist = cartItems.find((x) => x.id===product.id);
    if (exist) {
      //increment its quantity
      setCartItems(
        cartItems.map((x) => x.id === product.id ? {...exist , qty: exist.qty+1} : x)
      );
      console.log(cartItems);
    }
    else{
      // when we click add to cart button for 1st time

      setCartItems([...cartItems, {...product,qty:1} ]);
      console.log(cartItems);
    }
  }
  //funtion for removing the product from the cart;
  const onRemove = (product) => {

    //check if the products is already exist Card or not
     const exist = cartItems.find((x) => x.id===product.id);
     if (exist. qty === 1 ) {
       //Remove produst

       setCartItems(
          cartItems.filter((x) => x.id !== product.id ) ); 
     }
     else{
       // when we click add to cart button for 1st time
 
       setCartItems(
        cartItems.map((x) => x.id === product.id ? {...exist , qty: exist.qty-1} : x)
       );
 
     }
   }


  return (
    <div  >
      <Navbar cartItems = {cartItems.length}  />
          <h1 className='text-center display-3' > Add to Cart in Reactjs </h1>
        < Products products = {products}  onAdd=  {onAdd} />
        <hr/>
        <Cart  cartItems={cartItems}  onAdd={onAdd}  onRemove={onRemove} />
    </div>
  )
}

export default App;