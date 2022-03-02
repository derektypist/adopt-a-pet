import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/:type">

      </Route>

      <Route path="/:type?">
        <HomePage />
      </Route>
    </Router>
  );
}

export default App;
