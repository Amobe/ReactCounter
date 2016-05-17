import React, { PropTypes } from 'react'

export default class Counter extends React.Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        onIncreaseClick: PropTypes.func.isRequired,
        onDecreaseClick: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props)
        this.onIncreaseClick = this.props.onIncreaseClick.bind(this)
        this.onDecreaseClick = this.props.onDecreaseClick.bind(this)
    }

    render() {
        const { count } = this.props
        return (
            <div>
                <label className="display">{count}</label>
                <div>
                    <button type="button" onClick={e => {
                        e.preventDefault()
                        this.onIncreaseClick()
                    }}>＋</button>
                    <button type="button" onClick={e => {
                        e.preventDefault()
                        this.onDecreaseClick()
                    }}>－</button>
                </div>
            </div>
        )
    }
}
