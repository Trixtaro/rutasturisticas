import React from 'react';
import Navbar from './Navbar';
import SideAdminBar from './SideAdminBar';
import './styles/AdminLayout.css';
import { getProfile } from '../functions/Functions';
import { Redirect } from 'react-router-dom';

const AdminLayout = (props) => {
	const [data, setData] = React.useState({ admin: null });

	React.useEffect(() => {
		const fetchDataProfile = async () => {
			const data = await getProfile();
			console.log('Admin layaout dio', data);
			if (data[0] === 'token_expired' || data[0] === 'token_invalid' ) {
				return;
			}
			setData(data.admin);
		}

		fetchDataProfile();
	}, []);

	return (
		data ? (
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
		) : (<Redirect to="/403" />)
    );
}

export default AdminLayout;