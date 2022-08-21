import React, { useState } from "react";
import Jumbo from "./Jumbo";
import { addLand } from '../../actions/property';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddLand = ({addLand}) =>{
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    //form data
    const [landArea,setArea] = useState('')
    const [price,setPrice] = useState('')
    const [plot,setPlot] = useState('')
    const [road,setRoad] = useState('')
    const [block,setBlock] = useState('')
    const [postCode,setPostCode] = useState('')
    const [areaName,setAreaName] = useState('')
    const [district,setDistrict] = useState('')
    const [division, setDivision] = useState('')
    const [isSold, setSoldState] = useState(true)

    const handleSubmit = (e)=>{
        e.preventDefault();
        addLand({landArea, price, isSold})
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
    return (
        <div >
            <Jumbo/>
            <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="form-group">
                    <label className="text-muted">Area(sq. ft)</label>
                    <input type="text" className="form-control" value={landArea} autoFocus onChange={setAreaValue}></input>
                    
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
                    
                    <p></p>
                    <button className="btn btn-outline-primary">Create Post</button>
                </div>
            </div>
        </form>
        </div>
    )
}

AddLand.propTypes = {
    addLand: PropTypes.func.isRequired
}

export default connect(null, { addLand })(AddLand);