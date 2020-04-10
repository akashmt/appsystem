import React from 'react'

import { Header } from './header'
import { MainNav } from './mainnav'
import { Main } from './main'
import { Aside } from './aside'
import { Footer } from './footer'

export default function Layout() {
  return (
    <div className="App">
      <Header/>
      <MainNav/>
      <Main></Main>
      <Aside/>
      <Footer/>
    </div>
  )
}