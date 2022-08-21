import React,{useState,useEffect} from 'react';
import Card from './Card';
import Jumbo from './Jumbo';

const NewsFeed = ()=>{
    //later will be fetched from database
    const allProperties= [1,2,3,4]
    return (
        <div>
            <Jumbo/>
            <h2 className='mb-4'>Latest Posted</h2>
            {allProperties.map((property,i)=>{
                return <Card key={i} property={property}/>
            })}
        </div>
    )
}
export default NewsFeed;