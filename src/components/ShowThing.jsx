import React, { Component } from 'react'

export class ShowThing extends Component {
  render() {
    return (
      <div className='fuul-thing-all'>
        <div>
          <button  className='close' onClick={() => this.props.onShowThing()}>{<img src='/img/close.png'/>}</button>
          <span className='fuul-thing'>
          <img src={"./img/" + this.props.thing.img} onClick={() => this.props.onShowThing(this.props.elem)}/>
          <h2>{this.props.thing.name}</h2> 
          <h6>{this.props.thing.category}</h6>
          <p>{this.props.thing.price} $</p>
          <b className='add' onClick={() => this.props.onAdd(this.props.thing)}>+</b>
          </span>
          </div>
      </div>
    )
  }
}

export default ShowThing