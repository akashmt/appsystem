import React from 'react'
import { Link } from 'react-router-dom'

export default function TypographyNavigation() {
	return (
		<ul>
			<li><Link to="/typography">Typography</Link></li>
			<ul>
				<li><Link to="/typography/headings">Headings</Link></li>
			</ul>
		</ul>
	)
}
