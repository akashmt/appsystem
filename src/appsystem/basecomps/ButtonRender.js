import React from 'react'
import styled, { css } from 'styled-components'

export const ButtonRender = styled.button`
	margin: 0rem 0rem .5rem 0rem;
	padding: .2rem .4rem .2rem .4rem;
	cursor: pointer;
	outline: none;
	color: ${props => props.theme.primaryColor};
	font-size: 1rem;
	border-width: 5px;
	border-color: ${props => props.theme.primaryColor};
	border-style: solid;
	background-color: ${props => props.theme.bgColor};

	${props => props.primary && css`
		background-color: blue;
	`}
`

/* export const ButtonRender = ({ children }) => {
	return (
		<button>
			{children}
		</button>
	)
} */