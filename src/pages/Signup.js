import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';
import React, {Component} from 'react';

class Login extends Component {

    handleSubmit = (e) => {

    }

    render() {
        const smallStyle = { fontSize: '0.8rem'}
        return (
            <MDBRow>
                <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
                    <MDBCard>
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5"><strong>Đăng ký</strong></h3>
                            </div>
                                <form method="POST" onSubmit={(e) => {this.handleSubmit(e)}}>
                                <MDBInput label="Email của bạn: " group type="email" validate error="wrong" success="right"/>
                                <MDBInput label="Mật khẩu: " group type="password" validate containerClass="mb-0" maxLength="50" required/>
                                <MDBInput label="Vui lòng nhập lại mật khẩu: " group type="password" validate containerClass="mb-0" maxLength="50" required/>
                                <MDBInput label="Tên người dùng: " group type="text" required/>
                                <MDBInput label="Số điện thoại: " group type="tel" pattern="^[0-9]{2,4}-[0-9]{3}-[0-9]{3,4}$" validate error="Phone number has format:(xx)xx-xxx-xxx(x)"/>
                                <MDBInput label="Địa chỉ: " group type="text" validate containerClass="mb-0"/>
                                <div className="text-center pt-3 mb-3">
                                    <MDBBtn type="button" gradient="blue" rounded className="btn-block z-depth-1a">Đăng ký</MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="grey-text d-flex justify-content-end" style={smallStyle}>Đã có tài khoản <a href="/login" className="blue-text ml-1"> Đăng nhập ngay !</a></p>
                        </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default Login;

