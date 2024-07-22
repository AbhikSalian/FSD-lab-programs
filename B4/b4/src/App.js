// import logo from './logo.svg';
import './App.css';
import ListComponent from './ListComponent';

function App() {
  const items=['dog','cat','chicken','cow','sheep','horse']

  return (
    <ListComponent items={items}/>
  );
}

export default App;
