import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';

class SalesTable extends React.Component {
    
    render(){
        if (this.props.productInfo === null) {
            return (<div></div>);
        }

        return (
            <MaterialTable
                title="Retail Sales"
                columns={[
                    { title: 'Week Ending', field: 'weekEnding' },
                    { title: 'Retail Sales', field: 'retailSales', type: 'currency' },
                    { title: 'Wholesale Sales', field: 'wholesaleSales', type: 'currency' },
                    { title: 'Unit Sales', field: 'unitsSold', type: 'currency' },
                    { title: 'Retailer Margin', field: 'retailerMargin', type: 'currency' },
                ]}
                data={this.props.productInfo.sales}        
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { productInfo: state.productInfo};
}

export default connect(mapStateToProps)(SalesTable);