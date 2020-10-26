import PRODUCT_URL from '../api/backendUrl';

export const productInfoAction = () => {
    return function(dispatch) {
        fetch(PRODUCT_URL)
            .then(response => response.json())
            .then(
                data => dispatch({type: 'PRODUCT_QUERY', payload: data[0]}),
                err => dispatch({ type: 'FETCH_DATA_ERROR', payload : err.message})
            );
    }
}