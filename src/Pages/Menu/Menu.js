import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        // menu bar here 
        <div className="container mt-sm-2">
            <h2 className='text-start mt-5'>Filter by:</h2>
            <nav className="navbar mb-4 navbar-expand-lg navbar-light bg-light">
            <div className="ms-5 me-5 p-3">
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Popular filters
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item">Hotels</Link></li>
                        <li><Link className="dropdown-item">Villas</Link></li>
                        <li><Link className="dropdown-item">5 stars</Link></li>
                    </ul>
            </div>
            <div className="ms-5 me-5 p-3">
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Star rating
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item">1 star</Link></li>
                        <li><Link className="dropdown-item">2 stars</Link></li>
                        <li><Link className="dropdown-item">3 stars</Link></li>
                        <li><Link className="dropdown-item">4 stars</Link></li>
                        <li><Link className="dropdown-item">5 stars</Link></li>
                    </ul>
            </div>
            <div className="ms-5 me-5 p-3">
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Facilities
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item">Parking</Link></li>
                        <li><Link className="dropdown-item">Restaurant</Link></li>
                        <li><Link className="dropdown-item">Pets allowed</Link></li>
                        <li><Link className="dropdown-item">Room service</Link></li>
                        <li><Link className="dropdown-item">Free WiFi</Link></li>
                    </ul>
            </div>
            <div className="ms-5 ms-5 me-5 p-3">
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Distance from centre of Glostrup
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" href="#">Less than 3 km</Link></li>
                        <li><Link className="dropdown-item" href="#">Less than 3 km</Link></li>
                    </ul>
            </div>
            </nav>
        </div>
    );
};

export default Menu;