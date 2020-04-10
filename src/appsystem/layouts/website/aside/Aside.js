import React from 'react'
import { Wrapper, Container } from '../Structure'
import { Switch, Route } from 'react-router-dom'

import RootNavigation from '../navigation/RootNavigation'
import TypographyNavigation from '../navigation/TypographyNavigation'

export function Aside() {
	return (
		<Wrapper section="">
		<Container section="">
		<aside className="App-aside">
			<h2>Aside</h2>
			<nav>
				<Switch>
					<Route path="/" exact={true} strict={true} component={RootNavigation} />
					<Route path="/about" exact={true} strict={true} component={RootNavigation} />
					<Route path="/contact" exact={true} strict={true} component={RootNavigation} />
					<Route path="/typography" exact={true} strict={true} component={TypographyNavigation} />
				</Switch>
			</nav>
		</aside>
		</Container>
		</Wrapper>
	)
}