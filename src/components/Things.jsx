import React, { Component } from 'react'
import Thing from './Thing'

export class Things extends Component {
   render() {
    return (
      <main>
          {this.props.things.map(el => (
              <Thing onShowThing={this.props.onShowThing} key={el.id} thing={el} onAdd={this.props.onAdd}/>
          ))}
      </main>
    )
  }
}

export default Things