import { assert } from 'chai'
import * as Actions from '../../app/actions'
import * as ActionTypes from '../../app/constants/ActionTypes'

describe('actions', () => {
    before(() => {
        Actions.resetCounterIndex()
    })
    it('should create a counter', () => {
        const index = 0
        const expectedAction = {
            type: ActionTypes.CREATE_COUNTER,
            index,
        }
        const actualAction = Actions.createCounter()
        assert.deepEqual(actualAction, expectedAction)
    })
    it('should create second counter', () => {
        const index = 1
        const expectedAction = {
            type: ActionTypes.CREATE_COUNTER,
            index,
        }
        const actualAction = Actions.createCounter()
        assert.deepEqual(actualAction, expectedAction)
    })
    it('should create third counter', () => {
        const index = 2
        const expectedAction = {
            type: ActionTypes.CREATE_COUNTER,
            index,
        }
        const actualAction = Actions.createCounter()
        assert.deepEqual(actualAction, expectedAction)
    })
    it('should delete a counter', () => {
        const index = 0
        const expectedAction = {
            type: ActionTypes.DELETE_COUNTER,
            index,
        }
        const actualAction = Actions.deleteCounter(index)
        assert.deepEqual(actualAction, expectedAction)
    })
    it('should increase the value of a counter', () => {
        const index = 0
        const expectedAction = {
            type: ActionTypes.INCREASE,
            index,
        }
        const actualAction = Actions.increaseCounter(index)
        assert.deepEqual(actualAction, expectedAction)
    })
    it('should decrease the value of a counter', () => {
        const index = 0
        const expectedAction = {
            type: ActionTypes.DECREASE,
            index,
        }
        const actualAction = Actions.decreaseCounter(index)
        assert.deepEqual(actualAction, expectedAction)
    })
})