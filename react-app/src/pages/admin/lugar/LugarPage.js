import React from 'react';
import LugarToolbar from './LugarToolbar';
import LugarTable from './LugarTable';

class LugarPage extends React.Component {
    render () {
        return (
            <>
                <h1>Lugares (Admin)</h1>
                <LugarToolbar />
                <LugarTable />
            </>
        );
    }
}

export default LugarPage;