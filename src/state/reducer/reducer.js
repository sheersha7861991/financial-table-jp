const counter = (state = 1, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_DATA":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "INCREMENT":
            return state + action.payload
        default:
            return state
    }
}

export default counter