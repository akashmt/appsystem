import React from 'react'
import styled from 'styled-components'

export default function HeaderBrand() {
	return (
		<StyledHeaderBrand>
			<h1>Header</h1>
		</StyledHeaderBrand>
	)
}

const StyledHeaderBrand = styled.div`
	h1 {
		margin: 0rem;
	}
`