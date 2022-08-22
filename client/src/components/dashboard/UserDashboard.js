import React from "react";
import Jumbo from "./Jumbo";

const UserDashboard = (props) => {
    var {name,email,type} = props;
    name = "Buet CSE";
    email = "buet@gmail.com"
    type = "General User"
    return (
        <div>
            <Jumbo/>
            <div className="container">
            <div className="card mb-5">
                <h3 className="card-header">My Profile</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{type}</li>
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

export default UserDashboard;