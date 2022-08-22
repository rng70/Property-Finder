import React from 'react';
import { Link } from 'react-router-dom';

const Jumbo = () =>{
    return(
        <div className='jumbotron'>
            <h2>My profile</h2>

            <Link to="/feed">
                {/* {console.log("From location", data)} */}
                <button className="btn btn-outline-primary">News feed</button>
            </Link>
        </div>
    )
}
export default Jumbo;