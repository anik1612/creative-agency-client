import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Preloader from '../Preloader/Preloader';

const DeleteService = () => {
	const [allService, setAllService] = useState([]);
	const [preloader, setPreloader] = useState(true);

	useEffect(() => {
		fetch('https://creative-agency-as.herokuapp.com/services')
			.then((res) => res.json())
			.then((data) => {
				setAllService(data);
				setPreloader(false);
			});
	}, []);

	console.log(allService);

	const handleDeleteService = (id) => {
		fetch(`https://creative-agency-as.herokuapp.com/deleteService/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					const remainService = allService.filter(
						(service) => service._id !== id
					);
					setAllService(remainService);
					swal('Success', `${data.message}`, 'success');
				} else {
					swal('Sorry', `${data.message}`, 'error');
				}
			});
	};

	return (
		<div className='row p-md-5'>
			{preloader && <Preloader />}
			{
				<table class='table table-white my-4 mx-2'>
					<thead className='thead-dark text-center'>
						<tr>
							<th scope='col'>Service Name</th>
							<th scope='col'>Service ID</th>
							<th scope='col'>Service Image</th>
							<th scope='col'>Action</th>
						</tr>
					</thead>
					{allService.map((service) => {
						return (
							<tbody>
								<tr className='bg-white text-center'>
									<th scope='row'>{service.taskName}</th>
									<td>{service._id}</td>
									<td>
										<img
											height='33px'
											width='33px'
											src={`data:image/jpeg;base64,${service?.image.img}`}
											alt='service-img'
										/>
									</td>
									<td>
										<button
											onClick={() =>
												handleDeleteService(service._id)
											}
											class='btn btn-md btn-outline-danger'
										>
											<FontAwesomeIcon icon={faTrash} />
										</button>
									</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			}
		</div>
	);
};

export default DeleteService;
