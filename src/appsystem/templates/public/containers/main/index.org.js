import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Wrapper } from '../../layouts/Wrapper'
import { MainContainer, Main2Column } from './MainContainer'
import { MainRoutes, DocsRoutes } from '../../routes'

export default class Main extends Component {
	render() {
		return (
			<Wrapper tertiary>
			<MainContainer>
				<MainRoutes/>
				<DocsRoutes/>
				<div>{this.props.children}</div>
			</MainContainer>
			</Wrapper>
		)
	}
}