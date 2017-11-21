import React from 'react'

export default class Wizard extends React.Component {
  render () {
    return (
      <div className='container'>
        <ul className='nav nav-pills nav-fill'>
          <li className='nav-item'>
            <a className='nav-link active' href='#'>Beratung starten</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Zur Person</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Zur Situation</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='#'>Ergebnisse</a>
          </li>
        </ul>
      </div>
    )
  }
}
