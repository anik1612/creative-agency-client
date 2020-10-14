import React, { useContext, useState } from 'react';
import brandImg from '../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCommentAlt, faHdd } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import Order from '../../components/Order/Order';
import ServiceList from '../../components/ServiceList/ServiceList';
import Review from '../../components/Review/Review';

const Customer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isOrder, setIsOrder] = useState(true)
    const [isServiceList, setIsServiceList] = useState(false)
    const [isReview, setIsReview] = useState(false)

    const handleOrder = () => {
        setIsOrder(true)
        setIsServiceList(false)
        setIsReview(false)
    }

    const handleServiceList = () => {
        setIsOrder(false)
        setIsServiceList(true)
        setIsReview(false)
    }

    const handleReview = () => {
        setIsOrder(false)
        setIsServiceList(false)
        setIsReview(true)
    }

    return (
        <div className='customer-container'>
            <div className='row px-5 pt-4'>
                <div className="col-md-2 d-flex flex-column">
                    <div>
                        <Link to='/home'>
                            <img style={{ height: '50px' }} src={brandImg} alt="brand-img" />
                        </Link>
                    </div>
                    <div className="mt-5">
                        <Link onClick={handleOrder} className='text-decoration-none text-dark ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faCartPlus} /> Order</Link>
                    </div>
                    <div className='mt-2'>
                        <Link onClick={handleServiceList} className='text-decoration-none text-dark ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faHdd} /> Service List</Link>
                    </div>
                    <div onClick={handleReview} className='mt-2'>
                        <Link className='text-decoration-none text-dark ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faCommentAlt} /> Review</Link>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4>{isOrder && 'Order'} {isServiceList && 'Service List'} {isReview && 'Review'}</h4>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='mr-2'>
                                <img style={{ height: '43px', borderRadius: '50%' }} src={loggedInUser.image} alt="" />
                            </div>
                            <div>
                                <h6>{loggedInUser.name}</h6>
                            </div>
                        </div>
                    </div>

                    {/* conditional div render */}
                    <div className="mt-5 p-5" style={{ backgroundColor: '#F4F7FC' }}>
                        {isOrder && <Order />} {isServiceList && <ServiceList />} {isReview && <Review />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;