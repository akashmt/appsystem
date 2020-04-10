import React from 'react'
import { Wrapper } from '../../layouts'
import { MainNavContainer } from './MainNavContainer'
import { MainNavigation } from '../../navigation'

export default function MainNav() {
	return (
		<Wrapper secondary>
		<MainNavContainer>
			<MainNavigation/>
		</MainNavContainer>
		</Wrapper>
	)
}