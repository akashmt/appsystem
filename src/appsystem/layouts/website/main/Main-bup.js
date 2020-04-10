import React from 'react'
import { Wrapper, Container } from '../Structure'
import { Switch, Route } from 'react-router-dom'

import Home from '../../../../pages/Home'
import About from '../../../../pages/About'
import Contact from '../../../../pages/Contact'
import Typography from '../../../../pages/typography/Typography'
import Headings from '../../../../pages/typography/Headings'

export function Main() {
	return (
		<Wrapper section="">
		<Container section="">
		<main className="App-main">
			<Switch>
				<Route path="/" exact={true} strict={true} component={Home} />
				<Route path="/about" exact={true} strict={true} component={About} />
				<Route path="/contact" exact={true} strict={true} component={Contact} />
				<Route path="/typography" exact={true} strict={true} component={Typography} />
				<Route path="/typography/headings" exact={true} strict={true} component={Headings} />
			</Switch>
		</main>
		</Container>
		</Wrapper>
	)
}