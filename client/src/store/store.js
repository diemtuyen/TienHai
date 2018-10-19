import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from '../reducers/newsReducer';
import authReducer from '../reducers/authReducer';

const store = createStore(
  combineReducers({
    newsRedu: newsReducer,
    authRedu: authReducer
  }),
  applyMiddleware(
    thunk
  )
);

export default store;