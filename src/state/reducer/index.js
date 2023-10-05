
import counter from './reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    counter,
})

export default rootReducer