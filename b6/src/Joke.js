import React from "react";
function Joke({setup,punchline}){
    return (
        <div className="list-items">
            <p><strong>Setup: </strong>{setup}</p>
            <p><strong>Punchline: </strong>{punchline}</p>
        </div>
    );
};
export default Joke;