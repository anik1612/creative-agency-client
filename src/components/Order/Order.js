import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { SelectedServiceContext, UserContext } from '../../App';
import uploadIcon from '../../images/logos/upload.png'
import './Order.css'

const Order = () => {
    const [selectedService, setSelectedService] = useContext(SelectedServiceContext)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const {description, src} = selectedService

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://creative-agency-as.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data, description, src, status: 'pending'})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                swal('Good Job', 'Your Ordered Placed!', 'success')
            }
        })
    };

    return (
        <div className='row p-md-5'>
            <div className='col-md-8'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control mb-2' type="text" placeholder="First name / company's name" defaultValue={loggedInUser.name} name="name" ref={register({ required: true })} />
                    <p className='text-danger mb-0'>{errors.name && '* This field is required'}</p>

                    <input className='form-control mb-2' type="email" placeholder="Your email address" defaultValue={loggedInUser.email} name="email" ref={register({
                        required: true, maxLength: 100, pattern: /^\S+@\S+\.\S+$/
                    })} />
                    <p className='text-danger mb-0'>{errors.email && '* This field is required'}</p>

                    <input className='form-control mb-2' type="text" placeholder="Service" defaultValue={selectedService.taskName} name="service" ref={register({ required: true })} />
                    <p className='text-danger mb-0'>{errors.service && '* This field is required'}</p>
                    
                    <textarea className='form-control mb-2' rows="5" placeholder="Project Details" name="projectDetails" ref={register({ required: true })} />
                    
                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-6 px-0'>
                            <input className='form-control mb-2' type="text" placeholder="Price" name="price" ref={register({ required: true })} />
                            <p className='text-danger mb-0'>{errors.price && '* This field is required'}</p>
                        </div>

                        <div className='col-md-5 px-0 mb-2'>
                            <div className="button-wrapper">
                                <span className="label">
                                    <img src={uploadIcon} alt="upload-icon" /> Upload project File
                                </span>
                                <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" />
                            </div>
                        </div>
                    </div>
                    <input className='btn btn-dark px-5' type="submit" value="send" />
                </form>
            </div>
        </div>
    );
};

export default Order;