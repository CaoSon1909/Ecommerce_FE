import React, {Component} from 'react';
import * as Message from "../constants/Message";

class CartItem extends Component {

    //state để quản lý quantity của sản phẩm
    constructor(props) {
        super(props);
        this.state = {
            quantity : 1
        }
    }

    //tính thành tiền của 1 item
    showSubtotal = (price, quantity) => {
        return price * quantity;
    }

    //remove item ra khỏi cart
    removeCartItem = (product) => {
        var {onDeleteProductInCart, onChangeMessage} = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_REMOVE_TO_CART);
    }

    // update item quantity
    updateQuantity = async (product, quantity) => {
        var {onUpdateProductInCart, onChangeMessage} = this.props;
        if (quantity > 0){
            await this.setState({
                quantity : quantity
            });
            await onUpdateProductInCart(product, this.state.quantity);
            onChangeMessage(Message.MSG_UPDATE_TO_CART);
        }
    }


    render() {
        //nhận props tên item từ CartContainer , showCartItem()
        var {item} = this.props;
        var {quantity} =  this.state;
        //item = product + quantity
        return (
            <div>
                <tr>
                    <th scope="row">
                        <img
                            src={item.product.image}
                            alt={item.product.name} className="img-fluid z-depth-0"/>
                    </th>
                    <td>
                        <h5>
                            <strong>{item.product.name}</strong>
                        </h5>
                    </td>
                    <td>{item.product.price}$</td>
                    <td className="center-on-small-only">
                        <span className="qty">{item.quantity} </span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                               onClick={() => this.updateQuantity(item.product, item.quantity - 1)}>
                                <a>—</a>
                            </label>
                            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                                onClick={() => this.updateQuantity(item.product, item.quantity + 1)}>
                                <a>+</a>
                            </label>
                        </div>
                    </td>
                    <td>{ this.showSubtotal(item.quantity, item.product.price) }$</td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light"
                                data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="Remove item"
                                onClick={() => this.removeCartItem(item.product)}
                        >
                            X
                        </button>
                    </td>
                </tr>
            </div>
        );
    }
}

CartItem.propTypes = {};

export default CartItem;
