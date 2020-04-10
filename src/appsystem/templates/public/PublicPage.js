import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PAPERTHEME } from './theme'
import { Layout } from './layouts'
// import { WebsiteGrid } from './appsystem/layouts'

import { Home, About, Documentation, Contact } from './pages'

export default function PublicPage() {
	return (
		<ThemeProvider theme={PAPERTHEME}>
		<React.Fragment>
			<Layout>
				{/* <WebsiteGrid/> */}
			</Layout>
		</React.Fragment>
		</ThemeProvider>
	)
}
