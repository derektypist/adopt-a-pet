import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/:type">
        <Navigation />
      </Route>

      <Route path="/:type?">
        <HomePage />
      </Route>
    </Router>
  );
}

export default App;
