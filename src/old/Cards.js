import React, { Component } from "react";
import PairCard from './PairCard';


class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score:0,
            cards: [
                {
                    id: 1,
                    name: "birds",
                    paired: false,
                    url: "https://www.publicdomainpictures.net/pictures/300000/velka/feathers-birds-vintage-art.jpg",
                    counter: false,
                }, {
                    id: 2,
                    name: "birds",
                    paired: false,
                    url: "https://www.publicdomainpictures.net/pictures/300000/velka/feathers-birds-vintage-art.jpg",
                    counter: false,
                },
                {
                    id: 3,
                    name: "clown",
                    paired: false,
                    url: "https://www.publicdomainpictures.net/pictures/320000/velka/circus-clown-clip-art.jpg",
                    counter: false,
                }, 
                {
                    id: 4,
                    name: "clown",
                    paired: false,
                    url: "https://www.publicdomainpictures.net/pictures/320000/velka/circus-clown-clip-art.jpg",
                    counter: false,
                },
                {
                    id: 5,
                    name: "beatle",
                    paired: false,
                    url: "https://www.publicdomainpictures.net/pictures/60000/velka/vintage-car-clipart.jpg",
                    counter: false,
                }, {
                    id: 6,
                    name: "beatle",
                    paired: false,
                    url: "https://www.publicdomainpictures.net/pictures/60000/velka/vintage-car-clipart.jpg",
                    counter: false,
                },
                {
                    id: 7,
                    name: "peru",
                    paired: false,
                    url: "https://www.publicdomainpictures.net/pictures/310000/velka/peru-travel-poster.jpg",
                    counter: false,
                }, 
                {
                    id: 8,
                    name: "peru",
                    paired: false,
                    url: "https://www.publicdomainpictures.net/pictures/310000/velka/peru-travel-poster.jpg",
                    counter: false,
                }
            ],
        };
        this.cardStatus = this.cardStatus.bind(this);
        this.updateScore = this.updateScore.bind(this);
    }
    componentDidMount(){
        this.shuffleCards();
    }


    shuffleCards= () => {
        let shuffleCards = [...this.state.cards.sort(() => Math.random() - 0.5)];
        this.setState({ cards: shuffleCards });
    };


    cardStatus = (index) => {
        let newCards = [...this.state.cards];
        newCards[index].counter = !this.state.cards[index].counter;
        this.setState({ cards: newCards });
        this.findPair();
        this.updateScore();
        
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

    updateScore= () => {
        let arr2=[];
        this.state.cards.filter((item,index)=>{
          if (item.paired == true){
                   return arr2.push(item.paired);
                  }
        });
        
        let tot= (arr2.length / 2)
        this.setState({ score: tot});
    }
    

render() {
    // const {children} =this.props;
    // console.log(this.state.cards)
    return (
        <>
        {/* <pre>
            {JSON.stringify(this.state.cards, null, 2)}
        </pre> */}
        <div class="score">
            SCORE: {this.state.score}
        </div>
        <div class="card-deck">
                {this.state.cards.map((item, index) => (
                    <PairCard key={item.id} onCard={this.cardStatus} item={item} index={index} />
                ))}
        </div>


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