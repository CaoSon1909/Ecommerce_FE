import React, {useState, useEffect} from 'react';
import {useHistory } from "react-router-dom"
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBInput, MDBModalFooter, MDBRow} from "mdbreact";
import {post, postWithAuthenticate} from "../utils/httpHelper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


toast.configure();
export default function Login(props) {
    const history = useHistory();
    const [loginErr, setLoginErr] = useState();


    // handle button click of login form
    const handleLogin = (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            email: e.target.email.value.trim(),
            password: e.target.password.value.trim()
        });
        console.log(body);
        post("/public/signin", body).then(res => {
            if (res.status === 200){
                localStorage.setItem("TOKEN", res.data.jwt)
                localStorage.setItem("USERNAME", res.data.username)
                localStorage.setItem("ROLES", res.data.roles)
            }
        })

    }
    const smallStyle = {fontSize: '0.8rem'}

    return (
        <div>
            <MDBRow>
                <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
                    <MDBCard>
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                            </div>

                            <form onSubmit={e => handleLogin()}>
                            <MDBInput
                                label="Your email"
                                group type="text"
                                validate error="invalid"
                                success="ok" maxLength="50"
                                required
                                // onChange={e => handleUsername(e)}
                            />
                            <MDBInput
                                label="Your password"
                                group type="password"
                                validate error="invalid"
                                success="ok" containerClass="mb-0"
                                maxLength="50"
                                required
                                // onChange={e => handlePassword(e)}
                            />
                            <div className="text-center pt-3 mb-3">
                                <MDBBtn
                                    type="submit"
                                    gradient="blue"
                                    rounded
                                    className="btn-block z-depth-1a">
                                Sign in
                                </MDBBtn>
                            </div>
                            </form>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="grey-text d-flex justify-content-end" style={smallStyle}>Doesn't have
                                account? <a
                                    href="/signup" className="blue-text ml-1"> Sign Up</a></p>
                        </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
};

