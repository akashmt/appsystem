import React, { Component } from 'react'
import { Wrapper } from '../../layouts/Wrapper'
import { FooterNavContainer } from './FooterNavContainer'
import { FooterNavigation } from '../../navigation'

export default class FooterNav extends Component {
	render() {
		return (
			<Wrapper primary>
			<FooterNavContainer bottomborder>
				<FooterNavigation/>
			</FooterNavContainer>
			</Wrapper>
		)
	}
}