import {combineReducers} from 'redux';
import {reducer} from '@brigad/redux-rest-easy';
import ReducerUser from "./User/reducers";

export default combineReducers({
  restEasy: reducer,
  user: ReducerUser
});
