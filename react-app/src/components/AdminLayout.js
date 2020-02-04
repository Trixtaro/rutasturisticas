import React from 'react';

import Navbar from './Navbar';
import SideAdminBar from './SideAdminBar';

import './styles/AdminLayout.css';

const AdminLayout = (props) => {

    return (
        <div className="AdminLayout">
            <div className="AdminLayout body">
                <SideAdminBar />
                { props.children }
            </div>
        </div>
    );
}

export default AdminLayout;