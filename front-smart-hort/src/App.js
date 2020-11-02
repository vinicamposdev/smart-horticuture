import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Feiras from './Views/Feiras'
import Product from './Views/Product'
import Home from './Views/Home';

function App () {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/feiras'>
              <Feiras />
            </Route>
            <Route path='/products'>
              <Product />
            </Route>
          </Switch>

      </Router>
    </div>
  )
}

export default App
