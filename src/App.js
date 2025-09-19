import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Ingredients from './components/Ingredients';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ingredients/:dishId" component={Ingredients} />
    </Switch>
  </BrowserRouter>
)

export default App;
