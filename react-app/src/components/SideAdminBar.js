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
                                <h4><i className="fas fa-home"></i> Home</h4>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/lugar">
                                <h4><i className="fas fa-location-arrow"></i> Lugares</h4>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/zona">
                                <h4><i className="fas fa-map-marked-alt"></i> Zonas</h4>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/solicitudes">
                                <h4><i className="fas fa-user-check"></i> Solicitudes de guias</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SideAdminBar;