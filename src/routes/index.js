import React from 'react'
import { Router, Switch, Route } from 'react-router'
import history from '../assets/utils/history'

import Home from '../pages/Home'
import List from '../pages/CarsList'
import Details from '../pages/Details'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
            <Route path='/details' component={Details}/>
        </Switch>
    </Router>
)

export default Routes