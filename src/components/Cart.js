import React, {Component} from 'react';

class Cart extends Component {
    render() {
        //nhận props tên children từ CartContainer
        var {children} = this.props;
        return (
            <div>
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {children}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );
    }
}

Cart.propTypes = {};

export default Cart;
