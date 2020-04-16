import { connect } from 'react-redux';

import CardsNew from './CardsNew';

import { shuffleCards, updateClick } from '../../data/actions';


const mapStateToProps = ({cards,score}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        cards:cards,
        score:score,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        // handleFormSubmit: (valueR1,r2Pairs) => { 
        //     dispatch (addRound1Results(valueR1,r2Pairs));            
        // },
        handleShuffle:()=>{
            dispatch (shuffleCards())
        },
        handleCardClick:(valueC,ValueS)=>{
            dispatch (updateClick(valueC,ValueS));
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardsNew);

