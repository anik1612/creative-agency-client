import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import ServiceTask from '../ServiceTask/ServiceTask';

const Services = () => {
    const [allService, setAllService] = useState([])
    const [preloader, setPreloader] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setAllService(data)
            setPreloader(false)
        })
    })
    // const loadData = () => {
    //     fetch('http://localhost:5000/addService', {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(allService)
    //     })
    // }

    return (
        <div className='container'>
            <h3 className='text-center mb-5' style={{ fontWeight: '600' }}>Provide awesome<span style={{ color: '#7AB259' }}> services</span></h3>
            <div className='row mb-5'>
            {
                preloader && <Preloader />
            }
            {
                allService.map(service => <ServiceTask service={service} />)
            }
            </div>
        </div>
    );
};

export default Services;