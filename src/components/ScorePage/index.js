import React, { useState, Component, useEffect } from "react";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import {reset} from '../../data/actions'

const mapStateToProps = ({cards,score,playername}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        cards:cards,
        score:score,
        playername:playername,
    }

}
const mapDispatchToProps = (dispatch) => {

    return {
        handleReset: () => {
            dispatch( reset() )
        }
    }
}


const ScorePage =({cards,score,handleReset,playername}) => {

    return (
        <>
        <section className="score-page">
            <div class="final-score-cont">
                <h1> Well Done <strong>{playername}</strong> </h1>
                <h2> Your Score Is:</h2>
                <div  className="score-sp">{score}</div>
            </div>
            <br/>
            <Link to="/">
            <button class= "but-new-game" onClick={handleReset}>New Game</button>
            </Link>
        </section>
        </>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(ScorePage);
