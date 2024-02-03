import React from 'react'
import image from "../Components/Assets/couch.png"

const Home = () => {
    return (
        <div className='container h-75'>
            <div className="row h-100">
                <div className="headline col-lg-5 gap-lg-4 col-md-5 gap-md-2 col-sm-7 gap-sm-1 col-5 gap-xs-0 p-0 m-0 pt-5 d-flex flex-column justify-content-start">
                    <h1 className='text-light h1'>Modern Interior <br /> Design Studio</h1 >
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam fugit enim est officia voluptatem recusandae fugiat sint eos voluptates?
                    </p>
                    <span className='d-flex w-100 gap-lg-5 gap-md-5 gap-sm-5 align-items-center'>
                        <button className='shop-button bg-warning btn border rounded-pill'>Shop Now</button>
                        <button className='expo-button btn border rounded-pill'>Explore</button>
                    </span>
                </div>
                <div className='home-img col-lg-7 col-md-7 col-sm-5 col-7 p-0 h-100'>
                    <img className='couch h-100' src={image} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Home
