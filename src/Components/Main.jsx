import React, {Component } from 'react';
import {BrowserRouter as  Router,Route} from 'react-router-dom';
import Todos from './Todos';
import Header from './Layout/Header';
import AppTodo from './AppTodo';
import './Main.css'
import About from './Pages/About';


class Main extends Component {
    state = { 
      todos:  [
        {
            id:1,
            title:'Take out the trash ',
            completed:false
        },
        {
            id:2,
            title:'Download React tutorial of mosh  ',
            completed:false
        },
        {
            id:3,
            title:'Learn React At Office',
            completed:false
        },
        {
            id:4,
            title:'Going To gyum At 7 oclock ',
            completed:false
        }
    
        
    ]
}
markDelete=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todos=>todos.id
        !==id)]});
}
markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todos=>{
        if (todos.id===id) {
            todos.completed=!todos.completed
           
            return todos; 
        
        }
    })
    });


}   
//APP Todo
appTodo=(title)=>{
   const newTodo={
       id:5,
       title,
       completed:false
   }
   this.setState({todos:[...this.state.todos,newTodo ]})
}

    render() { 
        console.log(this.state.todos);
        return (
            <Router>
            <div className="App">
             <div className="container">

                <Header/>
                <Route exact path="/" render={props=>(    
                    <React.Fragment>
                <AppTodo appTodo={this.appTodo}/>
                <Todos 
                todos={this.state.todos}
                 markComplete={this.markComplete}
                 markDelete={this.markDelete} 
                 />

                    </React.Fragment>
                )}   />
                <Route path="/about" component={About} />
                
                 </div>
            </div>
            </Router>
          );
    }
}
 
export default Main;