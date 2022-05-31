import axios from 'axios';
import { API_URL } from '../config';

//selectors
export const getPublishedAds = ({ ads }) => (ads.data.filter(ad => (ad.status === 'published')));
export const getAdById = ({ ads }, id) => (ads.data.find(ad => (ad._id === id)));

//action name creator
const createActionName = actionName => `app/posts/${actionName}`;

//action types
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_AD = createActionName('ADD_AD');

// action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const addAd = payload => ({ payload, type: ADD_AD });

// thunk creators

export const loadAdsRequest = () => {
  return async dispatch => {
    dispatch(fetchStarted({ name: 'LOAD_ADS' }));
    try {
      let res = await axios.get(`${API_URL}/ads`);
      dispatch(fetchSuccess(res.data));
    } catch (e) {
      dispatch(fetchError({ name: 'LOAD_ADS', error: e.message }));
    }
  };
};

export const addAdRequest = (ad) => {
  console.log(ad);
  return async dispatch => {
    dispatch(fetchStarted({ name: 'ADD_AD' }));
    try {
      let res = await axios.post(
        `${API_URL}/ads`,
        ad);
      dispatch(addAd(res.data));
      dispatch(loadAdsRequest());
    } catch (e) {
      dispatch(fetchError({ name: 'ADD_AD', error: e.message }));
    }
  };
};

// Initial state

const initialState = {
  data: [],
  requests: [],
};


//reducer
const adsReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case ADD_AD: {
      return { ...statePart, data: [...statePart.data, action.payload] };
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};

export default adsReducer;
