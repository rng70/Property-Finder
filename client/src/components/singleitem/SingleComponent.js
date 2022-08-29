import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSingleItem } from '../../actions/property';
import { useParams } from 'react-router-dom';
import Jumbo from '../jumbo/Jumbo';
import {MDBBtn} from 'mdb-react-ui-kit'
import CardImage from "./CardImage";
import { Image } from 'cloudinary-react';
import Footer from '../layout/Footer';

const SingleComponent = ({ getSingleItem, singleItem }) => {
    const { id } = useParams();
    console.log("ins ingle component ",id);
    useEffect(() => {
        getSingleItem(id);
    }, [getSingleItem, id]);

    const imgStyle = {
        height: "80%",
        width : "80%",
        objectFit: "cover",
        objectPosition: "0px 0px"
    }

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
                    {/* <CardImage /> */}
                    {singleItem && singleItem.image && singleItem.image.map((im, i) => (
                    <Image
                        key={i}
                        cloudName={"dj33aqcp1"}
                        publicId={im}
                        width="300"
                        crop="scale"
                        style={imgStyle}
                    />))
                }
                  </div>
                  <div className='col-6'>
                     {singleItem && singleItem.price && <b>Price BDT :{singleItem.price}</b> }<br/><br/>
                     {singleItem && singleItem.type && <b>Type : {singleItem.type}</b> }<br/><br/>
                    {singleItem && singleItem.sellType && <b>Available for : {singleItem.sellType}</b> }<br/><br/>
                    {singleItem && singleItem.area && <b>Area in sq. feet : {singleItem.area}</b> }<br/><br/>
                    {singleItem && singleItem.plot && <b>Plot number : {singleItem.plot}</b> }<br/><br/>
                    {singleItem && singleItem.road && <b>Road number : {singleItem.road}</b> }<br/><br/>
                    {singleItem && singleItem.block && <b>Block : {singleItem.block}</b> }<br/><br/>
                    {singleItem && singleItem.postCode && <b>Post code : {singleItem.postCode}</b> }<br/><br/>
                    {singleItem && singleItem.areaName && <b>Area : {singleItem.areaName}</b> }<br/><br/>
                    {singleItem && singleItem.district && <b>District : {singleItem.district}</b> }<br/><br/>
                    {singleItem && singleItem.division && <b>Division : {singleItem.division}</b> }<br/><br/>
                    {singleItem && singleItem.contactNo && <b>Contact number : {singleItem.contactNo}</b> }<br/><br/>
                    {singleItem && singleItem.noOfFloors && <b>Number of floors : {singleItem.noOfFloors}</b> }<br/><br/>
                    {singleItem && singleItem.noOfRooms && <b>Number of rooms : {singleItem.noOfRooms}</b> }<br/><br/>
                    {singleItem && singleItem.noOfKitchens && <b>Number of kitchens : {singleItem.noOfKitchens}</b> }<br/><br/>
                    {singleItem && singleItem.noOfWashrooms && <b>Number of  wash rooms : {singleItem.noOfKitchens}</b> }<br/><br/>
                    {singleItem && singleItem.noOfDiningRooms && <b>Number of  dining rooms : {singleItem.noOfDiningRooms}</b> }<br/><br/>
                    {singleItem && singleItem.noOfLivingRooms && <b>Number of living rooms : {singleItem.noOfLivingRooms}</b> }<br/><br/>
                    {singleItem && singleItem.noOfServentRoom && <b>Number of servent rooms : {singleItem.noOfServentRoom}</b> }<br/><br/>
                    {singleItem && singleItem.apartmentNo && <b>Apartment number : {singleItem.apartmentNo}</b> }<br/><br/>
                    {singleItem && singleItem.noOfBalcony && <b>Number of balcony : {singleItem.noOfBalcony}</b> }<br/><br/>
                    {singleItem && singleItem.spaceDetails && <b>Additional Description : {singleItem.spaceDetails}</b> }<br/><br/>
                    {singleItem && singleItem.whichFloors && <b>Floor number : {singleItem.whichFloors}</b> }<br/><br/>                    
                  </div>
                </div>
            </div>
          
        </div>
        <Footer/>
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