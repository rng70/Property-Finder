import React from "react";
import { Link } from "react-router-dom";
import {MDBBtn} from 'mdb-react-ui-kit'

// const FeedCard =(props) =>{
//     const property = props.property;

//     const title ="This is a dummy card";
//     const description = "This is description"
//     const price = "500$"
//     return(
//         <div className="col-4 mb-3 ml-3 mt-3">
//             <div className="card">
//                 <div className="card-header">
//                     {title}
//                 </div>
//                 <div className="card-body">
//                     <CardImage />
//                     <p>{description}</p>
//                     <p>{price}</p>
//                     <Link to="/">
//                         <MDBBtn className='mx-2' color='primary'>
//                             View Details
//                         </MDBBtn>
//                     </Link>
//                     <Link to="/"><MDBBtn className='mx-2' color='success'>
//                         Add to List
//                     </MDBBtn>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
const TypeCard = (props) => {
    const data = props.data;
    console.log("here  ",data)
    const titleStyle = {
        display: "block",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        overflow: "hidden",
        maxHeight: "2em",
        lineHeight: "1em"
    }
    const imgStyle = {
        height: 250,
        objectFit: "cover",
        objectPosition: "0px 0px"
    }
    return (
        <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="card">
                <img
                    //src={`${API}/product/photo/${product._id}`}
                    src={data.imgSrc}
                    alt={data.title}
                    style={imgStyle}
                    className="card-img-top"
                />
                <div className="card-body">
                    <div style={{ minHeight: "3em" }}>
                        <p style={titleStyle}>{data.title}</p>
                    </div>
                    <span style={{ fontSize: 20 }}>&#2547;</span>{data.description}
                    <Link to={data.link}>
                        <MDBBtn className='mx-2' color='primary'>
                                {data.btnTitle}
                        </MDBBtn>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default TypeCard;