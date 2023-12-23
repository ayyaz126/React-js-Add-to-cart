import React from 'react'

function Products(props) {
    const {products, onAdd} = props;
  return (
    <div className='container'>
        <h1 className='text-center display-4' > List of All products </h1>
        <hr/>
        <div className='row'>
          {
              products.map((pro) => (
                <div className='col-md-4  mb-4' >
                <div class="card">
                <img class="card-img-top" style={{height: '300px'}}  src={pro.image} />
                <div class="card-body">
                  <h5 class="card-title">{pro.name}</h5>
                  <p class="card-text">{pro. price}</p>
                  <button onClick={()=>onAdd(pro)} class="btn btn-primary">Add to Cart</button>
                </div>
              </div>
              </div>  
              ))
          }
        </div>
    </div>
  )
}

export default Products;