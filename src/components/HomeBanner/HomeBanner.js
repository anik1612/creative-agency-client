import React from 'react';
import Header from '../Header/Header';
import './HomeBanner.css'
import bannerImg from '../../images/logos/Frame.png'

const HomeBanner = () => {
    return (
        <div className="homebanner-container pb-5">
            <div className='container px-md-0 px-3 '>
                <Header />
                <div className='row align-items-center justify-content-between mt-3'>
                    <div className="col-md-6 ml-md-0 ml-5 pl-sm-5 pl-md-0">
                        <h1 className='text-dark font-weight-bold mb-4'>
                            Let's Grow Your <br /> 
                            Brand To The <br />
                            Next Level
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur <br /> 
                            adipiscing elit. Purus commodo ipsum duis <br />
                            laoreet maecenas. Feugiat
                        </p>
                        <button className='btn btn-dark text-white px-5 py-2'>Hire Us</button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid pb-5" src={bannerImg} alt="banner-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;