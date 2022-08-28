import React, { useState } from "react";
import Jumbo from "./Jumbo";
import { addHouse } from '../../actions/property';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AddHouse =({addHouse})=>{
    let navigation = useNavigate();
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);

    //form data
    const [landArea,setArea] = useState('1250')
    const [price,setPrice] = useState('12000000')
    const [plot,setPlot] = useState('22')
    const [road,setRoad] = useState('25')
    const [block,setBlock] = useState('B')
    const [postCode,setPostCode] = useState('1219')
    const [areaName,setAreaName] = useState('Dhanmondi')
    const [district,setDistrict] = useState('Dhaka')
    const [division,setDivision] = useState('Dhaka')
    const [type,setType] = useState('residential')
    const [contactNo,setContactNo] = useState('017546456131')
    const [parkingSpaceArea,setparkingSpaceArea] = useState('1200')
    const [noOfFloors,setNumFloors] = useState('12')
    const isSold = false;

    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleFileInputChange = (e) => {
        const files = [...e.target.files];
        previewFile(files);
        setSelectedFiles(arr => [...arr, ...files]);
        setFileInputState(e.target.value);
    };

    const ReadFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(arr => [...arr, reader.result]);
        }
    }

    const previewFile = (files) => {
        files.map((file, i) =>  ReadFile(file));
    };

    const handleSubmit = (e)=>{
        console.log("handle submit called")
        e.preventDefault();
        addHouse({ price, noOfFloors, type, landArea, isSold,parkingSpaceArea,plot,road,postCode,areaName,district,division,contactNo, previewSource})
        navigation("/feed")
    }

    const setNumFloorsValue = e=>{
        setNumFloors(e.target.value);
    }
    const setContactNoValue = e=>{
        setContactNo(e.target.value);
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
    const setparkingSpaceAreaValue = e =>{
        setparkingSpaceArea(e.target.value);
    }
    return (
        <div >
            <Jumbo/>
            <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="form-group">
                   
                    <label className="text-muted">Space Type(Residential/Commercial)</label>
                    <select value={type} onChange={setTypeValue} >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                    </select><p></p>
          
                    <label className="text-muted">Area(sq. ft)</label>
                    <input type="text" className="form-control" value={landArea} autoFocus onChange={setAreaValue}></input>
                    
                    <label className="text-muted">Number of Floors</label>
                    <input type="text" className="form-control" value={noOfFloors} autoFocus onChange={setNumFloorsValue}></input>
                    
                    <label className="text-muted">Parking Area(sq.feet)</label>
                    <input type="text" className="form-control" value={parkingSpaceArea} autoFocus onChange={setparkingSpaceAreaValue}></input>

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
                    
                    <label className="text-muted">Contact Number</label>
                    <input type="text" className="form-control" value={contactNo} autoFocus onChange={setContactNoValue}></input>
                    
                    <label className="text-muted">Upload photos</label>
                    <input type="file" id="myfile" name="myfile" value={fileInputState} onChange={handleFileInputChange}  className="form-control" multiple="multiple"/> 
                    <p></p>
                    <button className="btn btn-outline-primary">Create Post</button>
                </div>
            </div>
        </form>
        </div>
    )
}

AddHouse.propTypes = {
    addHouse : PropTypes.func.isRequired
}

export default connect(null, { addHouse })(AddHouse);