import * as ActionTypes from '../constants/ActionTypes'

let nextCounterIndex = 0

// for test
export const resetCounterIndex = () => {
    nextCounterIndex = 0
}

export const createCounter = () => {
    let index = nextCounterIndex++
    return {
        type: ActionTypes.CREATE_COUNTER,
        index,
    }
}

export const deleteCounter = (index) => {
    return {
        type: ActionTypes.DELETE_COUNTER,
        index,
    }
}

export const increaseCounter = (index) => {
    return {
        type: ActionTypes.INCREASE,
        index,
    }
}

export const decreaseCounter = (index) => {
    return {
        type: ActionTypes.DECREASE,
        index,
    }
}