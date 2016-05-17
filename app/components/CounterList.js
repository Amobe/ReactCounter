import React, { PropTypes } from 'react'
import Counter from './Counter'

export default class CounterList extends React.Component {
    static propTypes = {
        counterList: PropTypes.arrayOf(
            PropTypes.shape({
                index: PropTypes.number.isRequired,
                count: PropTypes.number.isRequired,
            }).isRequired
        ).isRequired,
        onIncreaseClick: PropTypes.func.isRequired,
        onDecreaseClick: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props)
        this.onIncreaseClick = this.props.onIncreaseClick.bind(this)
        this.onDecreaseClick = this.props.onDecreaseClick.bind(this)
    }

    render() {
        const { counterList } = this.props
        if (counterList === null) {
            return (
                <div></div>
            )
        }
        return (
            <div>
                {counterList.map((counter) => 
                    <Counter
                        key={counter.index}
                        {...counter}
                        onIncreaseClick={() => this.onIncreaseClick(counter.index)} 
                        onDecreaseClick={() => this.onDecreaseClick(counter.index)} />
                )}
            </div>
        )
    }
}
