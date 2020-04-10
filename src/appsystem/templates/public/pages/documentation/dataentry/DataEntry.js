import React from 'react'
import { Link } from 'react-router-dom'

export function DataEntry({routes}) {
	return (
		<React.Fragment>
			<h2>DataEntry</h2>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores a odio commodi cupiditate modi assumenda debitis at incidunt, alias quisquam, voluptatem esse impedit, eos amet eligendi recusandae natus? Sed, iure perspiciatis, non ipsam iusto quasi laborum repudiandae repellat vitae quos quae iste ipsum adipisci ut, exercitationem illum. Hic quae voluptatibus, sequi ut molestiae tempora. Accusamus assumenda recusandae mollitia animi itaque tempore.</p>
      <ul>
        {routes.map(({path, name}) => (
          <li><Link to={path}>{name}</Link></li>
        ))}
      </ul>
		</React.Fragment>
	)
}
