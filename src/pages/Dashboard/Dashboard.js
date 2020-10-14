import React, { useContext, useEffect, useState } from 'react';
import brandImg from '../../images/logos/logo.png'
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCommentAlt, faHdd, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import Order from '../../components/Order/Order';
import ServiceList from '../../components/ServiceList/ServiceList';
import Review from '../../components/Review/Review';
import MakeAdmin from '../../components/MakeAdmin/MakeAdmin';
import AddService from '../../components/AddService/AddService';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isOrder, setIsOrder] = useState(true)
    const [isServiceList, setIsServiceList] = useState(false)
    const [isReview, setIsReview] = useState(false)
    const [isMakeAdmin, setIsMakeAdmin] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAddService, setIsAddService] = useState(false)


    useEffect(() => {
        fetch('http://localhost:5000/isAdmin?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIsAdmin(true)
                }
            })
    })

    let history = useHistory();

    const handleOrder = () => {
        setIsOrder(true)
        setIsServiceList(false)
        setIsReview(false)
        setIsMakeAdmin(false)
        setIsAddService(false)
        history.push(`/dashboard/${loggedInUser.name.split(' ')[0]}/newOrders`)
    }

    const handleServiceList = () => {
        setIsOrder(false)
        setIsServiceList(true)
        setIsReview(false)
        setIsMakeAdmin(false)
        setIsAddService(false)
        history.push(`/dashboard/${loggedInUser.name.split(' ')[0]}/placedOrders`)
    }

    const handleReview = () => {
        setIsOrder(false)
        setIsServiceList(false)
        setIsReview(true)
        setIsAddService(false)
        setIsMakeAdmin(false)
        history.push(`/dashboard/${loggedInUser.name.split(' ')[0]}/review`)
    }

    const handleAdmin = () => {
        setIsOrder(false)
        setIsServiceList(false)
        setIsReview(false)
        setIsAddService(false)
        setIsMakeAdmin(true)
        history.push(`/admin/makeAdmin`)
    }

    const handleAddService = () => {
        setIsOrder(false)
        setIsServiceList(false)
        setIsReview(false)
        setIsAddService(true)
        setIsMakeAdmin(false)
        history.push(`/admin/makeAdmin`)
    }

    return (
        <div className='dashboard-container'>
            <div className='row px-5 pt-4'>
                <div className="col-md-2 d-flex flex-column">
                    <div>
                        <Link to='/home'>
                            <img style={{ height: '50px' }} src={brandImg} alt="brand-img" />
                        </Link>
                    </div>
                    {/* customer portion */}
                    {!isAdmin && <div>
                        <div className="mt-5">
                            <Link onClick={handleOrder} className='text-decoration-none text-dark ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faCartPlus} /> Order</Link>
                        </div>
                        <div className='mt-2'>
                            <Link onClick={handleServiceList} className='text-decoration-none text-dark ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faHdd} /> Service List</Link>
                        </div>
                        <div onClick={handleReview} className='mt-2'>
                            <Link className='text-decoration-none text-dark ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faCommentAlt} /> Review</Link>
                        </div>
                    </div>}

                    {/* admin portion */}
                    {isAdmin && <div>
                        <div className='mt-5'>
                            <Link onClick={handleServiceList} className='text-decoration-none text-dark ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faHdd} /> Service List</Link>
                        </div>
                        <div className='mt-2'>
                            <Link onClick={handleAddService} className='text-decoration-none text-dark ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faHdd} /> Add Service</Link>
                        </div>
                        <div onClick={handleAdmin} className='mt-2'>
                            <Link className='text-decoration-none text-dark ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faUserPlus} /> Make Admin</Link>
                        </div>
                    </div>}
                </div>
                <div className="col-md-9">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4>{isOrder && 'Order'}
                                {isServiceList && 'Service List'}
                                {isReview && 'Review'}
                                {isMakeAdmin && 'Add New Admin'}
                                {isReview && 'Review'}
                                {isAddService && 'Add Services'}
                            </h4>
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
                    <div className="mt-5" style={{ backgroundColor: '#F4F7FC' }}>
                        {isOrder && <Order />}
                        {!isAdmin && isServiceList && <ServiceList isAdmin={true}/>}
                        {isAdmin && isServiceList && <ServiceList isAdmin={false}/>}
                        {isReview && <Review />}
                        {isAddService && <AddService />}
                        {isMakeAdmin && <MakeAdmin />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;