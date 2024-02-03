import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Appbar = () => {
    return (

        <div className='container  w-100'>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-3 col-2 m-0 p-0">
                    <h1 className='furni w-100 h-100 m-0 text-light'>Furni</h1>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-9 col-10 ">
                    <div className="row h-100">
                        <div className="navspan col-lg-8 col-md-10 col-sm-10 col-9 d-flex justify-content-between align-items-center text-light">
                            <span>Home</span>
                            <span>About Us</span>
                            <span>Services</span>
                            <span>Blog</span>
                            <span>Contact Us</span>
                        </div>
                        <div className="col-lg-2 offset-lg-2 col-md-2 offset-md-0 col-sm-2 offset-sm-0 col-3 offset-0 text-light d-flex justify-content-between align-items-center">
                            <PersonOutlineOutlinedIcon ></PersonOutlineOutlinedIcon>
                            <ShoppingCartOutlinedIcon sx={{ color: 'white' }}></ShoppingCartOutlinedIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Appbar
