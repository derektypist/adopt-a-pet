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

      <Switch>
        <Route path="/search">
          <SearchPage/>
          </Route>

        <Route path="/:type/:id">
          <PetDetailsPage/>
          </Route>
      
        <Route path="/pet-details-not-found">
          <PetDetailsNotFound/>
          </Route>

      <Route path="/:type?">
        <HomePage />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
