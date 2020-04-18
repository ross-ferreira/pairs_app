import { connect } from 'react-redux';

import CardsNew from './CardsNew';

import { shuffleCards, updateClick,updateScore } from '../../data/actions';

import history from "../../history";


const mapStateToProps = (state) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        cards:state.cards,
        score:state.score,  
        selectedOption:state.selectedOption,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleShuffle:(valueShuff)=>{
            dispatch (shuffleCards(valueShuff))
        },
        handleCardClick:(valueC,valuePair,ValueS)=>{
            dispatch (updateClick(valueC,valuePair,ValueS));
        },

        handleScore:(scoreVal)=>{
            dispatch (updateScore(scoreVal))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardsNew);

// handleEndGame: scoreVal => {
//     // dispatch the action
//     dispatch (updateScore(scoreVal));
//     // go to the homepage
//     history.push("/endgame"); 
// },
