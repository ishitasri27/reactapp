import React, {useState} from "react";

const Counter = () => {
const [counter, setcounter] = useState(0);
const handleincrement = () => {
    setcounter(counter+1);
};
const handledecrement = () => {
    setcounter(counter-1);
};
return (
    <>
    <h1 style={{color: "grey"}}>
        Current counter: <span style={{color: "blue"}}>{counter}</span>
        </h1>
        <div className="row">
            <div className="col">
                <button
                style={{backgroundColor: "pink", color:"Black"}}
                className= "btn-primary"
                onClick={()=>handleincrement()}>
                    Increase Counter
                </button>
            </div>
        </div>

            <div className="col">
                <button
                style={{backgroundColor: "green", color:"white"}}
                className= "btn-primary"
                onClick={()=>handledecrement()}>
                    Decrease Counter
                </button>
            </div>
        
        </>
)
};
export default Counter;