import React, { Component, Children } from 'react'
import styled from 'styled-components'

export class SlideShow extends Component {
	render() {
		const { children } = this.props
		const buttons = Children.map(children, child => (
			<StyledButton>{child}</StyledButton>
		)) 
		return (
			<div>
				<h1>Slideshow text</h1>
				{/* only() Restrict to only one Child elelment in Component */}
				{/* {Children.only(this.props.children)} */}
				{/* count() Counts the amount of child elements on Component */}
				<h5>Total Children: {Children.count(children)}</h5>
				{buttons}
			</div>
		)
	}
}

const StyledButton = styled.button`
	cursor: pointer;
`