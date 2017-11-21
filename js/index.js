import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Wizard from './components/Wizard'

export default class App extends React.Component {
  render () {
    return <div><h1>Mneio</h1><Header /><Wizard /></div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
