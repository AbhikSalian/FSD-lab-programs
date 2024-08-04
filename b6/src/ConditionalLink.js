import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function ConditionalLink() {
    const location = useLocation();
    
    // Only render the button if the current path is not "/main"
    
  
    return location;
  }
  export default ConditionalLink;