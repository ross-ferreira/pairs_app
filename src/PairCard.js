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
            backgroundImage: (this.props.item.counter === false ? "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")": `url("${this.props.item.url}")`),
            display: 'inline-block',
            // background: (this.props.item.paired === true ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 1)'),
            opacity: (this.props.item.paired === true ? '0': '1'),
            
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