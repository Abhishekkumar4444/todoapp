import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';
import rootreducers from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootreducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
