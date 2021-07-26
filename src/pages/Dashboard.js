import React, {Component} from 'react';
import ProductsContainer from "../containers/ProductsContainer";
import MessageContainer from "../containers/MessageContainer";
import CartContainer from "../containers/CartContainer";
import Footer from "../components/Footer";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer/>
                        <MessageContainer/>
                        <CartContainer/>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

Dashboard.propTypes = {};

export default Dashboard;
