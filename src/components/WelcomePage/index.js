import React, { useState, Component, useEffect } from "react";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { updateDifficulty } from '../../data/actions';

import { updatePlayerName } from '../../data/actions';

const mapStateToProps = ({ cards, score, selectedOption, playername }) => {

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

const WelcomePage = ({
    selectedOption,
    handleOptionChange,
    playername,
    handleFormSubmit,
}) => {

    const [clicker, setClicker] = useState(0);

    const updateClicker = () => setClicker(clicker + 1);

    const [inputValueP, setInputValueP] = useState(playername);

    const handlePlayerName = (e) => {
        setInputValueP(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(inputValueP);
    }


    return (
        <>
            <div class="welcome-cont-wrap">
                <section class="welcome-cont">
                    <picture class="rules-img">
                        <img src="https://cdn.dribbble.com/users/3473/screenshots/523945/pear.jpg" />
                    </picture>
                    {clicker % 2 == 0 ?
                        <div className="rules-cont">
                            <p class="rules-header">How to play:</p>
                            <ol>
                                <li>1: Enter playername</li>
                                <li>2: Select diffuclty of game</li>
                                <li>3: Lift playing cards by clicking them</li>
                                <li>4: Try to remember their locations</li>
                                <li>5: Try lift all the pairs of cards before the time ends</li>
                                <li>6: Have Fun</li>
                            </ol>
                            <button class="btn btn-outline-dark" onClick={updateClicker}>Got It</button>
                        </div>
                        : <form class="welcome-form" onSubmit={handleSubmit}>
                            <div className="form-inputs-cont">
                                <div className="form-check">
                                    <p className="playername-label">Player Name</p>
                                        <input
                                            type="text"
                                            placeholder="Enter Player Name"
                                            name="playername"
                                            value={inputValueP}
                                            onChange={handlePlayerName}
                                            className="input-box"
                                        />
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
                            </div>
                            <div className="form-button">
                                <button className="btn btn-outline-dark" type="submit" >Start Game</button>

                                {playername.length > 2 ? <Redirect to="/game" /> : null}
                            </div>
                        </form>
                    }


                </section>
            </div>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
