import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    counterList: [],
}

const counter = (state = {}, action) => {
    if (state.index !== action.index)
        return state
    switch(action.type) {
        case ActionTypes.INCREASE:
            return Object.assign({}, state, {
                count: state.count + 1,
            })
        case ActionTypes.DECREASE:
            return Object.assign({}, state, {
                count: state.count - 1,
            })
        default:
            return state
    }
}

const counterApp = (state = initialState.counterList, action) => {
    switch(action.type) {
        case ActionTypes.CREATE_COUNTER:
            return [
                ...state,
                {
                    index: action.index,
                    count: 0,
                },
            ]
        case ActionTypes.DELETE_COUNTER:
            return state.filter((currentCounter) => {
                return currentCounter.index !== action.index
            })
        case ActionTypes.INCREASE:
        case ActionTypes.DECREASE:
            return state.map((currentCounter) => counter(currentCounter, action))
        default:
            return state
    }
}

export default function rootReducer(state = initialState, action) {
    return {
        counterList: counterApp(state.counterList, action),
    }
}
