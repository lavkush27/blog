import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import blogReducer from '../reducer/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(blogReducer, composeWithDevTools(
    applyMiddleware(thunk)
))
store.subscribe(() => {
    console.log(store.getState());
})
export default store;