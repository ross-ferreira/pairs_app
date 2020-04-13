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
    // const {children} =this.props;


    return (
        <>
            <p onClick={() => this.props.onCard(this.props.index)}>
                {this.props.item.counter === false ? 'Clicked!!!!' : 'Not Clicked!!!!'}{this.props.item.name}
            </p>

        </>
    );
    }
    }
export default PairCard;


            {/* <p onClick={ this.handleClick }>this.state.counter{children}</p>
            <p >Clicked!!!!!</p> */}
            {/* {this.state.cards.map((item,index)=>(
                <p key={index} onClick={ this.handleClick }>
                    {this.state.counter === false ? 'Clicked!!!!' : 'Not Clicked!!!!'}
                </p>
            ))
            } */}
                {/* <p onClick={ this.handleClick }>
                    {this.state.cards[0].count == false ? 'Clicked!!!!' : 'Not Clicked!!!!'}
                </p> */}