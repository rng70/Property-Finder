import React from "react";
import Jumbo from "./Jumbo";
import  TypeCard  from "./TypeCard";
import { AddTypeHouse,AddTypeLand,AddTypeSpace } from "../../static";


const AddType = () => {
    const cardData = [
        {
            title : "Add Land",
            description : "Add a land to post on the homepage to get clients",
            btnTitle : "Post Now",
            link : "/addLand",
            imgSrc : AddTypeLand
        },
        {
            title : "Add Space",
            description : "Add a space to post on the homepage to get clients.Add residential or commercial space to get buyers",
            btnTitle : "Post Now",
            link : "/addSpace",
            imgSrc : AddTypeSpace
        },
        {
            title : "Add House",
            description : "Add a house to post on the homepage to get clients.Add residential or commercial space to get buyers",
            btnTitle : "Post Now",
            link : "/addHouse",
            imgSrc : AddTypeHouse
        }
    ];

  const CardDivStyle = {
    objectFit: "cover",
    objectPosition: "0px 0px",
    marginLeft : 5,
    marginBottom : "5px",
    marginTop : 5
  }

    return(
        // <div>
        //     <Jumbo/>
        //     <Link to="/addLand">
        //         <button className="btn btn-outline-primary">Add Land</button>
        //     </Link>
        //     <Link to="/addSpace">
        //         <button className="btn btn-outline-primary">Add Space</button>
        //     </Link>
        //     <Link to="/addHouse">
        //         <button className="btn btn-outline-primary">Add House</button>
        //     </Link>
        //     <Link to="/feed">
        //         <button className="btn btn-outline-primary">News feed</button>
        //     </Link>
        // </div>
      
          
        <div>
            <Jumbo/>
            <div className='row' style={CardDivStyle}>
                {cardData.map((data, i) => {
                return <TypeCard key={i} data={data} />;
                })}
            </div>
            
        </div>
        
    )
}

export default AddType;