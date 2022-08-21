import React, { useState } from "react";
import Jumbo from "./Jumbo";
// import {isAuthenticated} from '../add'

const AddLand = () =>{
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);

    //form data
    const [area,setArea] = useState('')
    const [price,setPrice] = useState('')
    const [plot,setPlot] = useState('')
    const [road,setRoad] = useState('')
    const [block,setBlock] = useState('')
    const [postCode,setPostCode] = useState('')
    const [areaName,setAreaName] = useState('')
    const [district,setDistrict] = useState('')
    const [division,setDivision] = useState('')
    const [type,setType] = useState('')
    const [sellType,setSellType] = useState('')
    const [numRooms,setNumRooms] = useState('')
    const [numWahsrooms,setNumWashRooms] = useState('')
    const [numLivingRooms,setNumLivingRooms] = useState('')
    const [apartmentNo,setApartmentNo] = useState('')
    const [numBalcony,setNumBalcony] = useState('')
    const [hasLift,setHasLift] = useState('')
    const [hasParkingSpace,setHasParkingSpace]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const setSellTypeValue =e =>{
        setSellType(e.target.value);
    }
    const setNumRoomsValue = e=>{
        setNumRooms(e.target.value);
    }
    const setNumWashRoomsValue =e=>{
        setNumWashRooms(e.target.value)
    }
    const setNumLivingRoomsValue =e =>{
        setNumLivingRooms(e.target.value);
    }
    const setApartmentNoValue=e=>{
        setApartmentNo(e.target.value);
    }
    const setNumBalconyValue=e=>{
        setNumBalcony(e.target.value)
    }
    const setHasLiftValue = e=>{
        setHasLift(e.target.value)
    }
    const setTypeValue = e =>{
        setType(e.target.value);
    }
    const setAreaValue = e =>{
        setArea(e.target.value);
    }
    const setPriceValue = e =>{
        setPrice(e.target.value)
    }
    const setPlotValue = e =>{
        setPlot(e.target.value);
    }
    const setRoadValue= e =>{
        setRoad(e.target.value)
    }
    const setBlockValue = e =>{
        setBlock(e.target.value)
    }
    const setPostCodeValue = e =>{
        setPostCode(e.target.value)
    }
    const setAreaNameValue = e =>{
        setAreaName(e.target.value)
    }
    const setDistrictValue = e =>{
        setDistrict(e.target.value)
    }
    const setDivisionValue = e =>{
        setDivision(e.target.value)
    }
    const setHasParkingSpaceValue = e =>{
        setHasParkingSpace(e.target.value);
    }
    return (
        <div >
            <Jumbo/>
            <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="form-group">
                   
                    <label className="text-muted">Space Type(Residential/Commercial)</label>
                    <select value={type} onChange={setTypeValue} >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                    </select><p></p>
{/* 
                    <label className="text-muted">Space Type(Residential/Commercial)</label>
                    <input type="text" className="form-control" value={type} autoFocus onChange={setTypeValue}></input> */}

                    <label className="text-muted">Type(Sell/Rent)</label>
                    <select value={sellType} onChange={setSellTypeValue} >
                        <option value="Sell">Sell</option>
                        <option value="Rent">Rent</option>
                    </select><p></p>
{/* 
                    <label className="text-muted">Type(Sell/Rent)</label>
                    <input type="text" className="form-control" value={sellType} autoFocus onChange={setSellTypeValue}></input> */}
                    
                    <label className="text-muted">Area(sq. ft)</label>
                    <input type="text" className="form-control" value={area} autoFocus onChange={setAreaValue}></input>
                    
                    <label className="text-muted">Number of Bedrooms</label>
                    <input type="text" className="form-control" value={numRooms} autoFocus onChange={setNumRoomsValue}></input>
                    
                    <label className="text-muted">Number of Washrooms</label>
                    <input type="text" className="form-control" value={numWahsrooms} autoFocus onChange={setNumWashRoomsValue}></input>
                    
                    <label className="text-muted">Number of Living Rooms</label>
                    <input type="text" className="form-control" value={numLivingRooms} autoFocus onChange={setNumLivingRoomsValue}></input>
                    
                    <label className="text-muted">Number of Balcony</label>
                    <input type="text" className="form-control" value={numBalcony} autoFocus onChange={setNumBalconyValue}></input>
                    <p></p>
                    <label className="text-muted">Is there any elevator?</label>
                    <select value={hasLift} onChange={setHasLiftValue} >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select><p></p>
                    
                    <label className="text-muted">Apartment No</label>
                    <input type="text" className="form-control" value={apartmentNo} autoFocus onChange={setApartmentNoValue}></input>
                    <p></p>
                    <label className="text-muted">Is there parking space available?</label>
                    <select value={hasParkingSpace} onChange={setHasParkingSpaceValue} >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select><p></p>

                    <label className="text-muted">Price</label>
                    <input type="text" className="form-control"  autoFocus value={price} onChange={setPriceValue}></input>
                    
                    <label className="text-muted">Plot no</label>
                    <input type="text" className="form-control"  autoFocus value={plot} onChange={setPlotValue}></input>
                    
                    <label className="text-muted">Road no</label>
                    <input type="text" className="form-control" value={road} autoFocus onChange={setRoadValue}></input>
                    
                    <label className="text-muted">Block</label>
                    <input type="text" className="form-control" value={block} autoFocus onChange={setBlockValue}></input>
                    

                    <label className="text-muted">Post Code</label>
                    <input type="text" className="form-control" value={postCode} autoFocus onChange={setPostCodeValue}></input>
                    

                    <label className="text-muted">Area Name</label>
                    <input type="text" className="form-control" value={areaName} autoFocus onChange={setAreaNameValue}></input>
                    

                    <label className="text-muted">District</label>
                    <input type="text" className="form-control" value={district} autoFocus onChange={setDistrictValue}></input>
                    

                    <label className="text-muted">Division</label>
                    <input type="text" className="form-control" value={division} autoFocus onChange={setDivisionValue}></input>
                    
                    <label className="text-muted">Upload photos</label>
                    <input type="file" id="myfile" name="myfile" className="form-control" multiple="multiple"/> 
                    <p></p>

                    <button className="btn btn-outline-primary">Create Post</button>
                </div>
            </div>
        </form>
        </div>
    )
}

export default AddLand;