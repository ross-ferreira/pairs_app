export const shuffleCards = (valueShuff) => {
    return {
      type: "SHUFFLE",
      arrayShuff:valueShuff,
    }; 
  };

  export const updateClick = (valueC,valuePair,ValueS) => {
    return {
      type: 'CLICKSTATUS', 
      cardClick: valueC,
      valuePair:valuePair,
      scoreChange:ValueS,
    }; 
  };
  

  export const reset = () => {
    return {
      type: "RESET",
    }; 
  };
  

  export const updateScore = (scoreVal) => {
    return {
      type: 'SCOREUPDATE', 
      scoreVal: scoreVal,
    }; 
  }; 

  