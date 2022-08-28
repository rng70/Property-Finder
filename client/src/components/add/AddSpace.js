import React, { useState } from "react";
import Jumbo from "./Jumbo";
import { addSpace } from '../../actions/property';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AddSpace = ({addSpace}) =>{
    let navigation = useNavigate();
    const [formData, setFormData] = useState({
        area: '5432001',
        price: '123450000',
        plot: '12',
        road: '15',
        block: 'E',
        postCode: '1200',
        areaName: 'Kakrail',
        district: 'Chittagong',
        division: 'Rajshahi',
        type: 'residential',
        sellType: 'rent',
        noOfRooms: '1',
        noOfWashrooms: '2',
        noOfLivingRooms: '1',
        apartmentNo: '4',
        noOfBalcony: '3',
        hasLift: true,
        parkingSpace: true,
        noOfKitchens: '1',
        noOfDiningRooms: '2',
        noOfServentRooms: '1',
        noOfFloors: '12',
        whichFloors: '2',
        isAvailable: true,
        hasSecurityGuard: true,
        location: null,
        spaceDetails: "South facing apartment ",
    })

    const { area, price, sellType, type,  noOfRooms, noOfKitchens, noOfWashrooms, noOfDiningRooms, noOfLivingRooms, noOfServentRooms, apartmentNo, noOfFloors, hasLift, hasSecurityGuard, noOfBalcony, parkingSpace, isAvailable, spaceDetails, whichFloors, plot, road, block, district, division, postCode, areaName } = formData;

    
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

    const handleSubmit = (e) => {
        e.preventDefault();
        addSpace({ area, price, sellType, type,  noOfRooms, noOfKitchens, noOfWashrooms, noOfDiningRooms, noOfLivingRooms, noOfServentRooms, apartmentNo, noOfFloors, hasLift, hasSecurityGuard, noOfBalcony, parkingSpace, isAvailable, spaceDetails, whichFloors, plot, road, block, district, division, postCode, areaName });
        navigation("/feed");
    }

    const onChange = async (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // const handleSubmitFile = (e) => {
    //     e.preventDefault();
    //     if (!selectedFiles) return;
    //     const reader = new FileReader();
    //     reader.readAsDataURL(selectedFiles);
    //     reader.onloadend = () => {
    //         // uploadImage(reader.result);
    //     };
    //     reader.onerror = () => {
    //         console.error('AHHHHHHHH!!');
    //         setErrMsg('something went wrong!');
    //     };
    // };

    return (
        <div >
            <Jumbo/>
            <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="form-group">
                   
                    <label className="text-muted">Space Type(Residential/Commercial)</label>
                    <select name='type' value={type} onChange={(e) => onChange(e)} >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                    </select><p></p>

                    <label className="text-muted">Type(Sell/Rent)</label>
                    <select name='sellType' value={sellType} onChange={(e) => onChange(e)} >
                        <option value="sell">Sell</option>
                        <option value="rent">Rent</option>
                    </select><p></p>
                    
                    <label className="text-muted">Area(sq. ft)</label>
                    <input type="text" className="form-control" name='area' value={area} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Number of Bedrooms</label>
                    <input type="text" className="form-control" name='noOfRooms' value={noOfRooms} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Number of Kitchens</label>
                    <input type="text" className="form-control" name='noOfKitchens' value={noOfKitchens} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Number of Washrooms</label>
                    <input type="text" className="form-control" name='noOfWashrooms' value={noOfWashrooms} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Number of Dining Rooms</label>
                    <input type="text" className="form-control" name='noOfDiningRooms' value={noOfDiningRooms} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Number of Living Rooms</label>
                    <input type="text" className="form-control" name='noOfLivingRooms' value={noOfLivingRooms} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Number of Servent Rooms</label>
                    <input type="text" className="form-control" name='noOfServentRooms' value={noOfServentRooms} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Number of Balcony</label>
                    <input type="text" className="form-control" name='noOfBalcony' value={noOfBalcony} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Number of Floors</label>
                    <input type="text" className="form-control" name='noOfFloors' value={noOfFloors} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Floor Number</label>
                    <input type="text" className="form-control" name='whichFloors' value={whichFloors} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    
                    <p></p>
                    <label className="text-muted">Is there any elevator?</label>
                    <select name='hasLift' value={hasLift} onChange={(e) => onChange(e)} >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select><p></p>
                    
                    <label className="text-muted">Apartment No</label>
                    <input type="text" className="form-control" name='apartmentNo' value={apartmentNo} autoFocus onChange={(e) => onChange(e)}></input>
                    <p></p>
                    <label className="text-muted">Is there parking space available?</label>
                    <select name='parkingSpace' value={parkingSpace} onChange={(e) => onChange(e)} >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select><p></p>

                    <label className="text-muted">Price</label>
                    <input type="text" className="form-control" name='price' autoFocus value={price} onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Plot no</label>
                    <input type="text" className="form-control" name='plot' autoFocus value={plot} onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Road no</label>
                    <input type="text" className="form-control" name='road' value={road} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Block</label>
                    <input type="text" className="form-control" name='block' value={block} autoFocus onChange={(e) => onChange(e)}></input>
                    

                    <label className="text-muted">Post Code</label>
                    <input type="text" className="form-control" name='postCode' value={postCode} autoFocus onChange={(e) => onChange(e)}></input>
                    

                    <label className="text-muted">Area Name</label>
                    <input type="text" className="form-control" name='areaName' value={areaName} autoFocus onChange={(e) => onChange(e)}></input>
                    

                    <label className="text-muted">District</label>
                    <input type="text" className="form-control" name='district' value={district} autoFocus onChange={(e) => onChange(e)}></input>
                    

                    <label className="text-muted">Division</label>
                    <input type="text" className="form-control" name='division' value={division} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label className="text-muted">Additional Description</label>
                    <input type="text" className="form-control" name='spaceDetails' value={spaceDetails} autoFocus onChange={(e) => onChange(e)}></input>
                    
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

AddSpace.propTypes = {
    addSpace : PropTypes.func.isRequired
}

export default connect(null, { addSpace })(AddSpace);
