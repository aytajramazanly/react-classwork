import './App.css';
import Login from './Components/Auth/Login/Login';
import Products from './Pages/Products/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateProduct from './Components/Product/CreateProduct';
import SingleProduct from './Components/Product/SingleProduct';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/createProduct" exact component={CreateProduct}/>
        <Route path="/singleProduct/:id"  component={SingleProduct}/>
        <Redirect to={"/"}/>
      </Switch>
    </Router>
  );
}

export default App;
