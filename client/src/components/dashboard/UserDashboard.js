import React, {useEffect} from "react";
import Jumbo from "./Jumbo";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';


const UserDashboard = ({ getCurrentProfile, profile }) => {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])
    const {name, email} = profile;
    //name = "Buet CSE";
    // email = "buet@gmail.com"
    const type = "Agency"
    return (
        <div>
            <Jumbo/>
            <div className="container">
            <div className="card mb-5">
                <h3 className="card-header">My Profile</h3>
                <ul className="list-group">
                        {name && <li className="list-group-item">{name}</li>}
                        {email && <li className="list-group-item">{email}</li>}
                        {type && <li className="list-group-item">{type}</li>}
                </ul>
            </div>
            </div>

            <div className="container">
            <div className="card mb-5">
                <h3 className="card-header">My Watchlist</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{type}</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

UserDashboard.propTypes = {
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(UserDashboard);