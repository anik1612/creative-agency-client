import React, { useEffect, useState } from 'react';
import FeedbackList from '../FeedbackList/FeedbackList';
const ClientFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/feedbacks')
        .then(res => res.json())
        .then(data => {
            setFeedbacks(data)
        })
    })

    //  const loadData = () => {
    //     fetch('http://localhost:5000/insertFeedback', {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(feedbacks)
    //     })
    // }

    return (
        <div className='container'>
            <h3 className='font-weight-bold text-center mb-5 pt-5 pb-3'>Clients <span style={{ color: '#7AB259' }}> Feedback</span></h3>
            <div className='row d-flex justify-content-center mb-5 pb-5'>
                {
                    feedbacks.map(feedback => <FeedbackList feedback={feedback}/>)
                }
            </div>
        </div>
    );
};

export default ClientFeedback;