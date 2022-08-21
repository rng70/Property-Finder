import React from "react";
import Jumbo from "./Jumbo";
import { Link } from 'react-router-dom';


const AddType= ()=>{
    return(
        <div>
            <Jumbo/>
            <Link to="/addLand">
                <button className="btn btn-outline-primary">Add Land</button>
            </Link>
            <Link to="/addSpace">
                <button className="btn btn-outline-primary">Add Space</button>
            </Link>
        </div>
    )
}
export default AddType;