import React, { useEffect, useState } from 'react';
import FeedbackList from '../FeedbackList/FeedbackList';
import Preloader from '../Preloader/Preloader';
const ClientFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    const [preloader, setPreloader] = useState(true)

    useEffect(() => {
        fetch('https://creative-agency-as.herokuapp.com/feedbacks')
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data)
                setPreloader(false)
            })
    }, [])

    return (
        <div className='container'>
            <h3 className='font-weight-bold text-center mb-5 pt-5 pb-3'>Clients <span style={{ color: '#7AB259' }}> Feedback</span></h3>
            <div className='row d-flex justify-content-center mb-5 pb-5'>
                {
                    preloader && <Preloader />
                }
                {
                    feedbacks.map(feedback => <FeedbackList feedback={feedback} key={feedback._id} />)
                }
            </div>
        </div>
    );
};

export default ClientFeedback;