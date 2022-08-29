import React from "react";
import { Link } from "react-router-dom";
import {MDBBtn} from 'mdb-react-ui-kit'
import CardImage from "./CardImage";
import { Image } from 'cloudinary-react';

const FeedCard =(props) =>{
    
    const property = props.property;
    console.log(property._id);
    const title =property.areaName;
    const description = "In "+property.areaName
    const price = "Price "+property.price
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
                    <Link to={`/feed/${property._id}` }>
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


// const FeedCard = (props) => {
//     const product = props.property;
//     console.log("in feed card ",product);
//     console.log("properties ",product.price);
    
//     const titleStyle = {
//         display: "block",
//         textOverflow: "ellipsis",
//         wordWrap: "break-word",
//         overflow: "hidden",
//         maxHeight: "2em",
//         lineHeight: "1em"
//     }
//     const imgStyle = {
//         height: 250,
//         objectFit: "cover",
//         objectPosition: "0px 0px"
//     }
//     return (
//         <div className="col-md-3 col-sm-4 col-xs-12">
//             <div className="card">
//                 <img
//                     src="https://picsum.photos/seed/picsum/200/300"
//                     alt={product.price}
//                     style={imgStyle}
//                     className="card-img-top"
//                 />
//                 {/* {product.image && product.image.map((im, i) => (
//                     <Image
//                         key={i}
//                         cloudName={"dj33aqcp1"}
//                         publicId={im}
//                         width="300"
//                         crop="scale"
//                         style={imgStyle}
//                     />))
//                 } */}
//                 <div className="card-body">
//                     <div style={{ minHeight: "3em" }}>
//                         <p style={titleStyle}>{product.area}</p>
//                     </div>
//                         <p style={titleStyle}>{product.area}</p>
//                     <span style={{ fontSize: 20 }}>&#2547;</span>{product.price}
//                     <p>{product.price ? (<span className="badge badge-pill badge-primary">Available</span>) : (<span className="badge badge-pill badge-danger">Out of Stock</span>)}</p>
//                     <Link to={`/product/${product._id}`}>
//                     <MDBBtn className='mx-2' color='primary'>
//                              View Details
//                          </MDBBtn>
//                     </Link>
//                     {product.price ? <>
//                         &nbsp;<button className="btn btn-outline-primary btn-sm" >Add to Cart</button>
//                     </> : ""}
//                 </div>
//             </div>
//         </div>
//     )
// }


export default FeedCard;