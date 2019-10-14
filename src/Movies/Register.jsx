import React, { Component } from 'react'
import Input from './Input';
import joi from 'joi-browser';
import Form from './Form';
 class Register extends Form {
     state={
         account:{
             username:'',
             password:'',
             name:''
         },
         errors:{},
        }
        schema={
            username:joi.string().required().email().label("username"),
            password:joi.string().required().min(5).label("password"),
            name :joi.string().required().label("name"),
        }
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
    
     
         render() {
        const{account}=this.state;
        return (
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit} >
                {this.renderInput("username","username")}
                {this.renderInput("password","password","password")}
                {this.renderInput("name","name")}

                {this.renderButton("Register")}
                
                </form>
                
            </div>
        )
    }
}

export default Register
