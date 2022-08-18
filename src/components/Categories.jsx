import React, { Component } from 'react'

export class Categories extends Component {
    constructor (props) {
      super (props) 
      this.state = {
        categories: [
          {
            value: "all",
            name: "All"
          },
          {
            value: "Novel",
            name: "Novel",
          },
          {
            value: "Comedy",
            name: "Сomedy",
          },
          {
            value: "Adventure",
            name: "Adventure",
          },
          {
            value: "Detective",
            name: "Detective",
          },
          {
            value: "Fairy tale, fantasy",
            name: "Fairy tale, fantasy",
          },
          {
            value: "Biographies and memoirs",
            name: "Biographies and memoirs",
          },
          {
            value: "Psychology and self-development",
            name: "Psychology and self-development",
          },
        ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
       <div key={el.key} onClick={() => this.props.chooseCategory(el.value)}>{el.name}</div> 
       ))}
      </div>
    )
  }
}

export default Categories