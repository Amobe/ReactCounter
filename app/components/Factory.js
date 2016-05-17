import React, { PropTypes } from 'react'

export default class Factory extends React.Component {
    static propTypes = {
        onCreateCounterClick: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props)
        this.onCreateCounterClick = this.onCreateCounterClick.bind(this)
    }

    onCreateCounterClick() {
        this.props.onCreateCounterClick()
    }

    render() {
        return (
            <div>
                <button type="button" onClick={(e) => {
                    e.preventDefault()
                    this.onCreateCounterClick()
                }}>Create Counter</button>
            </div>
        )
    }
}
