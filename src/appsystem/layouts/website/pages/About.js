import React from 'react'
import { SlideShow } from '../../../components'

export default function About() {
	return (
		<React.Fragment>
			<h2>About</h2>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores a odio commodi cupiditate modi assumenda debitis at incidunt, alias quisquam, voluptatem esse impedit, eos amet eligendi recusandae natus. Sed, iure perspiciatis, non ipsam iusto quasi laborum repudiandae repellat vitae quos quae iste ipsum adipisci ut, exercitationem illum. Hic quae voluptatibus, sequi ut molestiae tempora.</p>
			<SlideShow>
				<img src="http://placekitten.com/300/200" alt="Cat Pic" />
				<img src="http://placekitten.com/300/201" alt="Cat Pic" />
				<img src="http://placekitten.com/300/202" alt="Cat Pic" />
			</SlideShow>
		</React.Fragment>
	)
}
