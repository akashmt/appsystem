// Resource: https://www.youtube.com/watch?v=aeK8kS-goIA&feature=youtu.be
import {  Home, About, Contact } from '../pages'
import {  Documentation, GlobalStyles, HtmlBody, Typography, DataEntry, Inputs } from '../pages/documentation'
//
import Sandwiches from '../components/Sandwiches'
import Tacos from '../components/Tacos'
import Bus from '../components/Bus'
import Cart from '../components/Carts'

export const routes = [
  { 
		path: '/tacos', 
    component: Tacos,
    routes: [
      {
        name: 'Bus',
        path: '/tacos/bus', 
        component: Bus
      },
      {
        name: 'Cart',
        path: '/tacos/cart', 
        component: Cart
      }
    ] 
  },
  { 
		path: '/sandwiches', 
		component: Sandwiches 
	},
  { 
		path: '/about', 
		component: About 
  },
  { 
    name: 'Documentation',
		path: '/documentation', 
    component: Documentation,
    routes: [
      {
        name: 'GlobalStyles',
        path: '/documentation/globalstyles', 
        component: GlobalStyles,
        routes: [
          {
            name: 'HtmlBody',
            path: '/documentation/globalstyles/htmlbody', 
            component: HtmlBody
          },
          {
            name: 'Typography',
            path: '/documentation/globalstyles/typography', 
            component: Typography
          }
        ]  
      },
      {
        name: 'DataEntry',
        path: '/documentation/dataentry', 
        component: DataEntry,
        routes: [
          {
            name: 'Inputs',
            path: '/documentation/dataentry/inputs', 
            component: Inputs
          }
        ]  
      }
    ]  
  },
  { 
		path: '/contact', 
		component: Contact 
  },
	{ 
		path: '/', 
		component: Home
	}
]
