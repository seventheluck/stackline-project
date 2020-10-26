import React from 'react';
import { connect } from 'react-redux';
import { productInfoAction } from '../actions';


class Detail extends React.Component {
    componentDidMount() {
        this.props.productInfoAction();
    }

    render(){
        const productInfo = this.props.productInfo;
        if (productInfo === null) {
            return (
                <div>Loading</div>
            );
        }
        console.log(productInfo.image);
        return (
            <div className="ui segment">
                <img className="ui centered medium image" src={productInfo.image} alt="product img"/>
                <p>{productInfo.subtitle}</p>
                {renderTag(productInfo.tags)}
            </div>
        );
    }
}

const renderTag = (list) => {
    const tags = [];
    list.map(
        tag => tags.push(<a href="#/" key={tag} className="ui teal tag label">{tag}</a>)
    );
    return tags;
}

const mapStateToProps = (state) => {
    return { productInfo: state.productInfo};
}

export default connect(mapStateToProps, { productInfoAction })(Detail);