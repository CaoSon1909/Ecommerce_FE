import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Cart from "../components/Cart";
import * as Message from "./../constants/Message"
import CartItem from "./../components/CartItem";
import CartResult from "../components/CartResult";
import {actChangeMessage, actDeleteProductFromCart, actUpdateProductInCart} from "./../actions/index";

class CartContainer extends Component {

    //show cart item
    showCartItem = (cart) => {
        var result =
            <tr>
                <td>{Message.MSG_CART_EMPTY}</td>
            </tr>;
        var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        if (cart.length > 0){
            //duyệt qua từng item trong cart
            result = cart.map(
                (item, index) => {
                    return (
                        <CartItem
                            key = {index} //note!
                            item = {item}
                            index = {index}
                            onDeleteProductInCart = {onDeleteProductInCart}
                            onChangeMessage = {onChangeMessage}
                            onUpdateProductInCart = {onUpdateProductInCart}
                        />
                    );
                }
            )
        }

        return result;
    }

    //show subtotal
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0){
            result = <CartResult cart = {cart}/>
        }
        return result;
    }

    render() {
        var {cart} = this.props;
        return (
                <Cart>
                    {this.showCartItem(cart)}
                    {this.showTotalAmount(cart)}
                </Cart>
        );
    }
}

//kiem tra xem props product co phai la mot array ko, va bat buoc phai co'
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired, //check type của product => copy validate của product qua

            quantity: PropTypes.number.isRequired

        })).isRequired //check type của cart có phải là array (arrayOf) và chứa các object (shape()) gồm Product (shape()) và quantity
}

//hàm kết nối với store của redux => return a state
const mapStateToProps = state => {
    return {
        cart : state.cart //copy "cart" của reducers/index
    }
}

//hàm để dispatch actions cho CartItem
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductFromCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartContainer);
