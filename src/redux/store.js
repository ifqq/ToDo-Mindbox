import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './reducers/filter';
import { tasksReducer } from './reducers/tasks';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});
