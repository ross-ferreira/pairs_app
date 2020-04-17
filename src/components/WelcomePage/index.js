import React, { useState, Component, useEffect } from "react";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const mapStateToProps = ({cards,score}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        cards:cards,
        score:score,
    }
}



const ScorePage =({cards,score}) => {

    return (
        <>
        <div class="final-score-cont">
        </div>
        <br/>
        <Link to="/game">
            <button>Start Game</button>
        </Link>
        </>
    );
}

export default connect(mapStateToProps)(ScorePage);
