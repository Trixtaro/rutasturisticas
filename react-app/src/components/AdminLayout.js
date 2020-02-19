import React from 'react';

import Navbar from './Navbar';
import SideAdminBar from './SideAdminBar';

import './styles/AdminLayout.css';

const AdminLayout = (props) => {
    return (
    	<>
		<Navbar />
        <div className="AdminLayout container-fluid">
			<div className="row">
				<SideAdminBar />
				<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
					{ props.children }
				</main>
			</div>
        </div>
        </>
    );
}

export default AdminLayout;