import React, { Component } from 'react'

export class Thing extends Component {
  render() {
    return (
      <div className='thing'>
          <img src={"./img/" + this.props.thing.img} onClick={() => this.props.onShowThing(this.props.thing)}/>
          <h2>{this.props.thing.name}</h2> 
          {/* <h6>{this.props.thing.category}</h6> */}
          <p>{this.props.thing.price} $</p>

          <b className='add' onClick={() => this.props.onAdd(this.props.thing)}>+</b>
      </div>
    )
  }
}

export default Thing