import styled from 'styled-components'

export const Input = styled.input`

	/*** Type */
	${({ type }) => {
		if (type === 'text') {
			return `background-color: tomato;`
		} else if (type === 'radio') {
			return `padding: 10px;`
		} else {
			return ``
		}
	}}
	
`