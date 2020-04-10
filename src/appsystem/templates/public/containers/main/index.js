import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Wrapper } from '../../layouts/Wrapper'
import { MainContainer, Main2Column } from './MainContainer'
import { MainRoutes, DocsRoutes } from '../../routes'
import {  Documentation, GlobalStyles, HtmlBody, Typography, DataEntry, Inputs } from '../../pages/documentation'

import { routes } from '../../routes/routes'
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes'

export default class Main extends Component {

  recursiveRoute(route,routeComponent = []) {
   
    if(route.routes) {
      route.routes.map((subroute) => (
        this.recursiveRoute(subroute,routeComponent)
      ))
      routeComponent.push(<RouteWithSubRoutes key={route.path} {...route} />)
      return routeComponent
     
    } else {
      routeComponent.push(<RouteWithSubRoutes key={route.path} {...route} />)
      return routeComponent
    }
  }

	render() {
		
		return (
			<Wrapper tertiary>
			<MainContainer>
				{/* <MainRoutes/> */}
				{/* <DocsRoutes/> */}
			
          <Switch>
          {routes.map((route) => (
            this.recursiveRoute(route)
            // <RouteWithSubRoutes key={route.path} {...route} />
          ))}
          </Switch>
        
				
				<div>{this.props.children}</div>
			</MainContainer>
			</Wrapper>
		)
	}
}