import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import HomeScreen from './screen/HomeScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={HomeScreen}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
