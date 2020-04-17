export const shuffleCards = (valueShuff) => {
    return {
      type: "SHUFFLE",
      arrayShuff:valueShuff,
    }; 
  };

  export const updateClick = (valueC,ValueS) => {
    return {
      type: 'CLICKSTATUS', 
      cardClick: valueC,
      scoreChange:ValueS,
    }; 
  };  

  export const reset = () => {
    return {
      type: "RESET",
    }; 
  };
  
  