import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Route exact path= '/' component= {LandingPage} />
      <Route exact path= '/home' component= {Home} />
      
      <h1>Henry Countries</h1>
      
      <h1>hola estoy renderizando</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
