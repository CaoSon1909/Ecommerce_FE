import {get} from "./../utils/Products/httpHelpers";
import * as Types from "./../constants/ActionType";
    var initialState = [];

    var findIndex = (products, id) => {
        var result = -1;
        products.forEach( (product, index) => {
            if (product.id === id){
                result = index;
            }
        } )
        return result;
    }


const products = (state = initialState, action) => {
        //products ~ state
    var index = -1;
    var {id, product} = action;
    switch (action.type){
        case Types.FETCH_PRODUCTS:
            state = action.products; //save products from DB to state
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.DELETE_PRODUCT:
            index = this.findIndex(state, id);
            if (index !== -1){
                state.splice(index, 1);
                return [...state];
            }
            break;
        case Types.UPDATE_PRODUCT:
             index = this.findIndex(state, product.id);
             if (index !== -1){
                state[index] = product;
                return [...state];
             }
             break;
        default: return [...state];
    }
}

export default products;