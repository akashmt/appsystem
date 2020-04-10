import React, { Component } from 'react'
import { Wrapper, Container } from '../Structure'
import { MainRoutes } from '../routes'

export class Main extends Component {
	render() {
		return (
			<Wrapper section="">
			<Container section="">
			<main className="App-main">
				<MainRoutes/>
				{this.props.children}
			</main>
			</Container>
			</Wrapper>
		)
	}
}