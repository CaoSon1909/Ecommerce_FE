import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Logo extends Component {

    render() {
        const myStyle = {

        }
        return (
            <div style={myStyle}>
                <img src={"https://www.graphicsprings.com/filestorage/stencils/1cf0e62090ebd950855b702c81587979.png?width=100&height=100"}
                alt=""/>
            </div>
        );
    }
}

Logo.propTypes = {};

export default Logo;
