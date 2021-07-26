import React, {Component} from 'react';
import * as Message from "./../constants/Message";
import {NavLink} from "react-router-dom";


class Product extends Component {

    //hiện thị sao của mỗi product
    showRatings(ratings) {
        let result = [];
        for (let i = 0; i < ratings; i++){
            //use loop to render, must have "key"
            result.push(<i key={i} className="fa fa-star"></i>);
        }
            //j + 1 because key must be unique
        for (let j = 0; j < (5-ratings); j++){
            result.push(<i key={j + 1} className="fa fa-star-o"></i>);
        }
        return result;
    }

    //thêm product vào cart và thay đổi message
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }

    render() {
        var {product} = this.props;
        var productDesctiption = this.props.product.description !== null ? this.props.product.description : "this product doesn't have description yet";
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img
                            src={product.imageURL}
                            className="img-fluid" alt={product.name}/>
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        {/*<ul className="rating">*/}
                        {/*    <li>*/}
                        {/*        {this.showRatings(product.rating)}*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <p className="card-text">
                            {productDesctiption}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip"
                                   data-placement="top" title="" data-original-title="Add to Cart"
                                    onClick={ () => this.onAddToCart(product) }>
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {};

export default Product;
