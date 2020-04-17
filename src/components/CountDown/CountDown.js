import React, { Component } from "react";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = { timer:null, seconds: 10 };
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  
  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(previousProps){
    if(this.props.counter!== previousProps.counter){
      this.resetTimer();
    }
  }
  
  startTimer() {
    clearInterval(this.state.timer);
    this.setState({timer:setInterval(this.countDown, 1000)});
    
  }
  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds,
    });
    if (seconds == 0) { 
    }
  }
  timeExpired(){

    return this.state.seconds === 0? this.resetTimer(): null;
    // return this.state.seconds === 0? this.props.timerExpired(this.resetTimer()): null;
  }

  resetTimer(){

    this.setState({ seconds: 10 });
    this.startTimer();
  }

  render() {
    let timer= this.state.seconds;
    let warning = (timer <= 5 ? { color: 'red' } : { color: 'rgb(246, 170, 25)' });
    this.timeExpired();
    // console.log(this.props);

    return(
      <div>
        <h2 className="countdown" style={warning}>{timer}</h2>
      </div>
    );
  }
}

export default CountDown







// // Create a class based component with this.state
// // Add a progress or timeRemaining value to this.state
// // Update the JSX to use that value 
// // In componentDidMount  create a setInterval that updates the appropriate value with setState
// // Technically speaking you should cancel the timer on componentWillUnmount
// // You shouldn't need any document. anything.
// // I'd do it with a class rather than Hooks, because it's a bit simpler.

