import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../src/state/reducer'
import { helloSaga } from './state/saga'
const sagaMiddleWare = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare)

)
sagaMiddleWare.run(helloSaga)
export default store