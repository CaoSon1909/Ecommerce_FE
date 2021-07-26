import React, {Component} from 'react';
import {connect} from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage, actGetAllProductsRequest} from "./../actions/index";

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    showProducts(products){
        var result = null;
        var {onAddToCart, onChangeMessage} = this.props;
        if (products.length > 0){
            result = products.map( (product, index) => {
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
            } );
        }
        return result;
    }

    render() {
        var {products} = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
}

// kiem tra xem props product co phai la mot array ko, va bat buoc phai co'
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        //kiem tra tung object trong array
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

//dùng để bắt event
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        fetchAllProducts: () => {
            dispatch(actGetAllProductsRequest());
        }
        // onDeleteProducts: (id) => {
        //     dispatch(actDeleteProducts(id));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer);