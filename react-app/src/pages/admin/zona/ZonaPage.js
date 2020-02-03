import React from 'react';
import ZonaToolbar from './ZonaToolbar';
import ZonaTable from './ZonaTable';

class ZonaPage extends React.Component {
    render () {
        return (
            <>
                <h1>Zonas (Admin)</h1>
                <ZonaToolbar />
                <ZonaTable />
            </>
        );
    }
}

export default ZonaPage;