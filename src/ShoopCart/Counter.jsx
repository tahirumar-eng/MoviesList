import React, { Component } from 'react'

class Counter extends Component {
   
    
    render() {
        
        return (
            <div className="row">
                <div className="col-1">
                <span className={this.getbadgeClasses()} >{this.formatCounter()}</span>
                </div>
                <div className="col">
                <button onClick={() =>this.props.onPlus(this.props.counter)}className="btn btn-secondary btn-sm m-2">+</button>
                <button
                 onClick={()=>this.props.onMinus(this.props.counter)}
                 className="btn btn-secondary btn-sm m-2 " disabled={this.props.counter.value===0?"disabled":""}>
                     -
                     </button>
                <button 
                onClick={()=>this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2">
                Delete
                </button>


                </div>
                
                
                
                
            </div>
        );
    }
    getbadgeClasses() {
        let classes = "badge badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;

    }
   
    formatCounter(){
        const{ value}=this.props.counter;
        return (value===0) ? 'zero' :value;
    }
    


}

export default Counter
