import React from 'react';
import JokeList from './JokeList';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const MainComponent = () => {
    let jokes = [
        { id: 1, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
        { id: 2, setup: "what do you get when you cross a snowman and a vampire?", punchline: "Frostbite!" }
    ];
    return (
        <div>
            <h1>Welcome to the Joke center</h1>
            <JokeList jokes={jokes} />
           
        <ConditionalLink />
        <Routes>
          <Route path="/main" element={<MainComponent />} />
        </Routes>
      </div>
  
        
    )
}
export default MainComponent;

  function ConditionalLink() {
    const location = useLocation();
    
    // Only render the button if the current path is not "/main"
    if (location.pathname !== "/") {
      return <Link to="/"><button>Home</button></Link>;
    }
  
    return null;
}
