import React, { Component } from 'react';
import Todoitems from './Todoitems';

class Todos extends Component {
  
    render() { 
        return this.props.todos.map((todos)=>(
            < Todoitems key={todos.id} todos={todos} markComplete={this.props.markComplete} markDelete={this.props.markDelete}/>
        
          ));

       
}
}

 
export default Todos;