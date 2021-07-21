import React, {Component} from 'react';
import {connect} from "react-redux";
import Message from "./../components/Message";
import PropTypes from 'prop-types';

class MessageContainer extends Component {

    render() {
        var {message} = this.props;
        return (
            //return message component
            <div>
                <Message message={message}/>
            </div>
        );
    }
}

//validate props lấy từ store về => PropsType
MessageContainer.propTypes = {
    message : PropTypes.arrayOf(PropTypes.string).isRequired
}

//hàm kết nối với store của redux => return a state
const mapStateToProps = state => {
    return {
        message : state.message
    }
}



export default connect(mapStateToProps, null) (MessageContainer);
