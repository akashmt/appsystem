import React from 'react'
import { Normalize } from './Normalize'
import { HtmlBody } from './HtmlBody'
import { Fonts } from './Fonts'
import { Headers, Content } from './Typography'
import { Anchor } from './Anchors'
import { List, Details, DataList } from './Lists'
import { Alert, Dialog } from './Alerts'
import { Table } from './Tables'
import { Blockquote } from './Blockquotes'
import { Code } from './Code'

function GlobalStyles(){
  return (
		<React.Fragment>
			<Normalize/>
			<HtmlBody/>
			<Fonts/>

			<Headers/>
			<Content/>

			<Anchor/>

			<List/>
			<Details/>
			<DataList/>

			<Alert/>
			<Dialog/>

			<Table/>
			<Blockquote/>
			<Code/>
		</React.Fragment>
	)
}

export default GlobalStyles