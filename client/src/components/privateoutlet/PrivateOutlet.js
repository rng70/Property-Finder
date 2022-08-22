import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateOutlet = ({auth: {isAuthenticated}}) => {
    return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
}

PrivateOutlet.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateOutlet);