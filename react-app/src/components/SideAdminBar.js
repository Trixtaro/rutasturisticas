import React from 'react';
import { Link } from 'react-router-dom';

import './styles/SideAdminBar.css';

class SideAdminBar extends React.Component{

    render(){
        return (
            <div className="SideAdminBar">
                <div className="profile">
                    <i className="fas fa-user" style={{ fontSize: '80px', marginBottom: '20px' }}></i> 
                    <h1>Wilmer David Cedeño Mendoza</h1>
                </div>
                <div className="items">
                    <Link to="/admin/home">
                        <div className="item">
                            <i class="fas fa-home"></i>
                            <h3>Home</h3>
                        </div>
                    </Link>
                    <Link to="/admin/lugares">
                        <div className="item">
                            <i class="fas fa-map-marked-alt"></i>
                            <h3>Agregar lugar</h3>
                        </div>
                    </Link>
                    <Link to="/admin/solicitudes">
                        <div className="item">
                            <i class="fas fa-user-check"></i>
                            <h3>Solicitudes de guias</h3>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

}

export default SideAdminBar;