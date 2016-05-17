const initialState = {
    counterList: [],
}

const counter = (state = {}, action) => {
    if (state.index !== action.index)
        return state
    switch(action.type) {
        case 'INCREASE':
            return Object.assign({}, state, {
                count: state.count + 1,
            })
        case 'DECREASE':
            return Object.assign({}, state, {
                count: state.count - 1,
            })
        default:
            return state
    }
}

const counterApp = (state = initialState.counterList, action) => {
    switch(action.type) {
        case 'CREATE_COUNTER':
            return [
                ...state,
                {
                    index: action.index,
                    count: 0,
                },
            ]
        case 'DELETE_COUNTER':
            return state
        case 'INCREASE':
        case 'DECREASE':
            return state.map((currentCounter) => counter(currentCounter, action))
        default:
            return state
    }
}

export default function app(state = initialState, action) {
    return {
        counterList: counterApp(state.counterList, action),
    }
}
