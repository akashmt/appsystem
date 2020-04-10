import React, { Component } from 'react'
import { Wrapper } from '../../layouts/Wrapper'
import { AsideContainer } from './AsideContainer'
import { AsideNavigation, DocsNavigation } from '../../navigation'

export default class Aside extends Component {
	render() {
		return (
			<Wrapper secondary>
			<AsideContainer>
				<DocsNavigation/>
			</AsideContainer>
			</Wrapper>
		)
	}
}