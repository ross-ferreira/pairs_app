import React, { Component } from "react";
import PairCard from './PairCard'


class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 1,
                    name: "apple",
                    paired: false,
                    url: "https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/3d/d0/96/3dd096d8-3651-4fa9-afbd-f3bb62ba3981/source/256x256bb.jpg",
                    counter: false,
                }, {
                    id: 2,
                    name: "apple",
                    paired: false,
                    url: "https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/3d/d0/96/3dd096d8-3651-4fa9-afbd-f3bb62ba3981/source/256x256bb.jpg",
                    counter: false,
                },
                {
                    id: 3,
                    name: "pear",
                    paired: false,
                    url: "https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/3d/d0/96/3dd096d8-3651-4fa9-afbd-f3bb62ba3981/source/256x256bb.jpg",
                    counter: false,
                }, 
                {
                    id: 4,
                    name: "pear",
                    paired: false,
                    url: "https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/3d/d0/96/3dd096d8-3651-4fa9-afbd-f3bb62ba3981/source/256x256bb.jpg",
                    counter: false,
                }
            ],
        };
        this.cardStatus = this.cardStatus.bind(this);
    }


    cardStatus = (index) => {
        let newCards = [...this.state.cards];
        newCards[index].counter = !this.state.cards[index].counter;
        this.setState({ newCards });
        this.findPair();
        
    }

    findPair = () => {
        let newArr = [];
        this.state.cards.filter((item, index) => {
            if (item.counter == true && item.paired == false) {
                return newArr.push(item);
            }
        });
    if (newArr.length >= 2){ 
        this.state.cards.map((item, index) => {
            if (item.counter == true && (newArr[0].name == newArr[1].name)) {
                return item.paired = true;
            } else
                return item;
        })
    };
    console.log(newArr);
    }




render() {
    // const {children} =this.props;
    // console.log(this.state.cards)
    return (
        <>
        <pre>
            {JSON.stringify(this.state.cards, null, 2)}
        </pre>
        
            {this.state.cards.map((item, index) => (
                <PairCard key={item.id} onCard={this.cardStatus} item={item} index={index} />
            ))}


        </>
    );
}
    }
export default Cards;


//        var newData = [...this.state.data];
//    newData[id].title = title;
//    this.setState({newData});

// if counter[index]== true && name== name 

// reduce 