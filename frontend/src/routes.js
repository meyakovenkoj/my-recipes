import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App'
import About from './components/About'
import NotFound from './components/NotFound'
import PrimarySearchAppBar from './components/Header'

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <PrimarySearchAppBar />
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
