import React, { useEffect } from 'react';
import Card from './Card';
import { Jumbo } from '../';
import { getLands,getHouses,getSpaces} from '../../actions/property';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NewsFeed = ({ getLands, getHouses, getSpaces, lands, houses , spaces }) => {
  useEffect(() => {
    getLands();
    getHouses();
    getSpaces();
  }, [getLands, getHouses, getSpaces]);

  //later will be fetched from database
  const description =
    'See what are posted by our community to find your suitable place!';
  //console.log("lands here ",lands);
  //console.log("houses here ",houses);
  //console.log("spaces herer ",spaces);
  return (
    <div>
      <Jumbo description={description} />
      <h2 className='mb-4'>Latest Posted</h2>
      {lands.map((property, i) => {
        return <Card key={i} property={property} />;
      })}
      <div>
        {houses.map((land, i) => {
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
      </div>
    </div>
  );
};

NewsFeed.propTypes = {
  getLands: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired,
  getHouses : PropTypes.func.isRequired,
  getSpaces : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  lands: state.property.lands,
  houses: state.property.houses,
  spaces : state.property.spaces
});

export default connect(mapStateToProps, { getLands, getHouses, getSpaces })(NewsFeed);

// export default NewsFeed;
