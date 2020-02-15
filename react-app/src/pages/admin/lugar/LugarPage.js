import React from 'react';
import LugarToolbar from './LugarToolbar';
import LugarTable from './LugarTable';
import { Link } from 'react-router-dom';

class LugarPage extends React.Component {
    render () {
        return (
            <>
                <h1 className='mt-3'>
                    Lugares <small className="text-muted"> administrador</small>
                </h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/admin/home">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Lugares</li>
                    </ol>
                </nav>
                <LugarToolbar />
                <LugarTable />
            </>
        );
    }
}

export default LugarPage;