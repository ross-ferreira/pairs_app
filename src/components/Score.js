import React, { useState, Component, useEffect } from "react";

import { connect } from 'react-redux';

const mapStateToProps = ({score}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        score:score,
    }
}



const Score =({
    score,
}) => {

    return (
        <>
        <div class="score">
            SCORE: {score}
        </div>
        </>
    );
}

export default connect(mapStateToProps)(Score);




    // const clicker = (index) => {
    //     const newCards = [...cards];
    //     newCards[index].counter = !cards[index].counter;
    //     return newCards
    //     console.log(index)
    //     // this.findPair();
    //     // this.updateScore();
        
    // };
    // updateScore= () => {
    //     let arr2=[];
    //     this.state.cards.filter((item,index)=>{
    //       if (item.paired == true){
    //                return arr2.push(item.paired);
    //               }
    //     });
        
    //     let tot= (arr2.length / 2)
    //     this.setState({ score: tot});
    // }
    
