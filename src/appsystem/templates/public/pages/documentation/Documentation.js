import React from 'react'
import { Link } from 'react-router-dom'
//import Highlight from 'react-highlight'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export function Documentation({routes}) {
	return (
		<React.Fragment>
			<h2>Documentation</h2>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores a odio commodi cupiditate modi assumenda debitis at incidunt.</p>
      {/* <Highlight innerHTML={true}>{'<p>Hello world</p>'}</Highlight> */}
      
			<SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers>
				{`
function foo() { return 'bar' }
				`}
			</SyntaxHighlighter>
      <br/>
			<SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers>
				{`<p>Hello world</p>`}
			</SyntaxHighlighter>
      <br/>
			<SyntaxHighlighter language="css" style={vs2015} showLineNumbers>
				{`
body { background: red; }
				`}
			</SyntaxHighlighter>

      <ul>
      {routes.map(({path, name}) => (
        <li><Link to={path}>{name}</Link></li>
      ))}
      </ul>
     
		</React.Fragment>
	)
}