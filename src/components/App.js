import React from 'react';
import SalesChart from './salesChart';
import SalesTable from './salesTable';
import Detail from './detail';

class App extends React.Component {

    render() {
        return (
            <div>
                <h3 className="ui block header">
                    Stackline
                </h3>
                <div className="ui grid">
                    <div className="four wide column">
                        <div className="ui segment">
                            <Detail/>
                        </div>
                    </div>
                    <div className="twelve wide stretched column">
                        <div className="ui grid">
                            <div className="stretched row">
                                <div className="column">
                                    <div className="ui segment">
                                        <SalesChart/>
                                    </div>
                                    <div className="ui segment">
                                        <SalesTable/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;