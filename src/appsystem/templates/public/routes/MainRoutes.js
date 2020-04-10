import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, About, Contact } from '../pages'
import { Documentation } from '../pages/documentation'

export function MainRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/documentation" component={Documentation}/>
			<Route exact path="/contact" component={Contact}/>
			{/* <Route path="/:user" component={User}/> */}
			{/* <Route component={NoMatch}/> */}
		</Switch>
	)
}