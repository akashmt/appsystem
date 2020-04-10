import styled from 'styled-components'
import { CONTAINER_MARGIN, CONTAINER_PADDING, CONTAINER_WIDTH } from '../../theme/Structure'

export const AsideContainer = styled.aside`
	margin: ${CONTAINER_MARGIN};
	padding: ${CONTAINER_PADDING};
	width: ${CONTAINER_WIDTH};
	/* background-color: ${props => props.theme.basecolors.secondary}; */
	background-color: transparent;
`