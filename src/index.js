import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import lis from './list'
import algos from './components'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      {lis.map((e, i) => (
        <Route key={e.path} path={`/${e.path}`} component={algos[i]} />
      ))}
    </Switch>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
