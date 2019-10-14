import React, { Component } from 'react'
import Navbar from './Navbar';
import Counters from './Counters';

 class App extends Component {
    state={
        counters:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},      
        ]
    }
    handlePlus=(counter)=>{
     const counters=[...this.state.counters];
     const index=counters.indexOf(counter);
     counters[index]={...counter};
     counters[index].value++;
     this.setState({counters});
    }
    handleMinus=(counter)=>{
       const counters=[...this.state.counters];
     const index=counters.indexOf(counter);
     counters[index]={...counter};
     counters[index].value--;
     this.setState({counters});
   }


    handleDelete=counterid=>{
       this.setState({counters:this.state.counters.filter(c=>c.id!==counterid)});

   }
   handleReset=()=>{
       this.setState({counters:this.state.counters.map(c=>{
           c.value=0;
           return c;
       }

           )});
   };
    render() {
        return (
            <div>
                <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
               <main className="container">
                   
                   <Counters
                   counters={this.state.counters} 
                   onReset={this.handleReset}
                   onPlus={this.handlePlus}
                   onMinus={this.handleMinus}
                   onDelete={this.handleDelete}
                   />

               </main>
                
            </div>
        )
    }
}

export default App
