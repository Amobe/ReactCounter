import { assert } from 'chai'
import rootReducer from '../../app/reducers'
import * as Actions from '../../app/actions'

describe('count reducer', () => {
    beforeEach(() => {
        Actions.resetCounterIndex()
    })

    it('should return the initial state', () => {
        const initialState = {
            counterList: [],
        }

        const expected = initialState
        const actual = rootReducer(undefined, {})

        assert.deepEqual(actual, expected)
    })

    it('should create a counter', () => {
        const initialState = {
            counterList: [],
        }

        const expected = {
            counterList: [
                {
                    index: 0,
                    count: 0,
                },
            ],
        }

        const action = Actions.createCounter()
        const actual = rootReducer(initialState, action)

        assert.deepEqual(actual, expected)
    })

    it('should delete a counter', () => {
        const initialState = {
            counterList: [
                {
                    index: 0,
                    count: 0,
                },
                {
                    index: 1,
                    count: 0,
                },
                {
                    index: 2,
                    count: 0,
                },
            ],
        }

        const expected = {
            counterList: [
                {
                    index: 0,
                    count: 0,
                },
                {
                    index: 2,
                    count: 0,
                },
            ],
        }

        const action = Actions.deleteCounter(1)
        const actual = rootReducer(initialState, action)

        assert.deepEqual(actual, expected)
    })

    it('should increase the value', () => {
        const initialState = {
            counterList: [
                {
                    index: 0,
                    count: 0,
                },
            ],
        }

        const expected = {
            counterList: [
                {
                    index: 0,
                    count: 1,
                },
            ],
        }

        const action = Actions.increaseCounter(0)
        const actual = rootReducer(initialState, action)
        assert.deepEqual(actual, expected)
    })

    it('should decrease the value', () => {
        const initialState = {
            counterList: [
                {
                    index: 0,
                    count: 0,
                },
            ],
        }

        const expected = {
            counterList: [
                {
                    index: 0,
                    count: -1,
                },
            ],
        }

        const action = Actions.decreaseCounter(0)
        const actual = rootReducer(initialState, action)
        assert.deepEqual(actual, expected)
    })
})
