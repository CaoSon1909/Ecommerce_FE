import PropTypes from 'prop-types';

import React from 'react';
import {useHistory} from "react-router-dom";

const AdminPage = (props) =>{

    // handle click event of logout button
    const handleLogout = () => {
        localStorage.removeItem('USERNAME');
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('ROLES');
    }


    return (
        <div>
            Welcome, {() => {if (localStorage.getItem('ROLES') === 'ADMIN')
            <div>{localStorage.getItem('USERNAME')}</div>

        }}
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    );
}

export default AdminPage;

