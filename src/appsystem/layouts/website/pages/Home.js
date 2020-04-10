import React, { Component } from 'react'
import { Button, ButtonRender } from '../../../basecomps'
import { Input, PasswordInput } from '../../../dataentry/inputs'

import { ThemeProvider } from 'styled-components'
import LightTheme from '../../../theme/light'
import DarkTheme from '../../../theme/dark'
import Spinner from '../../../feedback/spinners/Spinner'

export default class Home extends Component {
	state = {
		theme: LightTheme,
		showPassword: false
	}

	handleToggleTheme = () => {
		this.setState({
			theme: this.state.theme.friendlyname === 'light' ? DarkTheme :  LightTheme
		})
	}

	handleTogglePassword = () => {
		this.setState({
			showPassword: !this.state.showPassword
		})
	}

	render() {
		return (
			<React.Fragment>
				<h2>Home</h2>
				<ThemeProvider theme={this.state.theme}>
					<>
					<ButtonRender onClick={this.handleToggleTheme}>
						Button Render
					</ButtonRender>
					<section>
						<PasswordInput showPassword={this.state.showPassword} />
						<ButtonRender onClick={this.handleTogglePassword}>
							{this.state.showPassword ? 'Hide' : 'Show'}
						</ButtonRender>
					</section>
					<section>
						<Spinner/>
					</section>
					</>
				</ThemeProvider>
	
				<br/><br/>
				<Input type="text"/>
				<br/><br/>
				<Input type="radio"/>
				<Input type="radio"/>
				<Input type="radio"/>
				<br/><br/>
				<Button size="large">Large</Button>
				<br/>
				<Button>Medium</Button>
				<br/>
				<Button size="small">Small</Button>
				<br/>
				<Button size="mini">Mini</Button>
				<br/>
				<Button type="cancel">Submit</Button>
				<br/>
				<Button type="pill">Pill</Button>
				<br/>
				<Button type="pill" size="small">Pill Small</Button>
				<br/>
				<Button type="outline">Outline</Button>
				<br/>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores a odio commodi cupiditate modi assumenda debitis at incidunt, alias quisquam, voluptatem esse impedit, eos amet eligendi recusandae natus? Sed, iure perspiciatis, non ipsam iusto quasi laborum repudiandae repellat vitae quos quae iste ipsum adipisci ut, exercitationem illum. Hic quae voluptatibus.</p>
				<br/>
				<small>small</small>
				<br/><br/>
				<b>bold</b>
				<br/><br/>
				<strong>convey extra importance</strong>
				<br/><br/>
				<em>emphasize</em>
				<br/><br/>
				<i>icons</i>
				<br/><br/>
				<s>strikethrough</s>
				<br/><br/>
				<mark>mark highlighted</mark>
				<br/><br/>
				<del>delete</del>
				<br/><br/>
				<ins>inserted text</ins>
				<br/><br/>
				<abbr title="">abbriviated text</abbr>
				<br/><br/>
				<address>address group</address>
				<br/><br/>
	
				<h2>Test Details</h2>
				<ol>
					<li>
						<details>
							<summary>Click to Expand</summary>
							<div><p>If your browser supports this element, it should allow you to expand and collapse these details.</p></div>
						</details>
					</li>
					<li>
						<details>
							<summary>Click to Expand</summary>
							<div><p>If your browser supports this element, it should allow you to expand and collapse these details.</p></div>
						</details>
					</li>
				</ol>
				<br/><br/>
				<details>
					<summary>Click to Expand</summary>
					<div><p>If your browser supports this element, it should allow you to expand and collapse these details.</p></div>
				</details>
				<details>
					<summary>Click to Expand</summary>
					<div><p>If your browser supports this element, it should allow you to expand and collapse these details.</p></div>
				</details>
				<br/><br/>
	
				<h3>DataList</h3>
				<input name="favCharacter" list="characters" maxlength="50" />
				<datalist id="characters">
					<option value="Homer Simpson" />
					<option value="Bart" />
					<option value="Barney Rubble" />
					<option value="Fred Flinstone" />
					<option value="Peter Griffin" />
				</datalist>
				<br/><br/>
	
				<h2>Code</h2>
				<pre className="code code-html">
					<label>HTML</label>
					<code>
						{`
							function sayHi(fName){
								var custName = fName;
								alert('Hi ' + custName);
							}
						`}
					</code>
				</pre>
				<br/><br/>
	
				<h2>Dialog</h2>
				<p>Indicates a part of an application that the user can interact with to perform a task. For example a dialog box, inspector, or window.</p>
				<dialog open>
					<div>
					<p><q>The world is full of magical things patiently waiting for our wits to grow sharper.</q> - <cite>Bertrand Russell</cite></p>
					</div>
				</dialog>
				<br/><br/>
			</React.Fragment>
		)
	}
}
