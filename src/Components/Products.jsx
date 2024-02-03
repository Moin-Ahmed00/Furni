import React from 'react'

const Products = () => {
  return (
    <div className='container-fluid bg-light p-0 py-5 m-0 w-100 h-100'>
      <div className="products-r1 row m-0 px-5 w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="products-c1  col-3 h-100 p-0 m-0 pt-5 gap-3 ">
          <h2>Crafted with<br />excellent<br />material.</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nulla cupiditate quod natus consequuntur voluptatem fugiat, dolores eius quaerat repellendus.</p>
          <button className='btn border rounded-pill w-50 bg-dark text-light '>Explore</button>
        </div>
        <div className="image-wrapper col-3 h-100 p-0 m-0">
          <img src='https://themewagon.github.io/furni/images/product-1.png' alt=''></img>
          <h4 className='text-center'>Nordic Chair</h4>
          <h5 className='text-center'>$50.00</h5>
        </div>
        <div className="image-wrapper col-3 h-100 m-0 p-0">
          <img src='https://themewagon.github.io/furni/images/product-2.png' alt=''></img>
          <h4 className='text-center'>Karuzo Aero Chair</h4>
          <h5 className='text-center'>$78.00</h5>
        </div>
        <div className="image-wrapper col-3 h-100 m-0 p-0">
          <img src='https://themewagon.github.io/furni/images/product-3.png' alt=''></img>
          <h4 className='text-center'>Ergonomic Chair</h4>
          <h5 className='text-center'>$43.00</h5>
        </div>
      </div>
    </div>
  )
}

export default Products
