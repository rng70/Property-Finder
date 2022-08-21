import React from "react";

const CardImage = props =>{
    const altText = "image"
    return (
        <div className="product-img">
            <img src="https://picsum.photos/seed/picsum/200/300" alt={altText}
                className='mb-3'
                style={{maxHeight:"100%",maxWIdth:"100"}}/>
        </div>
    )
}

export default CardImage;