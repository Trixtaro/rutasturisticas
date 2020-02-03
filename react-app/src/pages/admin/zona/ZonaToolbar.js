import React from 'react';
import { Link } from 'react-router-dom';

class ZonaToolbar extends React.Component {
	render () {
		return (
			<Link to="/admin/zona/agregar">Agregar</Link>
		);
	}
}

export default ZonaToolbar;