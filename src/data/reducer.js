import initial from '../data/initial';

const counterIncrease = state => ({ ...state, count: state.count + 1 });

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

const shuffleCards = (state) => ({ ...state, cards: shuffle(state.cards)})

// const shuffleCards= state => ({...state, cards: state.cards.sort(() => Math.random() - 0.5)});

const clickUpdate = (state,{cardClick}) => ({ ...state, cards: cardClick })

const scoreUpdate = (state,{scoreChange}) => ({ ...state, score: scoreChange })



export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state);
        case "SHUFFLE": return shuffleCards(state);
        case "CLICKSTATUS": return scoreUpdate(clickUpdate(state,action),action);;
        case "RESET": return initial;
        default: return state;
        }
    };







// const cardStatus = (index) => {
//     let newCards = [...state.cards];
//     newCards[index].counter = !state.cards[index].counter;
//     ({ cards: newCards });
    
// }

// const updateScore= state => {
//     let arr2=[];
//     state.cards.filter((item,index)=>{
//       if (item.paired == true){
//                return arr2.push(item.paired);
//               }
//     });
    
//     let tot= (arr2.length / 2);
//     ({ score: tot});
// }