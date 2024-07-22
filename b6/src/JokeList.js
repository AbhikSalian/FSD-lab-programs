import React from "react";
import Joke from "./Joke";
const JokeList = ({ jokes }) => {
    return (
        <div>
            <h2>
                Jokes List
            </h2>
            <div>
                {jokes.map(joke => (
                    <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
                ))}
            </div>
        </div>
        );
};
export default JokeList;