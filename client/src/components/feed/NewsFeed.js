import React, { useEffect, useState } from 'react';
import FeedCard from './FeedCard';
import { Jumbo } from '../';
import { getLands, getHouses, getSpaces} from '../../actions/property';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select'
import './style.css';

const NewsFeed = ({ getLands, getHouses, getSpaces, lands, houses , spaces }) => {
  useEffect(() => {
    getLands();
    getHouses();
    getSpaces();
  }, [getLands, getHouses, getSpaces]);

  
  //later will be fetched from database
  const description = 'See what are posted by our community to find your suitable place!';
  // console.log("lands here ",lands);
  // console.log("houses here ", houses);
  // console.log("spaces herer ",spaces);


  const [selectedArea, setSelectedArea] = useState();
  const optionList = [
    { area : "Dhaka", label :"Dhaka"},
    { area : "Chattrogram", label :"Chattrogram"},
    { area : "Rajshahi", label :"Rajshahi"},
    { area : "Khulna", label :"Khulna"},
    { area : "Barisal", label :"Barisal"},
    { area : "Sylhet", label :"Sylhet"}
  ];
  const  handleSelect= (data)=> {
    setSelectedArea(data);
  }

  const CardDivStyle = {
    objectFit: "cover",
    objectPosition: "0px 0px",
    marginLeft : "5px",
    marginBottom : "5px",
    marginTop : 5
  }
  return (
    <div>
      <Jumbo description={description} />
      <div className='search'>
      <h2>Choose your Location</h2>
            <div className='dropdown-container'>
                <Select options={optionList} placeholder="Select Area"
                value={selectedArea}
                onChange={handleSelect}
                isSearchable={true}/>
            </div>
      </div>
      <h2 className='mb-4'>Latest Posted Lands</h2>
      <div className='row' style={CardDivStyle}>
        {lands && lands.map((property, i) => {
          return <FeedCard key={i} property={property} />;
        })}
      </div>
      <h2 className='mb-4'>Latest Apartments/Commercial spaces</h2>
      <div className='row' style={CardDivStyle}>
        {spaces && spaces.map((space, i) => {
          return <FeedCard key={i} property={space} />;
        })}
      </div>
      <h2 className='mb-4'>Latest Posted Houses</h2>
      <div className='row' style={CardDivStyle}>
        {houses && houses.map((property, i) => {
          return <FeedCard key={i} property={property} />;
        })}
      </div>
      {/* <div>
        {houses && houses.map((land, i) => {
          return (
            <div>
              <p>
                {' '}
                Hello 
                {" "+land.price}
              </p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

NewsFeed.propTypes = {
  getLands: PropTypes.func.isRequired,
  getHouses : PropTypes.func.isRequired,
  getSpaces : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  lands: state.property.lands,
  houses: state.property.houses,
  spaces : state.property.spaces
});

export default connect(mapStateToProps, { getLands, getHouses, getSpaces })(NewsFeed);