import React from 'react'
import Header from '../containers/header'
import MainNav from '../containers/mainnav'
import Main from '../containers/main'
import Aside from '../containers/aside'
import FooterNav from '../containers/footernav'
import Footer from '../containers/footer'

export function Layout() {
	return (
		<React.Fragment>
			<Header/>
			<MainNav/>
			<Main>{/* Content */}</Main>
			<Aside/>
			<FooterNav/>
			<Footer/>
		</React.Fragment>
	)
}
