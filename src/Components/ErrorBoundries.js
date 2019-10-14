import React, { Component } from 'react';



class ErrorBoundries extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }

    }

    componentDidCatch(error){
        this.setState({hasError:true})
    }

    
    render(){
        if (this.state.hasError) {
            return<h1>Oops.. this is not good</h1>
            
        }
        return this.props.children
        
    }
}

export default ErrorBoundries;