import React, {Component} from 'react';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import SearchForm from "../SearchForm";
import Categories from "../../pages/Categories";


class NavigationBar extends Component {
    render() {
        return (
            <div>
                <>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/dashboard">Trang chủ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/categories">Danh mục các sản phẩm</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/history">Lịch sử mua hàng</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/admin">Admin</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/user">User</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <p className="text-center mt-4 mb-4">Ecommerce Vehicles Website</p>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/login">Đăng nhập</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/signup">Đăng ký</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </>
            </div>
        );
    }
}

NavigationBar.propTypes = {};

export default NavigationBar;
