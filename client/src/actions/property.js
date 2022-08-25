//import api from '../utils/api';
import axios from 'axios';
import {
    ADD_LAND,
    ADD_HOUSE,
    ADD_SPACE,
    ADD_LAND_FAIL,
    ADD_HOUSE_FAIL,
    ADD_SPACE_FAIL,
    GET_LAND,
    GET_LAND_FAIL
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// ADD SPACE
export const addSpace = (props) => async dispatch => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }

    const { location, price, sellType, type, area, noOfRooms, noOfKitchens, noOfWashrooms, noOfDiningRooms, noOfLivingRooms, noOfServentRooms, apartmentNo, noOfFloors, hasLift, hasSecurityGuard, noOfBalcony, parkingSpace, isAvailable, spaceDetails, whichFloors } = props;

    const body = JSON.stringify({ location, price, sellType, type, area, noOfRooms, noOfKitchens, noOfWashrooms, noOfDiningRooms, noOfLivingRooms, noOfServentRooms, apartmentNo, noOfFloors, hasLift, hasSecurityGuard, noOfBalcony, parkingSpace, isAvailable, spaceDetails, whichFloors })

    try {
        const res = await axios.posts(`http://localhost:5000/api/addProp/addSpace`, body, config);

        dispatch({
            type: ADD_SPACE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
        type: ADD_SPACE_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// ADD LAND
export const addLand = (props) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const { owner, location, ownerType, landArea, price, isSold, landDetails } = props;
    
    const body = JSON.stringify({ owner, location, ownerType, landArea, price, isSold, landDetails });
    try {
        
        const res = await axios.post(`http://localhost:5000/api/addProp/addLand`, body, config);
        
        dispatch({
            type: ADD_LAND,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ADD_LAND_FAIL,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// ADD HOUSE
export const addHouse = (props) => async dispatch => {
    try {

        const { id } = props;
        const res = await axios.put(`/api/posts/like/${id}`);
        

        dispatch({
        type: ADD_HOUSE,
        payload: { id, likes: res.data }
        });
    } catch (err) {
        dispatch({
        type: ADD_HOUSE_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// GET LAND
export const getLand = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get(`http://localhost:5000/api/info/getLand`, config);

        dispatch({
        type: GET_LAND,
        payload: res.data
        });
    } catch (err) {
        dispatch({
        type: GET_LAND_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status }
    });
}
};

// // Remove like
// export const removeLike = (id) => async (dispatch) => {
//   try {
//     const res = await axios.put(`/axios/posts/unlike/${id}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data }
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Delete post
// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await axios.delete(`/api/posts/${id}`);

//     dispatch({
//       type: DELETE_POST,
//       payload: id
//     });

//     dispatch(setAlert('Post Removed', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Add post
// export const addPost = (formData) => async (dispatch) => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//   try {
//     const res = await axios.post('/api/posts', formData, config);

//     dispatch({
//       type: ADD_POST,
//       payload: res.data
//     });

//     dispatch(setAlert('Post Created', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Add comment
// export const addComment = (postId, formData) => async (dispatch) => {
//   const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//   }
  
//   try {
//     const res = await axios.post(`/api/posts/comment/${postId}`, formData, config);

//     dispatch({
//       type: ADD_COMMENT,
//       payload: res.data
//     });

//     dispatch(setAlert('Comment Added', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Delete comment
// export const deleteComment = (postId, commentId) => async (dispatch) => {
//   try {
//     await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

//     dispatch({
//       type: REMOVE_COMMENT,
//       payload: commentId
//     });

//     dispatch(setAlert('Comment Removed', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };