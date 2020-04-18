import React, { useState, Component, useEffect } from "react";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const mapStateToProps = ({ cards, score }) => {

    return {
        // srcImage: state.images[(state.counter -1)].url,
        cards: cards,
        score: score,
    }
}



const ScorePage = ({ cards, score }) => {

    return (
        <>
            <div class="final-score-cont">
            </div>

            <form>

                <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            name="react-tips"
                            value="option1"
                            checked={true}
                            className="form-check-input"
                        />
            Easy
          </label>
                </div>

                <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            name="react-tips"
                            value="option2"
                            className="form-check-input"
                        />
            Modest
          </label>
                </div>

                <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            name="react-tips"
                            value="option3"
                            className="form-check-input"
                        />
            Come and Get it!
          </label>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mt-2" type="submit">
                        Save
          </button>
                </div>

            </form>
            <br />
            <Link to="/game">
                <button>Start Game</button>
            </Link>
        </>
    );
}

export default connect(mapStateToProps)(ScorePage);
