import {combineReducers} from 'redux';
import {dataReducer} from './dataReducer';

export const reducers = combineReducers({
  dataReducer: dataReducer,
});
