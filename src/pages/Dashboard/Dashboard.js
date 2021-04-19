import React, { useContext, useEffect, useState } from 'react';
import brandImg from '../../images/logos/logo.png'
import { Link, NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCommentAlt, faHdd, faMinus, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import Order from '../../components/Order/Order';
import ServiceList from '../../components/ServiceList/ServiceList';
import Review from '../../components/Review/Review';
import MakeAdmin from '../../components/MakeAdmin/MakeAdmin';
import AddService from '../../components/AddService/AddService';
import './Dashboard.css'
import DeleteService from '../../components/ManageService/DeleteService';

const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext)
    const [isOrder, setIsOrder] = useState(false)
    const [isServiceList, setIsServiceList] = useState(true)
    const [isReview, setIsReview] = useState(false)
    const [isMakeAdmin, setIsMakeAdmin] = useState(false)
    const [isAdmin, setIsAdmin] = useState()
    const [isAddService, setIsAddService] = useState(false)
    const [isDeleteService, setIsDeleteService] = useState(false)
    let history = useHistory();

    useEffect(() => {
        fetch('https://creative-agency-as.herokuapp.com/isAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIsAdmin(true)
                    setIsServiceList(true)
                    setIsOrder(false)
                } else {
                    setIsAdmin(false)
                    setIsServiceList(false)
                    setIsOrder(true)
                }
            })
    }, [loggedInUser.email])

    const handleOrder = () => {
        setIsOrder(true)
        setIsServiceList(false)
        setIsReview(false)
        setIsMakeAdmin(false)
        setIsAddService(false)
        setIsDeleteService(false)
        history.push()
    }

    const handleServiceList = () => {
        setIsOrder(false)
        setIsServiceList(true)
        setIsReview(false)
        setIsMakeAdmin(false)
        setIsAddService(false)
        setIsDeleteService(false)
        history.push(`/dashboard/${loggedInUser.name.split(' ')[0]}/orders`)
    }

    const handleReview = () => {
        setIsOrder(false)
        setIsServiceList(false)
        setIsReview(true)
        setIsMakeAdmin(false)
        setIsAddService(false)
        setIsDeleteService(false)
        history.push(`/dashboard/${loggedInUser.name.split(' ')[0]}/review`)
    }

    const handleAdmin = () => {
        setIsOrder(false)
        setIsReview(false)
        setIsServiceList(false)
        setIsAddService(false)
        setIsMakeAdmin(true)
        setIsDeleteService(false)
    }

    const handleAddService = () => {
        setIsOrder(false)
        setIsReview(false)
        setIsServiceList(false)
        setIsAddService(true)
        setIsMakeAdmin(false)
        setIsDeleteService(false)
    }

    const handleDeleteService = () => {
        setIsOrder(false)
        setIsReview(false)
        setIsServiceList(false)
        setIsAddService(false)
        setIsMakeAdmin(false)
        setIsDeleteService(true)
    }

    return (
        <div className='dashboard-container'>
            <div className='row px-md-5 pt-3 mt-3'>
                <div className="col-md-2 d-flex flex-column">
                    <div>
                        <Link to='/home'>
                            <img style={{ height: '50px' }} src={brandImg} alt="brand-img" />
                        </Link>
                    </div>
                    {/* customer portion */}
                    {isAdmin === false && <div>
                        <div className="mt-5">
                            <NavLink 
                            activeClassName='nav-active'
                            to={`/dashboard/${loggedInUser.name.split(' ')[0]}/createOrder`} 
                            onClick={handleOrder} 
                            className='text-decoration-none text-success ml-3 mb-5 pb-5'>
                            <FontAwesomeIcon className="mr-1" icon={faCartPlus} /> Order</NavLink>
                        </div>

                        <div className='mt-2'>
                            <NavLink  
                            activeClassName='nav-active'
                            to={`/dashboard/${loggedInUser.name.split(' ')[0]}/orders`}
                            onClick={handleServiceList} 
                            className='text-decoration-none text-success ml-3 mb-5 pb-5'>
                            <FontAwesomeIcon className="mr-1" icon={faHdd} /> Service List</NavLink>
                        </div>
                        
                        <div className='mt-2'>
                            <NavLink 
                            activeClassName='nav-active'
                            to={`/dashboard/${loggedInUser.name.split(' ')[0]}/review`}
                            onClick={handleReview}  
                            className='text-decoration-none text-success ml-3 mb-5 pb-5'>
                            <FontAwesomeIcon className="mr-1" icon={faCommentAlt} /> Review</NavLink>
                        </div>
                    </div>}

                    {/* admin portion */}
                    {isAdmin === true && <div>
                        <div className='mt-5'>
                            <NavLink to='/dashboard/order' activeClassName='nav-active' onClick={handleServiceList} className='text-decoration-none text-success ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faHdd} /> Service List</NavLink>
                        </div>
                        <div className='mt-3'>
                            <NavLink to='/dashboard/addService' activeClassName='nav-active' onClick={handleAddService} className='text-decoration-none text-success ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faPlus} /> Add Service</NavLink>
                        </div>
                        <div className='mt-3'>
                            <NavLink to='/dashboard/deleteService' activeClassName='nav-active' onClick={handleDeleteService} className='text-decoration-none text-success ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faMinus} /> Delete Service</NavLink>
                        </div>
                        <div onClick={handleAdmin} className='mt-3'>
                            <NavLink to='/dashboard/makeAdmin' activeClassName='nav-active' className='text-decoration-none text-success ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faUserPlus} /> Make Admin</NavLink>
                        </div>
                    </div>}
                </div>
                <div className="col-md-9">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='mt-md-2 mt-4'>
                            <h4>{isOrder && 'Order'}
                                {isServiceList && 'Service List'}
                                {isReview && 'Review'}
                                {isMakeAdmin && 'Add New Admin'}
                                {isAddService && 'Add Services'}
                                {isDeleteService && 'Delete Services'}
                            </h4>
                        </div>
                        <div className='d-flex align-items-center mt-md-1 mt-4'>
                            <div className='mr-2'>
                                <img style={{ height: '43px', borderRadius: '50%' }} src={loggedInUser.image} alt="" />
                            </div>
                            <div>
                                <h6 className='mb-0'>{loggedInUser.name}</h6>
                            </div>
                        </div>
                    </div>

                    {/* conditional div render */}
                    <div className="mt-4" style={{ backgroundColor: '#F4F7FC' }}>
                        {isOrder && <Order />}
                        {isAdmin === true && isServiceList && <ServiceList isAdmin={true} />}
                        {isAdmin === false && isServiceList && <ServiceList isAdmin={false} />}
                        {isReview && <Review />}
                        {isAddService && <AddService />}
                        {isDeleteService && <DeleteService />}
                        {isMakeAdmin && <MakeAdmin />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;