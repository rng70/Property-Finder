import React from "react";

const CardImage = props =>{
    const altText = "image"
    return (
        <div className="product-img">
            <img src="https://picsum.photos/200/300/?blur=1" alt={altText}
                className='mb-3'
                style={{height:"100%",width:"100%", aspectRatio: 1 }}/>
        </div>
    )
}

export default CardImage;