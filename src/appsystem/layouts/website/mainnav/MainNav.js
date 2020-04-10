import React from 'react'
import { Wrapper, Container } from '../'
import MainNavigation from '../navigation/MainNavigation'

export function MainNav() {
	return (
		<Wrapper section="">
		<Container section="">
		<nav className="App-mainnav">
			<MainNavigation />
		</nav>
		</Container>
		</Wrapper>
	)
}