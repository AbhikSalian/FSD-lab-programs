import React from 'react';
import JokeList from './JokeList';

const MainComponent=()=> {
    
        let jokes = [
           
                {id:1,setup:"Why did the scarecrow win an award?",punchline:"Because he was outstanding in his field!"},
                {id:2,setup:"what do you get when you cross a snowman and a vampire?",punchline:"Frostbite!"}
            
        ];
    
    
        return(
            <div>
                <h1>Welcome to the Joke center</h1>
                <JokeList jokes={jokes}/>
            </div>
        )
    
}
export default MainComponent;