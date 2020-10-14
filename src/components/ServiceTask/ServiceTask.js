import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { SelectedServiceContext } from '../../App';
import './ServiceTask.css'

const ServiceTask = ({ service }) => {
    const [selectedService, setSelectedService] = useContext(SelectedServiceContext)

    //animation 
    const ref = useRef();
    const [isHovered, setHovered] = useState(false);
    const [animatedProps, setAnimatedProps] = useSpring(() => {
        return {
            xys: [0, 0, 1],
            config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
        }
    });

    return (
        <div className='d-flex justify-content-center'>
            <div className='col-md-3 ml-md-0 ml-5 pl-md-0 pl-5'>
                <animated.div
                    ref={ref}
                    onMouseEnter={() => setHovered(true)}
                    onMouseMove={({ clientX, clientY }) => {
                        // Get mouse x position within card
                        const x =
                            clientX -
                            (ref.current.offsetLeft -
                                (window.scrollX || window.pageXOffset || document.body.scrollLeft));

                        // Get mouse y position within card
                        const y =
                            clientY -
                            (ref.current.offsetTop -
                                (window.scrollY || window.pageYOffset || document.body.scrollTop));

                        // Set animated values based on mouse position and card dimensions
                        const dampen = 50; // Lower the number the less rotation
                        const xys = [
                            -(y - ref.current.clientHeight / 2) / dampen, // rotateX
                            (x - ref.current.clientWidth / 2) / dampen, // rotateY
                            1.07 // Scale
                        ];

                        // Update values to animate to
                        setAnimatedProps({ xys: xys });
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                        // Set xys back to original
                        setAnimatedProps({ xys: [0, 0, 1] });
                    }}
                    style={{
                        // If hovered we want it to overlap other cards when it scales up
                        zIndex: isHovered ? 2 : 1,
                        // Interpolate function to handle css changes
                        transform: animatedProps.xys.interpolate(
                            (x, y, s) =>
                                `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                        )
                    }}
                >
                    <Link onClick={() => setSelectedService(service)} class="card py-3 px-1 mb-3 border-0" style={{ width: '18rem', textDecoration: 'none' }}>
                        <img style={{ width: '70px' }} src={service.src} class="mx-auto" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center">{service.taskName}</h5>
                            <p class="card-text text-center">{service.description}</p>
                        </div>
                    </Link>
                </animated.div>
            </div>
        </div>
    );
};

export default ServiceTask;