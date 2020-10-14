import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import brandImg from '../../images/logos/logo.png'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
            <nav className="navbar navbar-expand-lg navbar-light py-3 px-md-0 px-3 ">
                <Link to='/home' className="navbar-brand">
                    <img style={{height: '50px'}} src={brandImg} alt="brand-img"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-dark">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark">Our Team</Link>
                        </li>
                        <li className="nav-item text-white">
                            <Link className="nav-link text-dark">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' onClick={() => setLoggedInUser({})} className="nav-link btn btn-dark text-white px-4">{loggedInUser.email ? `${loggedInUser.name.split(' ')[0]} / Logout`: 'Login'}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    );
};

export default Header;