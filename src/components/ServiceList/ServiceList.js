import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const ServiceList = () => {
    const [placedOrders, setPlacedOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5000/customerOrders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setPlacedOrders(data)
            })
    }, [])

    return (
        <div className='row d-flex justify-content-between'>
            {
                placedOrders.map(placedOrder => {
                    return (
                        <div className='col-md-5'>
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
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ServiceList;