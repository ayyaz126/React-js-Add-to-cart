import React from 'react'

function Cart(props) {
    const{cartItems, onAdd, onRemove} = props;
    // calculating the amount of cart items
    const itemsPrice = cartItems.reduce((a,c) => a +  c.qty*  c.price, 0);
    const taxPrice = itemsPrice *0.005;
    const shipping = itemsPrice > 1999  ? 0 : 200;
    const totalPrice = itemsPrice + taxPrice+shipping;
 
  return (
    <div className='container'>
        <h1 className='text-center display-3' > My Cart  </h1>
        <table className='table'>
          <tr>
              <th>Product</th>
              <th>Image</th>
              <th>price</th>
              <th>Add </th>
              <th>Quantity </th>
              <th>Remove </th>       
          </tr>  
           {
               cartItems.map((item) =>(
                  <tr>
                     <td> {item.name} </td> 
                     <td> <img src={item.image} style={{width:"100px" , height:"100px"}} /> </td>
                     <td> {item. price} </td> 
                     <td>  <button onClick={()=>onAdd(item)}  className='btn btn-info ' > + </button>  </td>
                     <td> {item.qty} </td>
                     <td>  <button onClick={()=>onRemove(item)}  className='btn btn-danger ' > - </button>  </td>
                  </tr> 
               ))
           }
        </table>
        <p className='lead' ><b> Total Price : Rs, {totalPrice} </b> </p>
        <small> Tax Included: Rs, {taxPrice} </small>
    </div>
  )
}

export default Cart;

