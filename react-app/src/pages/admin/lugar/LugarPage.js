import React from 'react';
import LugarToolbar from './LugarToolbar';
import LugarTable from './LugarTable';

class LugarPage extends React.Component {
    render () {
        return (
            <>
				<h3>
					Lugares
					<small class="text-muted"> administrador</small>
				</h3>
                <LugarToolbar />
                <LugarTable />
            </>
        );
    }
}

export default LugarPage;