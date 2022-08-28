import React, { useState } from "react";
import Jumbo from "./Jumbo";
import { addLand } from '../../actions/property';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AddLand = ({addLand}) =>{
    let navigation = useNavigate();
    const [formData, setFormData] = useState({
        landArea: '5700',
        price: '100000000',
        plot: '12',
        road: '7',
        block: 'C',
        postCode: '1219',
        areaName: 'Banasree',
        district: 'Dhaka',
        division: 'Dhaka',
        landDetails : 'Cornenr plot',
        isSold: false,
        
    })

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

    const onChange = async (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const { landArea, price, plot, road, block, postCode, areaName, district, division, isSold,landDetails } = formData;

    const handleSubmit = (e)=>{
        e.preventDefault();
        addLand({landArea, price, plot, road, block, postCode, areaName, district, division, isSold,landDetails})
        navigation("/feed")
    }

    return (
        <div >
            <Jumbo/>
            <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="form-group">
                    <div>
                    <label style={ {display: "inline-block"} } className="text-muted">Area(sq. ft)</label>
                    <input style={ {display: "inline-block"} } type="text" className="form-control" name='landArea' value={landArea} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <label style={ {display: "inline-block"} } className="text-muted">Price</label>
                    <input style={ {display: "inline-block"} } type="text" className="form-control"  autoFocus name='price' value={price} onChange={(e) => onChange(e)}></input>
                    </div>
                    <label className="text-muted">Plot no</label>
                    <input type="text" className="form-control"  autoFocus name='plot' value={plot} onChange={(e) => onChange(e)}></input>
                    
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
                    <input type="text" className="form-control" name='landDetails' value={landDetails} autoFocus onChange={(e) => onChange(e)}></input>
                    
                    <p></p>
                        
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

AddLand.propTypes = {
    addLand: PropTypes.func.isRequired
}

export default connect(null, { addLand })(AddLand);