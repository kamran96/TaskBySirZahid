import { combineReducers } from 'redux';
import BooksReducer from './reducerBook';
import ActiveBook from './reducerActiveBook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
