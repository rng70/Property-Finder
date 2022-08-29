import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSingleItem } from '../../actions/property';
import { useParams } from 'react-router-dom';
import Jumbo from '../jumbo/Jumbo';
import {MDBBtn} from 'mdb-react-ui-kit'
import CardImage from "./CardImage";
import { Image } from 'cloudinary-react';

const SingleComponent = ({ getSingleItem, singleItem }) => {
    const { id } = useParams();
    console.log("ins ingle component ",id);
    useEffect(() => {
        getSingleItem(id);
    }, [getSingleItem, id]);

    const jumboDescription ="PropertyFinder is the only property solutions provider in Bangladesh. We cater to the needs of those seeking real estate services, with a promise to make property search, renting & buying easier than ever. We offer the easiest platform that enables anyone to buy, rent or sell properties in the country."
    console.log(singleItem)
    return (
    <div>
        <Jumbo description={jumboDescription}/>
        <div className="col-10 mb-3 ml-3 mt-3">
          
          <div className="card">
                <div className="card-header">
                  See Details of the Property Here
                </div>
                <div className="card-body row">
                  <div className='col-6'>
                    <CardImage />
                  </div>
                  <div className='col-6'>
                     { singleItem.price && <b>Price :{singleItem.price}</b> }<br/><br/>
                     { singleItem.type && <b>Type : {singleItem.type}</b> }<br/><br/>
                    { singleItem.sellType && <b>Available for : {singleItem.sellType}</b> }<br/><br/>
                    { singleItem.area && <b>Area in sq. feet : {singleItem.area}</b> }<br/><br/>
                    { singleItem.plot && <b>Plot number : {singleItem.plot}</b> }<br/><br/>
                    { singleItem.road && <b>Road number : {singleItem.road}</b> }<br/><br/>
                    { singleItem.block && <b>Block : {singleItem.block}</b> }<br/><br/>
                    { singleItem.postCode && <b>Post code : {singleItem.postCode}</b> }<br/><br/>
                    { singleItem.areaName && <b>Area : {singleItem.areaName}</b> }<br/><br/>
                    { singleItem.district && <b>District : {singleItem.district}</b> }<br/><br/>
                    { singleItem.division && <b>Division : {singleItem.division}</b> }<br/><br/>
                    { singleItem.contactNo && <b>Contact number : {singleItem.contactNo}</b> }<br/><br/>
                    { singleItem.noOfFloors && <b>Number of floors : {singleItem.noOfFloors}</b> }<br/><br/>
                    { singleItem.noOfRooms && <b>Number of rooms : {singleItem.noOfRooms}</b> }<br/><br/>
                    { singleItem.noOfKitchens && <b>Number of kitchens : {singleItem.noOfKitchens}</b> }<br/><br/>
                    { singleItem.noOfWashrooms && <b>Number of  wash rooms : {singleItem.noOfKitchens}</b> }<br/><br/>
                    { singleItem.noOfDiningRooms && <b>Number of  dining rooms : {singleItem.noOfDiningRooms}</b> }<br/><br/>
                    { singleItem.noOfLivingRooms && <b>Number of living rooms : {singleItem.noOfLivingRooms}</b> }<br/><br/>
                    { singleItem.noOfServentRoom && <b>Number of servent rooms : {singleItem.noOfServentRoom}</b> }<br/><br/>
                    { singleItem.apartmentNo && <b>Apartment number : {singleItem.apartmentNo}</b> }<br/><br/>
                    { singleItem.noOfBalcony && <b>Number of balcony : {singleItem.noOfBalcony}</b> }<br/><br/>
                    { singleItem.spaceDetails && <b>Additional Description : {singleItem.spaceDetails}</b> }<br/><br/>
                    { singleItem.whichFloors && <b>Floor number : {singleItem.whichFloors}</b> }<br/><br/>
                   
                    
                  </div>
                </div>
            </div>
          
        </div>
    </div>
  )
}

SingleComponent.propTypes = {
    getSingleItem: PropTypes.func.isRequired,
    //property: PropTypes.object.isRequired,
    //singleItem : PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    singleItem: state.property.propertyVal
})

export default connect(mapStateToProp, { getSingleItem })(SingleComponent);



{/* <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> */}