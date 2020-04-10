import React, { Component, Children } from 'react'
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class SlideShow extends Component {
	state = {
		total: 0,
		current: 0,
	}

	componentDidMount(){
		const { children } = this.props
		this.setState({ total: Children.count(children) })
		this.interval = setInterval( this.showNext, 3000 )
	}

	componentWillUnmount(){
		clearInterval(this.interval)
	}

	showNext = () => {
		const { total, current } = this.state
		this.setState({
			current: current + 1 === total ? 0 : current + 1
		})
	}

	render() {
		const { children } = this.props
		const { current } = this.state
		const bullets = Array(this.state.total).fill("○")
		bullets[this.state.current] = "●"
		return (
			<StyledSlideShow>
				<h1>Slideshow Title</h1>
				{/* toArray() turns into into an array and displays one slide at a time */}
				<div>{bullets}</div>
				<ReactCSSTransitionGroup
					className="group"
					transitionName="example"
					transitionEnterTimeout={800}
					transitionLeaveTimeout={800}
				>
					{Children.toArray(children)[current]}
				</ReactCSSTransitionGroup>
			</StyledSlideShow>
		)
	}
}

const StyledSlideShow = styled.div`
	/* cursor: pointer; */

	.example-enter { opacity: 0.01; }

	.example-enter.example-enter-active {
		opacity: 1;
		transition: opacity 800ms ease-in;
	}

	.example-leave { opacity: 1; }

	.example-leave.example-leave-active {
		opacity: 0.01;
		transition: opacity 800ms ease-in;
	}

	.group {
		/* display: block; */
		/* position: relative; */
		width: 100%;
		height: 100%;
		background-color: #F1F1F1;
	}

	.group > * {
		/* position: absolute; */
		/* top: 10px; */
		/* left: 0; */
		/* right: 0; */
		/* margin-left: auto; */
		/* margin-right: auto; */
	}
`