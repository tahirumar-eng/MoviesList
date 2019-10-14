import React, {Component}  from 'react';



class Todoitems extends Component {
 getstyle=()=>{
     return{
         background:'#f4f4f4',
         padding:'10px',
         borderBottom:'1px #ccc doted',
         textDecoration:this.props.todos.completed?'line-through':'none'
     }
  }
  
    render() { 
        const{id,title}=this.props.todos;

        return (
        <div style={this.getstyle()}>

         <p>
         <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {''}   
         {title}
         <button style={{float:"right"}} 
         className="btn btn-danger" 
         onClick={this.props.markDelete.bind(this,id)}>
             Delete</button>
         </p>
        </div>  
        );
    }
}

export default Todoitems;