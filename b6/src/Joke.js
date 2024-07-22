import React from "react";
const Joke=({setup,punchline})=>{
    return (
        <div className="list-items">
            <p><strong>Setup: </strong>{setup}</p>
            <p><strong>Punchline: </strong>{punchline}</p>
        </div>
    );
};
export default Joke;