import React, { useState, Component, useEffect } from "react";

import { connect } from 'react-redux';

const mapStateToProps = ({cards}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        cards:cards,
    }
}


const PairCard =({index,item, onCard}) => {

    const styles= {
            margin: '20px',
            width: '200px',
            height: '200px',
            backgroundImage: (item.counter === false ? "url(" + "https://i.ya-webdesign.com/images/pear-clipart-yellow-pear-23.png" + ")": `url("${item.url}")`),
            backgroundSize: 'contain',
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: 'center',
            display: 'inline-block',
            opacity: (item.paired === true ? '0': '1'),
            border: 'grey solid 3px',
            padding: '5px',
            
          }

    return (
        <>
            <p onClick={() => onCard(index)} style={styles}>
                {item.counter === false ? 'Clicked!!!!' : 'Not Clicked!!!!'}{item.name}
            </p>

        </>
    );
    }
    
    export default connect(mapStateToProps)(PairCard);