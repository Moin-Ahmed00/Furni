import React from 'react'
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import RepeatTwoToneIcon from '@mui/icons-material/RepeatTwoTone';

const ChooseUs = () => {
    return (
        <div className='container-fluid bg-light p-0 m-0 w-100 h-100'>
            <div className="row m-0 p-0 h-100 w-100">
                <div className="wcu-1 col-lg-6 col-md-7 col-sm-12 m-0 p-0 ps-5 h-100">
                    <h2>Why Choose Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in tempore minus alias ut eligendi.</p>
                    <div className="rw-1 row p-0 m-0">

                        <div className="fast col-6 m-0 p-0">
                            <LocalShippingTwoToneIcon></LocalShippingTwoToneIcon>
                            <h6>Fast & Free Shipping</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis consectetur.</p>
                        </div>
                        <div className="easy col-6 m-0 p-0">
                            <LocalMallTwoToneIcon></LocalMallTwoToneIcon>
                            <h6>Easy to Shop</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis consectetur.</p>
                        </div>
                        <div className="support col-6 m-0 p-0">
                            <SupportTwoToneIcon></SupportTwoToneIcon>
                            <h6>24/7 Support</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis consectetur.</p>
                        </div>
                        <div className="free col-6 m-0 p-0">
                            <RepeatTwoToneIcon></RepeatTwoToneIcon>
                            <h6>Hassel Free Returns</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis consectetur.</p>
                        </div>
                    </div>


                </div>
                <div className="wcu-2 col-lg-6 col-md-5 col-sm-0">
                    <div className="row m-0 p-0 h-100">
                        <div className="col-lg-8 offset-lg-3">
                            <img className='chus-img' src='https://themewagon.github.io/furni/images/why-choose-us-img.jpg' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs
