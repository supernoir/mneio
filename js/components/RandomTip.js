import React from 'react'

const tips = [
  'Wussten Sie schon, das XX% auch darunter leiden?',
  'Wir werden Ihnen gleich ein paar Fragen stellen',
  'Sie können jederzeit nachfragen, sollte es noch Fragen geben'
]

export default class RandomTip extends React.Component {
  getRandomArbitary (min, max) {
    return Math.random() * (max - min) + min
  }
  getRandomTip () {
    let randomNumber = Math.ceil(this.getRandomArbitary(0, tips.length))
    return tips[randomNumber]
  }
  render () {
    return (
      <div>
        <h1>Tipps zur Kundenansprache</h1>
        <h2>{this.getRandomTip()}</h2>
      </div>
    )
  }
}
