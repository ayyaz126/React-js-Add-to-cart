import React from 'react'

function Navbar(props) {

  return (
    <div>
        
<nav className= "navbar navbar-light bg-light">
    <i className="glyphicon glyphicon-shopping-cart" > <span className="badge badge-light">{props.cartItems}</span> </i>

</nav>
    </div>
  )
}

export default Navbar