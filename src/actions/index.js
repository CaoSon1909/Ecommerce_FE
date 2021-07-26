import * as types from "./../constants/ActionType";
import axios from "axios";
import {get} from "../utils/Products/httpHelpers";

export const  actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProductFromCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
//================GET ALL PRODUCTS===================
export const actGetAllProduct = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const actGetAllProductsRequest = () => {
    return async dispatch => {
        return await axios({
            url : "http://localhost:8080/api/v1/vehicles/all",
            method: "get",

        }).then((res) =>{
            if (res.status === 200){
                dispatch(actGetAllProduct(res.data))
            }
        }).catch(err => {console.log(err)})
    }
}
//===============CREATE PRODUCT===============
export const actCreateProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}
//
// export const actCreateProductRequest = (product) => {
//     return dispatch => {
//         return
//     }
// }
//============================================
