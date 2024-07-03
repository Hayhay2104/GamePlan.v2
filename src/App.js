import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import Explore from './pages/Explore';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-event" component={CreateEvent} />
          <Route path="/explore" component={Explore} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
