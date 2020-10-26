import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line } from 'recharts';

class SalesChart extends React.Component {
    render(){
        if (this.props.productInfo === null) {
            return (<div></div>);
        } else {
            return (
                <LineChart width={900} height={300} data={this.props.productInfo.sales}>
                    <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
                    <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
                </LineChart>
            );
        }
        
    }
}

const mapStateToProps = (state) => {
    return { productInfo: state.productInfo};
}

export default connect(mapStateToProps)(SalesChart);