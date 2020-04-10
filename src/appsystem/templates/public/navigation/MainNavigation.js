import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { flexRowCenter } from '../../../utilities'

export function MainNavigation() {
	return (
		<StyledUL>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/documentation">Documentation</Link></li>
			<li><Link to="/contact">Contact</Link></li>
		</StyledUL>
	)
}

const StyledUL = styled.ul`
	${flexRowCenter}
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	list-style: none;
	li {
		margin: 0rem .5rem 0rem 0rem;
		&:last-of-type { margin: 0rem 0rem 0rem 0rem; }
		padding: .2rem .5rem .2rem .5rem;
		a {
			&:hover { }
		}
	}
`