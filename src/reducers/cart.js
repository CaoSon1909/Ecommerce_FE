import * as types from "./../constants/ActionType";

//save cart on local storage
var data = (JSON).parse(localStorage.getItem(`CART`));
// var initialState = data ? data : [];
var initialState = data ? data : [];


const cart = (state = initialState, action) => {
    var {product, quantity} = action;
    var index = -2;
    switch (action.type){
        case types.ADD_TO_CART:
            //push san pham vao state
            //lưu ý nếu product chưa tồn tại thì tạo mới, tồn tại rồi thì cập nhật số lượng
            index = findProductInCart(state, product); //state: toàn bộ product đang hiển thị trong cart, product: là product mà mình vừa click add to cart
            if (index !== -1){
                state[index].quantity += quantity;
            }
            else{
                state.push({product, quantity})
            }
            //lưu state (các sản phẩm trong giỏ hàng) vào localStorage
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1){
                //dùng splice để cắt phần tử ra
                state.splice(index, 1);
            }
            //cập nhật xuống local storage
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1){
                //set lại product.quantity
                state[index].quantity = quantity; //=> truyền vào từ action
            }
            //cập nhật xuống local storage
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

const findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0){
        for (let i = 0; i < cart.length; i++){
            if (cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
};

export default cart;