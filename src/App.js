import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import About from './components/About/About';
import Login from './components/Login/Login';



function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
