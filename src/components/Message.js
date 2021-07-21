import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    render() {
        var {message} = this.props;
        return (
            <div>
                <h3>
                    <span className="badge amber darken-2">
                        {message}
                    </span>
                </h3>
            </div>
        );
    }
}

Message.propTypes = {};

export default Message;
