import React,{useEffect} from 'react';
import Card from './Card';
import Jumbo from './Jumbo';
import { getLand } from '../../actions/property';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NewsFeed = ({getLand, properties}) => {
    useEffect(() => {
        getLand();
    }, [getLand])
    

    //later will be fetched from database
    const allProperties = [1, 2, 3, 4];
    
    return (
        <div>
            <Jumbo/>
            <h2 className='mb-4'>Latest Posted</h2>
            {allProperties.map((property,i)=>{
                return <Card key={i} property={property}/>
            })}
            <div>
            {properties.map((land, i) => {
                return (<div>
                    <p> Hello
                        {land.ownerType}
                    </p>
                </div>)
            })}</div>
        </div>
    )
}

NewsFeed.propTypes = {
    getLand: PropTypes.func.isRequired,
    property: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    properties: state.property.properties
})

export default connect(mapStateToProps, { getLand })(NewsFeed);

// export default NewsFeed;