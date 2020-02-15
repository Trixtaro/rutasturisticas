import React from 'react';
import { Link } from 'react-router-dom';

import './styles/SideAdminBar.css';

class SideAdminBar extends React.Component{
    render () {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className='sidebar-sticky'>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/home">
                                    <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/lugar">
                                <i className="fas fa-location-arrow"></i> Lugares
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/zona">
                                <i className="fas fa-map-marked-alt"></i> Zonas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/solicitudes">
                                <i className="fas fa-user-check"></i> Solicitudes de guias
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SideAdminBar;