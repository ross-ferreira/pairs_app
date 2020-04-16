export const shuffleCards = () => {
    return {
      type: "SHUFFLE",
    }; 
  };

  export const updateClick = (valueC,ValueS) => {
    return {
      type: 'CLICKSTATUS', 
      cardClick: valueC,
      scoreChange:ValueS,
    }; 
  };  

  
//   export const addPlayerNameP1 = (valueP) => {
//     return {
//       type: 'ADDPLAYERNAMEP1', 
//       playerName: { 
//         playerName: valueP,
//         gamesWon: 0,
//         totalPoints: 0,
//         score:0,
//         gamesPlayed: 0
//       },
//   }; 
//   };
  
  
//   export const addRound1Results = (valueR1,r2Pairs) => {
//     return {
//       type: "ADDR1RESULTS",
//         resultsR1: valueR1,
//         r2Pairs: r2Pairs,
//   }; 
//   };
  
  
  