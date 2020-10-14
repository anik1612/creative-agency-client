import React from 'react';
import './Footer.css'
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const praStyle = {
    color: 'rgba(0, 0, 0, 0.7);'
}

const Footer = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/privateMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                swal("Thank You!", "You message send successfully!", "success");
            }
        })
    };
    return (
        <div className='footer-container'>
            <div className='container'> 
                <div className='row d-flex justify-content-between pt-5'>
                    <div className="col-md-6 mt-4">
                        <h3 className='mb-4' style={{fontWeight: '600'}}>Let us handle your <br />
                    project, professionally.</h3>
                        <p style={{praStyle}}>
                            With well written codes, we build amazing apps for all <br />
                    platforms, mobile and web apps in general.
                    </p>
                    </div>
                    <div className="col-md-6 mt-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" className='form-control mb-3' placeholder="Your email address" name="email" ref={register({ required: true, maxLength: 80, pattern: /^\S+@\S+\.\S+$/})} />
                            <p className="text-danger">{errors.email && <span>* This field is required / Use Valid Email</span>}</p>
                            <input className='form-control mb-3' type="text" placeholder="Your name / company's name" name="name" ref={register({ required: true, maxLength: 100 })} />
                            <p className="text-danger">{errors.name && <span>* This field is required</span>}</p>
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Your message" name='message' rows="7" ref={register({ required: true })}></textarea>
                            </div>
                            <p className="text-danger">{errors.message && <span>* This field is required</span>}</p>
                            <input className='btn btn-dark text-white px-4' type="submit" value='send' />
                        </form>
                    </div>
                </div>
                <div className='pt-5'>
                    <p style={{praStyle}} className='text-center pb-3 mb-0 pt-5'>&#169; copyright - <span className='text-success'>Anik Sarker</span> || {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;