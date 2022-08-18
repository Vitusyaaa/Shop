import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Things from './components/Things';
import Categories from './components/Categories';
import ShowThing from './components/ShowThing';

class App extends React.Component  {
  constructor (props) {
super (props)
this.state = {
  orders: [],
  currentThings: [],
  things: [
    {
      id: 1,
      name: 'Robinson Crusoe',
      img: '1.jpg',
      category: 'Adventure',
      price: '100.00'
    },
   { 
      id: 2,
      name: "Home Alone",
      img: '2.jpg',
      category: 'Comedy',
      price: '100.00'
    },
    {
      id: 3,
      name: "Sign of fourn",
      img: '3.jpg',
      category: 'Biographies and memoirs',
      price: '120.00'
    },
    {
      id: 4,
      name: "Alice's Adventures in Wonderland",
      img: '4.jpg',
      category: 'Fairy tale, fantasy',
      price: '80.00'
    },
    {
      id: 5,
      name: "Sign of fourn",
      img: '5.jpg',
      category: 'Detective',
      price: '120.00'
    },
    {
      id: 6,
      name: "Three in one boat, not counting the dog",
      img: '6.jpg',
      category: 'Novel',
      price: '90.00'
    },
    {
      id: 7,
      name: 'Moby Dick, or White Whale',
      img: '7.jpg',
      category: 'Novel',
      price: '100.00'
    },
    {
      id: 8,
      name: "Thinking, fast and slow",
      img: '8.jpg',
      category: 'Psychology and self-development',
      price: '90.00'
    },
    {
      id: 9,
      name: "The Adventures of Huckleberry Finn",
      img: '9.jpg',
      category: 'Novel',
      price: '80.00'
    },
  ],
  showThing: false,
  fullThing: {},
}
     this.state.currentThings = this.state.things
     this.addOrder = this.addOrder.bind(this)
     this.delOrder = this.delOrder.bind(this)
     this.chooseCategory = this.chooseCategory.bind(this)
     this.onShowThing = this.onShowThing.bind(this)
    
  }

 render () {
  return (
    <div className='wrapper'>
    <Header orders={this.state.orders} onDel={this.delOrder}/>
    <Categories chooseCategory={this.chooseCategory}/>  
    <Things onShowThing={this.onShowThing} things={this.state.currentThings} onAdd={this.addOrder}/>
    {this.state.showThing && <ShowThing onShowThing={this.onShowThing} onAdd={this.addOrder} thing={this.state.fullThing} />}
    <Footer />
    
    </div>
    
  );
  }

  onShowThing (elem) {
    this.setState({fullThing: elem})
    this.setState({showThing: !this.state.showThing})
  }

  chooseCategory(category) {
    if (category === "all") {
    this.setState ({currentThings: this.state.things})
    return
    }
    this.setState({
      currentThings: this.state.things.filter(el => el.category === category)
    })
  }

  delOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }
  addOrder (thing) {
    let inArray = false
    this.state.orders.forEach(el => {
    if (el.id === thing.id)
    inArray = true
   })
   if (!inArray)
   this.setState({orders: [...this.state.orders, thing] })}
  }

export default App;
