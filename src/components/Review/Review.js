import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { UserContext } from '../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, errors } = useForm();

    const randomPhoto = [
        'https://i.ibb.co/rQVR3zn/customer-1.png',
        'https://i.ibb.co/V9g32W2/customer-2.png',
        'https://i.ibb.co/k11nnGg/customer-3.png'
    ]  
    const randomIndex = Math.floor(Math.random() * (3 - 0) + 0)
    const src = randomPhoto[randomIndex]

    const onSubmit = data => {
        fetch('http://localhost:5000/insertFeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data, src})
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    swal('Thank You', 'Review Received!', 'success')
                }
            })
    };

    return (
        <div>
            <div className='row'>
                <div className='col-md-8'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className='form-control mb-2' type="text" placeholder="Your name" defaultValue={loggedInUser.name} name="name" ref={register({ required: true })} />
                        <p className='text-danger mb-0'>{errors.name && '* This field is required'}</p>

                        <input className='form-control mb-2' type="text" placeholder="Company's name, Designation" name="designation" ref={register({ required: true })} />
                        <p className='text-danger mb-0'>{errors.designation && '* This field is required'}</p>

                        <textarea className='form-control mb-2' rows="5" placeholder="Description" name="feedback" ref={register({ required: true })} />
                        <p className='text-danger mb-0'>{errors.feedback && '* This field is required'}</p>

                        <input className='btn btn-dark px-5' type="submit" value="submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;