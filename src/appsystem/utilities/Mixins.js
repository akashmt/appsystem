import { css } from 'styled-components'

// CSS Helper
// css tag template literal needed for props in mixins (functions)
export const mixinFixedTop = css`
	position: fixed;
	left: 0;
	top: 0;
	/* with props */
	/* top: ${({ top }) => top + 'px'}; */
`

export const mixinAnchorTransitions = css`
	a {
		-webkit-transition: color 0.2s ease-in-out;
		-moz-transition: color 0.2s ease-in-out;
		-o-transition: color 0.2s ease-in-out;
		-ms-transition: color 0.2s ease-in-out;
	}
`

export const cssfunction = ({ x = 0, y = 0 } = {}) => {
	return css`
		position: fixed;
		top: ${x};
		left: ${y};
	`
}
/* import { cssfunction } from './abstracts/Mixins' */
/* ${cssfunction({ x = '10px', y = '10px' })} */