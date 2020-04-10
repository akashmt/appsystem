import styled from 'styled-components'

// ${evelvation[1]}

export const Button = styled.button`

	display: inline-block;
	-webkit-appearance: button;
	margin: 0rem 0rem 1rem 0rem;
	cursor: pointer;
	color: white;
	font-weight: 700;
	text-transform: none;
	border-radius: .25rem;
	border: 0 solid #e2e8f0;
	background: transparent;
	background-color: #4299e1;
	line-height: inherit;
	overflow: visible;
	text-indent: 0px;
	text-shadow: none;
	text-rendering: auto;
	letter-spacing: normal;
	word-spacing: normal;
	&:hover {
		color: #fff;
		background-color: #2b6cb0;
	}

	/*** Size */
	${({ size }) => {
		if (size === 'small') {
			return `padding: .2rem .5rem .2rem .5rem; font-size: .8rem;`
		} else if (size === 'mini') {
			return `padding: .2rem .3rem .1rem .3rem; font-size: .6rem;`
		} else if (size === 'large') {
			return `padding: .6rem 1.2rem .6rem 1.2rem; font-size: 1rem;`
		} else /* (size === 'medium') */ {
			return `padding: .4rem 1rem .4rem 1rem; font-size: 1rem;`
		}
	}}

	/*** Type */
	${({ type }) => {
		if (type === 'cancel') {
			return `background-color: tomato;`
		} else if (type === 'pill') {
			return `border-radius: 9999px;`
		} else if (type === 'outline') {
			return `
				color: #4299e1
				font-weight: 600;
				border-width: 1px;
				border-color: #4299e1;
				background-color: transparent;
				&:hover {
					color: #fff;
					border-color: transparent;
					background-color: #4299e1;
				}
			`
		} else if (type === 'bordered') {
			return ``
		} else if (type === 'disabled') {
			return ``
		} else if (type === '3d') {
			return ``
		} else if (type === 'elevated') {
			return ``
		} else if (type === 'groups') {
			return ``
		} else if (type === 'icons') {
			return ``
		} else {
			return ``
		}
	}}

`

export const PillButton = styled(Button)`
	
`