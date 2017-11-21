import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Wizard from './components/Wizard'
import ResultPage from './components/ResultPage'

export default class App extends React.Component {
  render () {
    return <div><h1>Mneio</h1><Header /><Wizard /><ResultPage /></div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
