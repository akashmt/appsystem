import styled from 'styled-components'
import { CONTAINER_MARGIN, CONTAINER_PADDING, CONTAINER_WIDTH } from '../../theme/Structure'
import { flexRowSpaceBetween } from '../../../../utilities'

export const HeaderContainer = styled.header`
	${flexRowSpaceBetween}
	margin: ${CONTAINER_MARGIN};
	padding: ${CONTAINER_PADDING};
	width: ${CONTAINER_WIDTH};
	background-color: ${props => props.theme.basecolors.primary};
	color: white;
`