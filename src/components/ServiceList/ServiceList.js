import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import PlacedOrderList from '../PlacedOrderList/PlacedOrderList';
import Preloader from '../Preloader/Preloader';

const ServiceList = ({ isAdmin }) => {
    const [placedOrders, setPlacedOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [preloader, setPreloader] = useState(true)

    useEffect(() => {
        fetch('https://creative-agency-as.herokuapp.com/customerOrders?email=' + loggedInUser.email)
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
                            {isAdmin && <div className='col-md-5 mb-1 py-4'>
                                <div className='bg-white py-2 px-4 border rounded'>
                                    <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <div>
                                            {
                                                placedOrder.src && <img style={{ width: '55px' }} className="mx-auto" src={`data:image/png;base64,${placedOrder.src}`} alt='service-task-img' />
                                            }
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
            {!isAdmin && <table class='table table-white my-4 mx-2'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Details</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                {/* pass data to placed order list components */}
                {
                    placedOrders.map(placedOrder => <PlacedOrderList placedOrder={placedOrder} key={placedOrder._id} />)
                }
            </table>
            }

        </div >
    );
};

export default ServiceList;