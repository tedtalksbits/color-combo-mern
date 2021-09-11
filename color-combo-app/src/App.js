import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Navbar from './components/Navbar';
import Colors from './pages/Colors';
import { darkTheme, lightTheme } from './Data';
import { useState } from 'react';
import StylizedNew from './pages/StylizedNew';
import SingleColor from './pages/SingleColor';



function App() {

  const dark = darkTheme;
  const light = lightTheme;
  const [theme, setTheme] = useState(dark);

  const handleTheme = () => {

    theme === dark ?
      setTheme(light)
      :
      setTheme(dark);

  }

  const body = document.querySelector("body");
  body.style.backgroundColor = theme.background;
  return (
    <Router>
      <div className="app">
        <Navbar {...theme} handleTheme={handleTheme} className="full-bleed" />
        <Switch>
          <Route path="/" exact >
            <Home {...theme} />
          </Route>
          <Route path="/new">
            <New {...theme} />
          </Route>
          <Route path="/colors" exact>
            <Colors {...theme} />
          </Route>
          <Route path="/stylized">
            <StylizedNew {...theme} />
          </Route>
          <Route path="/colors/color/:id" component={SingleColor}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
