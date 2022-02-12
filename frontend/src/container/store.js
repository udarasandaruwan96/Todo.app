import {createStore} from 'redux';

import rootReducer from './reducers';

//create new store
const store = createStore(rootReducer);

export default store;