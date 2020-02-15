import React from 'react';
import { Link } from 'react-router-dom';

class LugarToolbar extends React.Component {
	render () {
		return (
			<div className="btn-group btn-group-lg mb-3" role="group">
				<Link className="btn btn-primary" role="button" to="/admin/lugar/agregar">Agregar</Link>
			</div>
		);
	}
}

export default LugarToolbar;