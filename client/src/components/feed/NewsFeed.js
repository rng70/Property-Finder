import React, { useEffect } from 'react';
import Card from './Card';
import { Jumbo } from '../';
import { getLands} from '../../actions/property';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NewsFeed = ({ getLands, properties }) => {
  useEffect(() => {
    getLands();
  }, [getLands]);

  //later will be fetched from database
  const allProperties = [1, 2, 3, 4];
  const description =
    'See what are posted by our community to find your suitable place!';

  return (
    <div>
      <Jumbo description={description} />
      <h2 className='mb-4'>Latest Posted</h2>
      {properties.map((property, i) => {
        return <Card key={i} property={property} />;
      })}
      <div>
        {properties.map((land, i) => {
          return (
            <div>
              <p>
                {' '}
                Hello
                {land.ownerType}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

NewsFeed.propTypes = {
  getLand: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  properties: state.property.properties,
});

export default connect(mapStateToProps, { getLands })(NewsFeed);

// export default NewsFeed;
