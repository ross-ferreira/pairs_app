import React, { useState, Component, useEffect } from "react";

import { connect } from 'react-redux';

import {updateTooMNYClicks} from '../data/actions';

const mapStateToProps = (state) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        cards:state.cards,
        // allowClick:(state.cards.counter.length - state.cards.paired.length) < 3,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleMultiClick:()=>{
            dispatch (updateTooMNYClicks())
        },
}
}

const PairCard =({index,item, onCard,cards,handleMultiClick}) => {

    const allowClick = () => {
        let clicked=cards.filter(item => item.counter == true);
        let pairs=cards.filter(item => item.paired == true);
        return (clicked.length-pairs.length < 4);
    }

    const styles= {

            backgroundImage: (item.counter === false ? "url(" + "https://i.ya-webdesign.com/images/pear-clipart-yellow-pear-23.png" + ")": `url("${item.url}")`),
            backgroundSize: 'contain',
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: 'center',
            opacity: (item.paired === true ? '0': '1'),
          }

    return (
        <>
            <p  className="deck-card" onClick={allowClick() ? () => onCard(index):handleMultiClick } style={styles}>
                {/* {item.counter === false ? 'Clicked!!!!' : 'Not Clicked!!!!'}{item.name} */}
            </p>

        </>
    );
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(PairCard);

    

    // onClick={() => onCard(index)}