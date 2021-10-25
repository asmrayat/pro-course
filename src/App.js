import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homedata from './components/Home/Homedata';
import AboutUS from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Homedata></Homedata>
          </Route>
          <Route path="/about">
            <AboutUS></AboutUS>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/">
            <Homedata></Homedata>
          </Route>
          <Route path="*">
            <ErrorNotFound></ErrorNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
