import React, { useState, Component, useEffect } from "react";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import {updateDifficulty} from '../../data/actions';

import {updatePlayerName} from '../../data/actions';

const mapStateToProps = ({ cards, score, selectedOption,playername }) => {

    return {
        // srcImage: state.images[(state.counter -1)].url,
        cards: cards,
        score: score,
        selectedOption: selectedOption,
        playername: playername,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        handleOptionChange: (selectedDiff) => {
            dispatch(updateDifficulty(selectedDiff))
        },
        handleFormSubmit: (valuePlayerName) => {
            dispatch(updatePlayerName(valuePlayerName))
        }
    }
}

const ScorePage = ({ 
    selectedOption,
    handleOptionChange,
    playername,
    handleFormSubmit,
}) => {

    const [inputValueP, setInputValueP] = useState(playername);

    const handlePlayerName = (e) => {
        setInputValueP(e.currentTarget.value); 
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        handleFormSubmit(inputValueP);
    }

    return (
        <>
            <div class="final-score-cont">
            </div>
            <form onSubmit={handleSubmit}>
            <div className="form-check">
                    <label>
                        <input
                            type="text"
                            placeholder="Enter Player Name"
                            name="playername"
                            value={inputValueP}
                            onChange={handlePlayerName}
                            className="form-check-input"
                        />Player Name
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            name="react-tips"
                            value="easy"
                            checked={selectedOption === "easy"}
                            onChange={(event) => handleOptionChange(event.target.value)}
                            className="form-check-input"
                        />Easy
                    </label>
                </div>

                <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            name="react-tips"
                            value="modest"
                            checked={selectedOption === "modest"}
                            onChange={(event) => handleOptionChange(event.target.value)}
                            className="form-check-input"
                        />Modest
                    </label>
                </div>

                <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            name="react-tips"
                            value="hard"
                            checked={selectedOption === "hard"}
                            onChange={(event) => handleOptionChange(event.target.value)}
                            className="form-check-input"
                        /> Come and Get it!
                    </label>
                </div>
                <div className="form-group">
                        <button className="btn btn-primary mt-2" type="submit" >Start Game</button>

                    {playername.length > 2 ? <Redirect to="/game"/> : null}
                </div>
            </form>
        </>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(ScorePage);
