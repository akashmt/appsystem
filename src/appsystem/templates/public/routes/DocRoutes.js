import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Documentation } from '../pages/documentation'
import { GlobalStyles, HtmlBody, Typography } from '../pages/documentation'

export function DocsRoutes() {
	return (
		<Switch>
			<Route path="/documentation"
						 exact={true} strict={true} component={Documentation}/>
			<Route path="/documentation/globalstyles"
						exact={true} strict={true} component={GlobalStyles}/>
			<Route path="/documentation/globalstyles/htmlbody" 
							exact={true} strict={true} component={HtmlBody} />
			<Route path="/documentation/globalstyles/typography" 
						 exact={true} strict={true} component={Typography} />
		</Switch>
	)
}