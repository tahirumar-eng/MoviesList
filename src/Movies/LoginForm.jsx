import React, {Component} from 'react';
import Form from './Form'
class LoginForm extends Form{
    // username=React.createRef();//used for access react element used in render method
   
    
    
    handleSubmit=e=>{
        e.preventDefault();
        const errors=this.validate();
        console.log(errors);
        this.setState({errors:errors||{}});
        if(errors) return;
        // const username=this.username.current.value;//return actual dom element
    }
    
    handleChange=({currentTarget:input})=>{
        const errors={...this.state.errors};
        const errorMessage=this.validateProperty(input);
        if(errorMessage) errors[input.name]=errorMessage;
        else delete errors[input.name];
        const account={...this.state.account};
        account[input.name]=input.value;
        this.setState({account,errors});
    }

render(){
    return (
        <div className="container">
    <h1>Login Form</h1>
    <form onSubmit={this.handleSubmit}>
        
         
       
       {this.renderInput("username","username")}
         {this.renderInput("password","password")}
       {this.renderButton("LogIn")}
    </form>
    </div>
    );
}
    } 


export default LoginForm;