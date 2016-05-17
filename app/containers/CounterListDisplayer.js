import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from '../actions'
import CounterList from '../components/CounterList'

const mapStateToProps = (state) => {
    return {
        counterList: state.counterList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseClick: (index) => dispatch(increaseCounter(index)),
        onDecreaseClick: (index) => dispatch(decreaseCounter(index)),
    }
}

const CounterListDisplayer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList)

export default CounterListDisplayer
