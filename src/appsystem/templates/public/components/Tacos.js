import React from 'react'
import { Switch, Link } from 'react-router-dom'
import RouteWithSubRoutes from '../routes/RouteWithSubRoutes'

const Tacos = ( { routes }) => (
  <div>
    <h1>Tacos</h1>
    <ul>
    {routes.map(({path, name}) => (
      <li><Link to={path}>{name}</Link></li>
    ))}
    </ul>
    <Switch>
    {routes.map((route) => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
    </Switch>
  </div>
)


export default Tacos