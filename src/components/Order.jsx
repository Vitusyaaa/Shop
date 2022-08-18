import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='thing'>
          <img src={"./img/" + this.props.thing.img} />
          <h2>{this.props.thing.name}</h2> 
          <p>{this.props.thing.price}$</p>
          <img className='delIcon' src='./img/trash.svg' onClick={() => this.props.onDel(this.props.thing.id)} />
          </div>
    )
  }
}

export default Order