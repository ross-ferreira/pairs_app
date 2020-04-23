import React, {useState, useEffect} from 'react';

function App() {
    const [count, setCount] = useState(60);
    const [isActive, setIsActive] = useState(false);
    const [isClosed, setIsClosed] = useState(true); //modal box: true when count hits 0
    const seconds = count % 60;
    const secondString = seconds.toString().padStart(2, '0');
    const minutes = Math.floor(count / 60);
    let interval = null;

    console.log("tracking", count)



    useEffect(() =>{
        if (isActive) {
            interval = setInterval(() => {
                setCount(prevCount => prevCount - 1)
            }, 1000);
            checkZero();
        }
        return () => clearInterval(interval)
    }, [isActive, count])


    function start() {
        setIsActive(true)
    }

    function pause() {
        setIsActive(!isActive)
    }

    function reset() {
        setCount(1200);
        setIsActive(false);
    }

    function addTime() {
        if (!isActive) {
            setCount(prevCount => prevCount + 60)
        }
    }

    function decreaseTime() {
        if (!isActive) {
            setCount(prevCount => prevCount - 60)
        }
    }

    function close() {
        setIsClosed(!isClosed)
    }

    let checkZero= () =>{
        if (count === 0) {
            pause();
            close();
        }
    }


    return (
        <div>
            <h1>{minutes} : {secondString}</h1>
            <button onClick={start}>start</button>
            <button onClick={pause}>pause</button>
            <button onClick={reset}>reset</button>
            <button onClick={addTime}>+</button>
            <button onClick={decreaseTime}>-</button>
            <div style={{display : isClosed ? 'none' : 'block'}} id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={close}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        </div>
    );
}

export default App;