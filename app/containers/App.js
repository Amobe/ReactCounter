import React from 'react'
import CounterCreator from '../containers/CounterCreator'
import CounterListDisplayer from '../containers/CounterListDisplayer'

export default class App extends React.Component {
    render() {
        return (
            <div className="counter">
                <CounterCreator />
                <CounterListDisplayer />
            </div>
        )
    }
}

