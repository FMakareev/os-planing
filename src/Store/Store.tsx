import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './Reducers'
import {IUserState} from "./Reducers/User/reducers";


export interface IStoreState  {
	user: IUserState,
	[prop: string]: any;
}

const initialState = {};


export const Store = createStore(rootReducer, initialState, composeWithDevTools(
	applyMiddleware(thunk),
));

export default Store;
