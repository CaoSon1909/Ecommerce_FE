import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer center-on-small-only">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-2 ml-auto">
                                <h5 className="title social-section-title">ABOUT ME</h5>
                                <div className="social-section text-md-left">
                                    <ul className="text-center">
                                        <li>
                                            <a className="btn-floating  btn-fb waves-effect waves-light"
                                               href="https://www.facebook.com/phamcaoson1999" target="_blank">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="btn-floating  btn-li waves-effect waves-light"
                                               href="https://www.linkedin.com/in/son-pham-b5734b1a6/" target="_blank">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="btn-floating  btn-li waves-effect waves-light"
                                               href="https://github.com/CaoSon1909" target="_blank">
                                                <i className="fa fa-github"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <h5 className="title">More Contact</h5>
                                <ul>
                                    <li>
                                        <i className="fa fa-envelope"></i> - phamcaoson1999@gmail.com
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4">
                                <h5 className="title">Owner/Co-owner</h5>
                                <ul className="instagram-photos">
                                    <li>
                                        <div className="view overlay hm-white-slight z-depth-1">
                                            <img className="img-fluid"
                                                 src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/c234e48241988f87db7f7eb7d207d507.png"
                                                 alt=""/>
                                            <a href="https://www.nashtech.com/home/" target="_blank">
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="view overlay hm-white-slight z-depth-1">
                                            <img className="img-fluid"
                                                 src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/130731175_100727945252953_6420774656984050162_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8pONeDkddBcAX_9OHu2&_nc_ht=scontent-xsp1-3.xx&oh=9b816955746a94e8b81d38a391323647&oe=60FD3680"
                                                 alt=""/>
                                            <a>
                                                <div className="mask waves-light waves-effect waves-light"></div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container-fluid">

                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

Footer.propTypes = {};

export default Footer;
