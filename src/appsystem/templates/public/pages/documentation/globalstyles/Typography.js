import React from 'react'

export function Typography() {
	return (
		<React.Fragment>
			<h2>Typography</h2>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores a odio commodi cupiditate modi assumenda debitis at incidunt, alias quisquam, voluptatem esse impedit, eos amet eligendi recusandae natus? Sed, iure perspiciatis, non ipsam iusto quasi laborum repudiandae repellat vitae quos quae iste ipsum adipisci ut, exercitationem illum. Hic quae voluptatibus, sequi ut molestiae tempora. Accusamus assumenda recusandae mollitia animi itaque tempore.</p>
			<table>
				<caption>h1, h2, h3, h4, h5, h6</caption>
				
			</table>

			<table>
				<caption>h1, h2, h3, h4, h5, h6</caption>
				<colgroup span="2" style={{'background':'red'}}></colgroup>
				<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
				</tr>
				<tr>
				<td>Cell</td>
				<td>Cell</td>
				<td>Cell</td>
				</tr>
				<tr>
				<td>Cell</td>
				<td>Cell</td>
				<td>Cell</td>
				</tr>
			</table>


		</React.Fragment>
	)
}
