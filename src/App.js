import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import PublicPage from './appsystem/templates/public/PublicPage'
import GlobalStyles from './appsystem/globalstyles'

export default function App() {
  return (
    <Router>
    <div className="App">
      <GlobalStyles/>
      <PublicPage/>
    </div>
    </Router>
  )
}
