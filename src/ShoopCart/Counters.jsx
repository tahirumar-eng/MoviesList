import React, { Component } from 'react'
import Counter from './Counter';
 class Counters extends Component {
     
    render() {
        return (
            <div>
                
               <button 

               onClick={this.props.onReset}
               className="btn btn-primary btn-sm">
               Reset
               </button> 
               {this.props.counters.map(counter=>(
                <Counter 
                onPlus={this.props.onPlus}
                onMinus={this.props.onMinus}
                key={counter.id} 
                onDelete={this.props.onDelete}
                counter={counter}

                 
               />))} 
          </div>
        )
    }
}

export default Counters
