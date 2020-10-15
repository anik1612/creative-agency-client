import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import uploadIcon from '../../images/logos/upload.png'

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                swal('Good Job', 'New service created successfully!', 'success')
            })
    };

    return (
        <div className='row p-5'>

            <form onSubmit={handleSubmit(onSubmit)} className='row d-flex'>

                <div className='col-md-7'>
                    <label for='name'>Service Title</label>
                    <input className='form-control mb-2' type="text" placeholder="Service title" name="taskName" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.taskName && '* This field is required'}</p>
                </div>

                <div className='col-md-3' style={{ marginTop: '30px' }}>
                    <div class="button-wrapper">
                        <span class="label">
                            <img src={uploadIcon} alt="upload-icon" /> Upload image
                        </span>
                        <input type="file" name="upload" id="upload" class="upload-box" placeholder="Upload File" ref={register({ required: true })} />
                        <p className='text-danger mb-0'>{errors.upload && '* This field is required'}</p>
                    </div>
                </div>

                <div className='col-md-7'>
                    <div className="form-group">
                        <label for="Textarea">Description</label>
                        <textarea name="description" placeholder="Enter Description" className="form-control" id="Textarea" rows="4" ref={register({ required: true })} ></textarea>
                        <p className='text-danger mb-0'>{errors.description && '* This field is required'}</p>
                    </div>
                </div>

                <div className='col-md-3 mb-3 align-self-end'>
                    <input className='btn btn-success btn-block' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddService;