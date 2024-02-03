import React from 'react'

const ModernDesign = () => {
    return (
        <div className='container-fluid bg-light p-0 pt-3 m-0 w-100 h-100'>
            <div className="row m-0 p-0 w-100 h-100">
                <div className="image-grid col-xl-7 col-lg-6 col-md-6 m-0 ps-5 p-0 h-100 d-flex">
                    <img id='image1' className='rounded' src='https://themewagon.github.io/furni/images/img-grid-1.jpg' alt=''></img>
                    <img id='image2' className='rounded' src='https://themewagon.github.io/furni/images/img-grid-2.jpg' alt=''></img>
                    <img id='image3' className='rounded' src='https://themewagon.github.io/furni/images/img-grid-3.jpg' alt=''></img>
                </div>
                <div className="text-grid col-xl-5 col-lg-6 col-md-6 m-0 p-0 pe-5">
                    <h2>We Help You Make Modern Interior Design</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur optio unde. Veniam, iusto accusamus! Harum deleniti soluta laboriosam magni aliquid dolor. Ut ipsum saepe voluptate assumenda maiores itaque modi pariatur omnis exercitationem architecto.</p>
                    <div className="row m-0 p-0 ">
                        <div className="col-6 m-0 p-0">
                            <ul id='ul-1'>
                                <li>Lorem ipsum dolor sit amet amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet amet consectetur.</li>
                            </ul>
                        </div>
                        <div className="col-6 m-0 p-0">
                            <ul id='ul-2'>
                                <li>Lorem ipsum dolor sit amet amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet amet consectetur.</li>
                            </ul>
                        </div>


                    </div>
                    <button className='expo-button bg-dark text-light mt-3 btn border rounded-pill'>Explore</button>
                </div>
            </div>
        </div>
    )
}

export default ModernDesign
