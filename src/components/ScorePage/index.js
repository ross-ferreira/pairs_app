import React, { useState, Component, useEffect } from "react";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import {reset} from '../../data/actions'

const mapStateToProps = ({cards,score}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        cards:cards,
        score:score,
    }

}
const mapDispatchToProps = (dispatch) => {

    return {
        handleReset: () => {
            dispatch( reset() )
        }
    }
}


const ScorePage =({cards,score,handleReset}) => {

    return (
        <>
        <div class="final-score-cont">
            <h1> Well Done</h1>
            <h2> Your Score Is:</h2>
            <div class="score">{score}</div>
        </div>
        <br/>
        <Link to="/">
        <button onClick={handleReset}>NEW GAME</button>
        </Link>
        </>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(ScorePage);
