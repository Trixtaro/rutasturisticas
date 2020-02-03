import React from 'react';
import { Link } from 'react-router-dom';

class LugarToolbar extends React.Component {
	render () {
		return (
			<Link to="/admin/lugar/agregar">Agregar</Link>
		);
	}
}

export default LugarToolbar;