import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch,
Route } from 'react-router-dom';
import DefaultTemplate from './components/Pages/DefaultTemplate';
import HomeNew from './components/Pages/HomeNew';
import HowToUse from './components/Faq/HowToUse';
import Templates from './components/Pages/Templates';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Pages/Footer';
import simple_1 from './components/Templates/simple_1';
import simple_2 from './components/Templates/simple_2';
import simple_3 from './components/Templates/simple_3';

import badges_1 from './components/Templates/badges_1';
import badges_2 from './components/Templates/badges_2';
import badges_3 from './components/Templates/badges_3';

import icons_1 from './components/Templates/icons_1';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/GPRC" exact component={HomeNew} />
        <Route path="/GPRC/HowToUse" exact component={HowToUse} />
        
        <Route path="/GPRC/DefaultTemplate" exact component={DefaultTemplate}/>
        <Route path="/GPRC/Templates" exact component={Templates} />
        <Route path="/GPRC/simple_1" exact component={simple_1} />
        <Route path="/GPRC/simple_2" exact component={simple_2} />
        <Route path="/GPRC/simple_3" exact component={simple_3} />

        <Route path="/GPRC/badges_1" exact component={badges_1} />
        <Route path="/GPRC/badges_2" exact component={badges_2} />
        <Route path="/GPRC/badges_3" exact component={badges_3} />

        <Route path="/GPRC/icons_1" exact component={icons_1} />

        
      </Switch> 

      <Footer/>
    </Router>
  );
}

export default App;
