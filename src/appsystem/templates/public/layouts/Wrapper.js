import styled, { css } from 'styled-components'
import { WRAPPER_MARGIN, WRAPPER_PADDING, WRAPPER_WIDTH } from '../theme/Structure'

export const Wrapper = styled.section`
	margin: ${WRAPPER_MARGIN};
	padding: ${WRAPPER_PADDING};
	width: ${WRAPPER_WIDTH};

	${props => props.primary && css`
		background-color: ${props => props.theme.basecolors.primary};
	`}
	${props => props.secondary && css`
		background-color: ${props => props.theme.basecolors.secondary};
	`}
	${props => props.tertiary && css`
		background-color: ${props => props.theme.basecolors.tertiary};
	`}
`
