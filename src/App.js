
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Erreur from './pages/Erreur'
import UserDetail from './pages/UserDetail';
function App() {
  return (
    <div className="App">
     <NavBar />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/user/:userID" 
       render={(props)=> <UserDetail {...props} /> } />
       
       <Route path="/About"  component={About}/>
       <Route path="/Erreur"  component={Erreur} />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
