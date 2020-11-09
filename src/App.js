import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Instructions from './components/Instructions'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={Home}/>
        <Route path='/instructions' exact component={Instructions}/>
      </Router>
    </div>
  );
}

export default App;
