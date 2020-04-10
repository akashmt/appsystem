import React from 'react'
import { Wrapper } from '../../layouts'
import { HeaderContainer } from './HeaderContainer'
import HeaderBrand from './HeaderBrand'
import HeaderContact from './HeaderContact'

export default function Header() {
	return (
		<Wrapper primary>
		<HeaderContainer>
			<HeaderBrand/>
			<HeaderContact/>
		</HeaderContainer>
		</Wrapper>
	)
}