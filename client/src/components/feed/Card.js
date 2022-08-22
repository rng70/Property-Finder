import React from "react";
import { Link } from "react-router-dom";
import {MDBBtn} from 'mdb-react-ui-kit'
import CardImage from "./CardImage";

const FeedCard =(props) =>{
    const property = props.property;

    const title ="This is a dummy card";
    const description = "This is description"
    const price = "500$"
    console.log("card called");
    return(
        <div className="col-4 mb-3 ml-3 mt-3">
            <div className="card">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    <CardImage />
                    <p>{description}</p>
                    <p>{price}</p>
                    <Link to="/">
                        <MDBBtn className='mx-2' color='primary'>
                            View Details
                        </MDBBtn>
                    </Link>
                    <Link to="/"><MDBBtn className='mx-2' color='success'>
                        Add to List
                    </MDBBtn>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FeedCard;