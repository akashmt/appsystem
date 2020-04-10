import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNavigation() {
	return (
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/typography">Typography</Link></li>
		</ul>
	)
}