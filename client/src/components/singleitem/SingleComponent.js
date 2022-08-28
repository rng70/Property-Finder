import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSingleItem } from '../../actions/property';
import { useParams } from 'react-router-dom';

const SingleComponent = ({ getSingleItem, singleItem }) => {
    const { id } = useParams;

    useEffect(() => {
        getSingleItem(id);
    }, [getSingleItem, id]);

  return (
    <div>
          SingleComponent
          <p>{singleItem.id}</p>
    </div>
  )
}

SingleComponent.propTypes = {
    getSingleItem: PropTypes.func.isRequired,
    property: PropTypes.object.isRequired,
}

const mapStateToProp = state => ({
    singleItem: state.property.propertyVal
})

export default connect(mapStateToProp, { getSingleItem })(SingleComponent);