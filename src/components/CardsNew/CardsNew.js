import React, { useState, Component, useEffect } from "react";
import PairCard from '../PairCard';



const CardsNew =({
    cards,
    score,
    handleShuffle,
    handleCardClick,
}) => {

    useEffect(() => {
        handleShuffle();
      }, []);

    const [cardClicked, setCardClicked] = useState(cards);
    const [pairs, setPairs] = useState(cards);
    const [scoreinput, setScore] = useState(score);



    const clicker = (index) => {
        const newCards = [...cards];
        newCards[index].counter = !cards[index].counter;
        return newCards
        console.log(index)        
    };


    const findPair = () => {
        let newArr = [];
        cards.filter((item, index) => {
            if (item.counter == true && item.paired == false) {
                return newArr.push(item);
            }
        });
    if (newArr.length >= 2){ 
        cards.map((item, index) => {
            if (item.counter == true && (newArr[0].name == newArr[1].name)) {
                return item.paired = true;
            } else
                return item;
        })
    };
    console.log(newArr);
    }

    const updateScore= () => {
        let arr2=[];
        cards.filter((item,index)=>{
          if (item.paired == true){
                   return arr2.push(item.paired);
                  }
        });
        
        let tot= (arr2.length / 2)
        return tot;
    }

    console.log("score",scoreinput)

    const handleClick = (index) => {
        // index.preventDefault();
        setCardClicked(clicker(index));
        setPairs(findPair());
        setScore(updateScore());
        handleCardClick(cardClicked,scoreinput);

      };

    return (
        <>
        {/* <pre>
            {JSON.stringify(this.state.cards, null, 2)}
        </pre> */}
        <div class="score">
            SCORE: {score}
        </div>
        <div class="card-deck">
                {cards.map((item, index) => (
                    <PairCard key={item.id} onCard={()=>{handleClick(index)}} item={item} index={index} />
                ))}
        </div>


        </>
    );
}

export default CardsNew;

