import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from '../actions'
import Control from '../components/Control'

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseClick: () => dispatch(increaseCounter()),
        onDecreaseClick: () => dispatch(decreaseCounter()),
    }
}
const CounterController = connect(
    mapStateToProps,
    mapDispatchToProps
)(Control)

export default CounterController
