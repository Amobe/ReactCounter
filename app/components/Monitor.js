import React, { PropTypes } from 'react'

export default class Monitor extends React.Component {
    static propTypes = {
        counter: PropTypes.number.isRequired,
    };

    render() {
        const { counter } = this.props
        return (
            <label className="display">{counter}</label>
        )
    }
}
