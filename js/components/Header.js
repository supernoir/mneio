import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header className="nav nav-inverted">
        <h4>
          <span className="text-muted">Nachname</span> Frau Müller-Clausewitz
        </h4>
        <h4><span className="text-muted">Krankenkasse</span> AOK</h4>
        <h4><span className="text-muted">ID</span> 1337</h4>
      </header>
    )
  }
}
