import React, { Component } from "react";

// we use className to add classes for Bootstrap styling

 class PairCard  extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            // counter: this.props.item.counter,
        };
    }

    // handleClick() {
    //     let current = this.state.counter;
    //     this.setState({ counter: !current });
    //    }

       

    render() {
        const styles= {
            margin: '20px',
            width: '200px',
            height: '200px',
            backgroundImage: (this.props.item.counter === false ? "url(" + "https://i.ya-webdesign.com/images/pear-clipart-yellow-pear-23.png" + ")": `url("${this.props.item.url}")`),
            backgroundSize: 'contain',
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: 'center',
            display: 'inline-block',
            opacity: (this.props.item.paired === true ? '0': '1'),
            border: 'grey solid 3px',
            padding: '5px',
            
          }

    return (
        <>
            <p onClick={() => this.props.onCard(this.props.index)} style={styles}>
                {this.props.item.counter === false ? 'Clicked!!!!' : 'Not Clicked!!!!'}{this.props.item.name}
            </p>

        </>
    );
    }
    }
export default PairCard;
