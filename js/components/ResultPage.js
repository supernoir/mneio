import React from 'react'
import Card from './Card'

export default class ResultPage extends React.Component {
  render () {
    return (
      <div className='container-fluid pl-0 ml-0 mr-0'>
        <div className='card-columns'>
          <Card />
        </div>
      </div>
    )
  }
}
