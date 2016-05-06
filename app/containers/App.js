import React from 'react'
import CounterController from '../containers/CounterController'
import CounterDisplayer from '../containers/CounterDisplayer'

export default class App extends React.Component {
    render() {
        return (
            <div className="counter">
                <CounterDisplayer />
                <CounterController />
            </div>
        )
    }
}

