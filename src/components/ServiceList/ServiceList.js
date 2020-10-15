import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import PlacedOrderList from '../PlacedOrderList/PlacedOrderList';
import Preloader from '../Preloader/Preloader';

const ServiceList = ({ isAdmin }) => {
    const [placedOrders, setPlacedOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [preloader, setPreloader] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/customerOrders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setPlacedOrders(data)
                setPreloader(false);
            })
    }, [])

    return (
        <div className='row d-flex justify-content-center'>
            {
                preloader && <Preloader />
            }
            {
                placedOrders.map(placedOrder => {
                    return (
                        <>
                            {/* customer portion */}
                            {isAdmin && <div className='col-md-5 mb-3 p-5'>
                                <div className='bg-white py-2 px-4 border rounded'>
                                    <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <div>
                                            <img style={{ height: '50px' }} src={placedOrder.src} alt="" />
                                        </div>
                                        <div>
                                            {placedOrder.status === 'pending' && <h6 className='bg-danger text-white p-3 border rounded'>{placedOrder.status}</h6>}
                                            {placedOrder.status === 'on going' && <h6 className='bg-warning text-white p-3 border rounded'>{placedOrder.status}</h6>}
                                            {placedOrder.status === 'done' && <h6 className='bg-success text-white p-3 border rounded'>{placedOrder.status}</h6>}
                                        </div>
                                    </div>
                                    <div>
                                        <h4>{placedOrder.service}</h4>
                                        <p>
                                            {placedOrder.description}
                                        </p>
                                    </div>
                                </div>
                            </div>}
                        </>
                    )
                })
            }
            {/* admin portion */}
            {!isAdmin && <div className='col-md-12 mb-3'>
                <div className='d-flex flex-column container mb-3 p-0 mt-3'>
                    <div className='d-flex row border rounded' style={{ background: '#F5F6FA' }}>
                        <div className='col-md-2 p-1'>
                            <p className='font-weight-bold pl-4'>Name</p>
                        </div>
                        <div className='col-md-4 p-1'>
                            <p className='font-weight-bold'>Email ID</p>
                        </div>
                        <div className='col-md-2 p-1'>
                            <p className='font-weight-bold'>Service</p>
                        </div>
                        <div className='col-md-3 p-1'>
                            <p className='font-weight-bold text-center'>Project Details</p>
                        </div>
                        <div className='col-md-1 p-1'>
                            <p className='font-weight-bold'>Status</p>
                        </div>
                    </div>

                    {/* pass data to placed order list components */}
                    <div className=''>
                        {
                            placedOrders.map(placedOrder => <PlacedOrderList placedOrder={placedOrder} key={placedOrder._id} />)
                        }
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ServiceList;