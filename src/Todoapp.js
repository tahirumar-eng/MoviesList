import React  from 'react';

class Todoapp extends Component {
    constructor(props){
        super(props);
    
        this.state={
        items:[],
        text:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
     
    }
    render() { 
        return ( 
            <div>
                <h3>To Do</h3>
              <Todolist items={this.state.items}/>
              <form onSubmit={this.handleSubmit}>
              <label htmlFor="new-todo">
                  what needs to be done?
              </label>
              <input id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
              />
              <button className="btn btn-danger">
                  Add #{this.state.items.length +1}
              </button>
                
              </form>
            </div>
         );
    }
    handleChange(e){
        this.setState({text:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.length)
    }
}
 
export default Todoapp;