import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Container } from '../Structure'
import { H1 } from '../../../basecomps/Titles'

export const Header = (props) => {
	const { title } = props
	return (
		<Wrapper bgcolor="primary">
		<Container bgcolor="transparent">
		<header className="App-header">
			<H1>{title} - new</H1>
		</header>
		</Container>
		</Wrapper>
	)
}

Header.propTypes = {
	title: PropTypes.string
}

Header.defaultProps = {
	title: 'Appsystem'
}