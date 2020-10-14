import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const PlacedOrderList = ({ placedOrder }) => {
    const [color, setColor] = useState('')
    const [selectedOption, setSelectedOption] = useState(placedOrder.status)

    console.log(selectedOption, placedOrder._id)
    
    useEffect(() => {
        if (selectedOption === 'pending') {
            setColor('danger')
        } else if (selectedOption === 'on going') {
            setColor('warning')
        } else if (selectedOption === 'done') {
            setColor('success')
        }
        const id = placedOrder._id;
        const status = selectedOption;
        const data = {id, status}

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(resData =>{
            if(resData){
                swal('Update', 'Work status update successfully', 'success')
            }
        })
    }, [selectedOption])

    return (
        <div className='row mt-1 mx-2 mb-2 pt-2 px-1 pb-1 border-bottom bg-white'>
            <div className='col-md-2'>
                <p>{placedOrder.name}</p>
            </div>
            <div className='col-md-4 p-0'>
                <p>{placedOrder.email}</p>
            </div>
            <div className='col-md-3 p-0'>
                <p>{placedOrder.service}</p>
            </div>
            <div className='col-md-2 p-0'>
                <p>{placedOrder.projectDetails}</p>
            </div>
            <div className='col-md-1 p-0'>
                <form>
                    <select 
                    value={selectedOption}
                    onChange={e => setSelectedOption(e.target.value)}
                    className={`text-${color} border-0`} name="status">
                        <option value="pending">pending</option>
                        <option value="on going">on going</option>
                        <option value="done">done</option>       
                    </select>
                </form>
            </div>
        </div>
    );
};

export default PlacedOrderList;