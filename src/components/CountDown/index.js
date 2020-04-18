import { connect } from 'react-redux';
import CountDown from './CountDown';
// import { increment } from '../CountDown';

const mapStateToProps = (state) =>{

    return {
        counter: state.counter
    }

}


// const mapDispatchToProps = (dispatch) => {

//     return {
//         timerExpired: () => {
//             dispatch(increment())
//         }
//     }
// }

export default connect(mapStateToProps, null)(CountDown);
