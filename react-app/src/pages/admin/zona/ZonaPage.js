import React from 'react';
import ZonaToolbar from './ZonaToolbar';
import ZonaTable from './ZonaTable';
import { Link } from 'react-router-dom';

class ZonaPage extends React.Component {
    render () {
        return (
            <>
				<h1 className='mt-3'>
					Zonas <small className="text-muted"> administrador</small>
				</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/admin/home">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Zonas</li>
                    </ol>
                </nav>
                <ZonaToolbar />
                <ZonaTable />
            </>
        );
    }
}

export default ZonaPage;