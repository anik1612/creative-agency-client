import React from 'react';
import Header from '../Header/Header';
import './HomeBanner.css'
import bannerImg from '../../images/logos/Frame.png'
import slack from '../../images/logos/slack.png'
import airbnb from '../../images/logos/airbnb.png'
import google from '../../images/logos/google.png'
import netflix from '../../images/logos/netflix.png'
import uber from '../../images/logos/uber.png'
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className='homebanner-section'>
            <div className="homebanner-container pb-5 mb-5">
                <div className='container px-md-0 px-3 '>
                    <Header />
                    <div className='row align-items-center justify-content-between mt-3'>
                        <div className="col-md-6 ml-md-0 ml-5 pl-sm-5 pl-md-3">
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
                            <Link to='/dashboard' className='btn btn-dark text-white px-5 py-2 mb-3'>Hire Us</Link>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid pb-5" src={bannerImg} alt="banner-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mb-5 pb-5'>
                <div className='row px-0 d-flex justify-content-between'>
                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '40px' }} src={slack} alt="" />
                    </div>
                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '45px' }} src={google} alt="" />
                    </div>

                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '45px' }} src={uber} alt="" />
                    </div>
                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '50px' }} src={netflix} alt="" />
                    </div>
                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '50px' }} src={airbnb} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;