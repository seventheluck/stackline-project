import {combineReducers} from 'redux';

export const productInfoReducer = (productInfo = null, action) => {
    if (action.type  === 'PRODUCT_QUERY') {
        return action.payload;
    }

    return productInfo;
}

export default combineReducers({
    productInfo: productInfoReducer
});