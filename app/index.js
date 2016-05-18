import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { createCounter } from './actions'
import App from './containers/App'

let store = createStore(rootReducer)
// store-logging
// let unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(createCounter())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
