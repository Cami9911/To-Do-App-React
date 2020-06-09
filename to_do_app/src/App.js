import React from 'react';
import './App.css';
import './ListItems.js';
import ListItems from './ListItems.js';
import {library } from '@fortawesome/fontawesome-svg-core'
import {faTrash } from '@fortawesome/free-solid-svg-icons'
import {faEdit } from '@fortawesome/free-solid-svg-icons'
import {faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)
library.add(faEdit)
library.add(faCheck)

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         text:'',
         key:''
       },
       check:false
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
      console.log(newItems);
    }
  }
  
  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
      items:filteredItems
      })
  }

  editItem(text,key){
    const items = this.state.items;
    items.map(item =>{
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items:items
    })
  }

  checkItem(text,key){
    const items=this.state.items
    items.map(item=>{
      if(item.key===key){
       items.text=text;

      }
    })
    this.setState({
      items:items
    })
  }

  render(){
    return (
      <div className="appBody">
        <header>
          Task Manager
        </header>
        <div>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Add Task.."
              value={this.state.currentItem.text}
              onChange={this.handleInput} />
            <button type="submit">Add</button>
          </form>
        </div>
      <ListItems 
      items={this.state.items}
      deleteItem={this.deleteItem}
      editItem={this.editItem}
      checkItem={this.checkItem}>
      </ListItems>
      </div>
    )
  }
}

export default App;
