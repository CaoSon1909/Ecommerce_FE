import React, {Component} from 'react';
import PropTypes from 'prop-types';

const handleLogout = () => {
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('ROLES');
}

const UserPage = () => {
    return (
        <div>
            Welcome, {() => {if (localStorage.getItem('ROLES') === 'USER')
            <div>{localStorage.getItem('USERNAME')}</div>

            }}
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    );
}

UserPage.propTypes = {};

export default UserPage;
