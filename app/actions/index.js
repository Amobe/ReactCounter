let nextCounterIndex = 0

export const createCounter = () => {
    let index = nextCounterIndex++
    return {
        type: 'CREATE_COUNTER',
        index,
    }
}

export const deleteCounter = (index) => {
    return {
        type: 'DELETE_COUNTER',
        index,
    }
}

export const increaseCounter = (index) => {
    return {
        type: 'INCREASE',
        index,
    }
}

export const decreaseCounter = (index) => {
    return {
        type: 'DECREASE',
        index,
    }
}