export const getData = () => {
    return (dispatch) => {
        dispatch({
            type: 'GET_DATA'

        })
    }
}

export const setData = (row) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_DATA',
            payload: row

        })
    }

}

export const incrementCounter = (value) => {
    return {

        type: 'INCREMENT',
        payload: value


    }

}


export const decrementCounter = (value) => {
    return {

        type: 'DECREMENT',
        payload: value


    }

}