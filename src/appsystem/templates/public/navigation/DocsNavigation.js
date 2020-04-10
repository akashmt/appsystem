import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function DocsNavigation() {
	return (
		<StyledUL>
			<li><Link to="/documentation">Documentation</Link></li>
			<li><Link to="/documentation/globalstyles">Global Styles</Link></li>
			<ul>
				<li><Link to="/documentation/globalstyles/htmlbody">Html, Body</Link></li>
				<li><Link to="/documentation/globalstyles/typography">Typography</Link></li>
			</ul>
			<li><Link to="/documentation/dataentry">Data Entry</Link></li>
			<ul>
				<li><Link to="/documentation/dataentry/inputs">Inputs</Link></li>
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