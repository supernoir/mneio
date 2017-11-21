import React from 'react'

export default class Card extends React.Component {
  render () {
    return (
      <div className='card m-2 text-center bg-light'>
        <div className='card-body'>
          <h4 className='card-title'>
            Produktname
          </h4>
        </div>
        <div className='card-footer'>
          Vorteilskommunikation
        </div>
      </div>
    )
  }
}
