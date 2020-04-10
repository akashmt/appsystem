import styled from 'styled-components'
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../../consts'

export const Wrapper = styled.section`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;

	/*** Background-Color */
	background: ${
  (props) =>
    // if primary
    props.bgcolor === 'primary' ? PRIMARY_COLOR : 
    // else if secondary
		props.bgcolor === 'secondary' ? {SECONDARY_COLOR} :
		// else if secondary
		props.bgcolor === 'tertiary' ? {TERTIARY_COLOR} :
		// else if secondary
		props.bgcolor === 'transparent' ? 'transparent' :
    // else default
    '#f1f1f1'
  }

`

export const Container = styled.div`
	margin: 0rem auto 0rem auto;
	padding: 1rem 1rem 1rem 1rem;
	width: 1200px;

	/*** Background-Color */
	${({ bgcolor }) => {
		if (bgcolor === 'primary') {
			return `background-color: red;`
		} else if (bgcolor === 'secondary') {
			return `background-color: orange;`
		} else if (bgcolor === 'transparent') {
			return `background-color: transparent;`
		} else {
			return `background-color: white;`
		}
	}}
`

export const Section = styled.section`

`