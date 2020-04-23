import React, { useState, Component, useEffect } from "react";

import { Link } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import PairCard from '../PairCard';

import CountDown from "../CountDown/";

const CardsNew = ({
    getDataSet,
    cards,
    score,
    handleShuffle,
    handleCardClick,
    handleScore,
    selectedOption,
    playername,
}) => {

    const [loading,setLoading]= useState(true)
   
    useEffect(() => {
        getDataSet();
        setLoading(false);
        // handleShuffle(shuffle());
    }, []);
    
    const shuffle = () => {
        let arrShuff = [...cards]
        arrShuff.sort(() => Math.random() - 0.5)
        return arrShuff
    };

    const clicker = (index) => {
        const newCards = [...cards];
        newCards[index] = { ...cards[index] }
        newCards[index].counter = !cards[index].counter;
        return newCards
    };


    const findPair = () => {
        //find new clicked items
        let newArr = [];
        cards.filter((item, index) => {
            if (item.counter === true && item.paired === false) {
                return newArr.push(item);
            }
        });
        //if those new clicked items have same name then set item.paired = true
        if (newArr.length >= 2 && newArr.length < 3) {
            cards.map((item, index) => {
                if (item.counter === true && (newArr[0].name === newArr[1].name)) {
                    return item.paired = true;
                } else
                    return item;
            })
        };
        console.log(newArr);

        let newArr2 = [];
        cards.filter((item, index) => {
            if (item.counter === true) {
                return newArr2.push(item);
            }
        });

        if (newArr2.length >= 3) {
            cards.map((item, index) => {
                if (item.counter === true) {
                    return item.counter = !item.counter;
                } else
                    return item;
            })
        };


        return cards;
    }

    console.log("pairs", findPair());


    

    const updateScore = () => {
        let arr2 = [];
        cards.filter((item, index) => {
            if (item.paired === true) {
                return arr2.push(item.paired);
            }
        });

        let tot = (arr2.length / 2)
        return tot;

    }

    const handleClick = (index) => {
        // index.preventDefault();
        handleCardClick(clicker(index), findPair());
        // findPair();
        handleScore(updateScore());
    };


    console.log("score", updateScore())


    return (
        <>
            {/* <pre>
            {JSON.stringify(this.state.cards, null, 2)}
        </pre> */}
            {(updateScore() > 3)? <Redirect to="/endgame"/>:null}
            <div class="score">
                {playername}'s Score:{updateScore()}
            </div>
            {loading? <div><h1>Loading......</h1></div>:
            <div className="loaded-items">
                <div class="timer">
                    <CountDown selectedOption= {selectedOption}/>
                </div>
                <div class="card-deck">
                    {cards.map((item, index) => (
                        <PairCard 
                            key={item.id} 
                            onCard={() => handleClick(index)} 
                            cards={cards} 
                            item={item} 
                            index={index} />
                    ))}
                </div>
            </div>}
            <Link to="/endgame">
                <button type="submit" className="btn btn-outline-dark" onClick={handleScore(updateScore())}> End Game </button>
            </Link>


        </>
    );
}

export default CardsNew;


        // if (newArr2.length >= 2) {
        //     setTimeout(() => {
        //         cards.map((item, index) => {
        //             if (item.counter === true) {
        //                 return item.counter = !item.counter;
        //             } else
        //                 return item;
        //         })
        //       }, 1000);
        // };





// ...state, 
// cards:[
//     ...state.cards,
//     cards[index]:{
//         ...state.cards[index],
//         counter: 
//     }
// ]

// onCard={()=>{handleClick(index)}}


// let sortedArray = [...originalArray].sort(compareFunction);

// const [cardClicked, setCardClicked] = useState(cards);
// const [pairs, setPairs] = useState(cards);
// const [scoreinput, setScore] = useState(score);

// state = {
//     school: {
//       name: "Hogwarts",
//       house: {
//         name: "Ravenclaw",
//         points: 17
//       }
//     }
//   }

// // Two points for Ravenclaw
// return {
//   ...state, // copy the state (level 0)
//   school: {
//     ...state.school, // copy level 1
//     house: {         // replace state.school.house...
//       ...state.school.house, // copy existing house properties
//       points: state.school.house.points + 2  // change a property
//     }
//   }
// }