import { connect } from 'react-redux'
import { createCounter } from '../actions'
import Factory from '../components/Factory'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateCounterClick: () => dispatch(createCounter()),
    }
}
const CounterCreator = connect(
    mapStateToProps,
    mapDispatchToProps
)(Factory)

export default CounterCreator
