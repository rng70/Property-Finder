import React from "react";
import Jumbo from "./Jumbo";
import { Link } from 'react-router-dom';
// import { getLand } from '../../actions/property';
// import PropTypes from 'prop-types';
// import { connect, useDispatch } from 'react-redux';


const AddType = ({getLand}) => {

    // let data = '';
    
    // const datafetcher = useCallback(() => {
    //     getLand();
    // })

    // console.log("Before useeffect", data);
    // useEffect(() => {
    //     datafetcher();npm
    // }, [datafetcher, data]);

    // console.log("After useeffect", data);


    return(
        <div>
            <Jumbo/>
            <Link to="/addLand">
                <button className="btn btn-outline-primary">Add Land</button>
            </Link>
            <Link to="/addSpace">
                <button className="btn btn-outline-primary">Add Space</button>
            </Link>
            <Link to="/addHouse">
                <button className="btn btn-outline-primary">Add House</button>
            </Link>
            <Link to="/feed">
                {/* {console.log("From location", data)} */}
                <button className="btn btn-outline-primary">News feed</button>
            </Link>
        </div>
    )
}


// AddType.propTypes = {
//     getLand: PropTypes.func.isRequired
// }

// export default connect(null, { getLand })(AddType);
export default AddType;