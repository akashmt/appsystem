import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Wrapper } from '../../layouts/Wrapper'
import { MainContainer, Main2Column } from './MainContainer'
import { MainRoutes, DocsRoutes } from '../../routes'

import {  Home, About, Documentation, Contact } from '../../pages'

const Sandwiches = () => <h1>Sandwiches</h1>
const Tacos = () => <h1>Tacos</h1>

const routes = [
	{ 
		path: '/', 
		component: Home
	},
	{ 
		path: '/about', 
		component: About 
	},
	{ 
		path: '/documentation', 
		component: Documentation 
  },
  { 
		path: '/contact', 
		component: Contact 
  },
  { 
		path: '/sandwiches', 
		component: Sandwiches 
	},
	{ 
		path: '/tacos', 
		component: Tacos 
	}
]

export default class Main extends Component {
	render() {
		console.log('routes :', routes)
		return (
      
			<Wrapper tertiary>
			<MainContainer>
				{/* <MainRoutes/> */}
				{/* <DocsRoutes/> */}
				<Switch>
					{/* <Route exact path="/" component={Home}/> */}
					{/* <Route exact path="/tacos" component={Tacos}/> */}
					{routes.map((route) => (
							<Route
								exact
								key={route.path}
								path={route.path}
								component={route.component}
							/>
					))}
				</Switch>
				<div>{this.props.children}</div>
			</MainContainer>
			</Wrapper>
      
		)
	}
}






// import React, { Component } from 'react'
// import { Switch, Route } from 'react-router-dom'
// import { Wrapper } from '../../layouts/Wrapper'
// import { MainContainer, Main2Column } from './MainContainer'
// import { MainRoutes, DocsRoutes } from '../../routes'

// export default class Main extends Component {
// 	render() {
// 		return (
// 			<Wrapper tertiary>
// 			<MainContainer>
// 				<MainRoutes/>
// 				<DocsRoutes/>
// 				<div>{this.props.children}</div>
// 			</MainContainer>
// 			</Wrapper>
// 		)
// 	}
// }