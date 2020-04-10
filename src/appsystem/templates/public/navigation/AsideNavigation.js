import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function AsideNavigation() {
	return (
		<StyledUL>
			<li><a href="/">Typography</a></li>
			<ul>
				<li><a href="/">Headings</a></li>
			</ul>
		</StyledUL>
	)
}

const StyledUL = styled.ul`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	/* list-style: none; */
	li {
		margin: 0rem .5rem 0rem 0rem;
		&:last-of-type { margin: 0rem 0rem 0rem 0rem; }
		padding: .2rem .5rem .2rem .5rem;
		a {
			&:hover { }
		}
	}
`