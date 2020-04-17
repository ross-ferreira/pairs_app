import { connect } from 'react-redux';

import CardsNew from './CardsNew';

import { shuffleCards, updateClick } from '../../data/actions';


const mapStateToProps = (state) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        cards:state.cards,
        score:state.score,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleShuffle:(valueShuff)=>{
            dispatch (shuffleCards(valueShuff))
        },
        handleCardClick:(valueC,ValueS)=>{
            dispatch (updateClick(valueC,ValueS));
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardsNew);

