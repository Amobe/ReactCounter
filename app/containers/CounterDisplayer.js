import { connect } from 'react-redux'
import Monitor from '../components/Monitor'

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

const CounterDisplayer = connect(
    mapStateToProps
)(Monitor)

export default CounterDisplayer
