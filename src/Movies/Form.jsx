import React, { Component } from 'react'
import joi from 'joi-browser';
import Input from './Input';
import Select from './Select';




class Form extends Component {
    state = {
        account: { username: '', password: '' },
        errors: {}
    }
    schema = {
        username: joi.string().required().label("username"),
        password: joi.string().required().label("password"),
    }
    validate = () => {
        const option = { abortEarly: false }
        const { error } = joi.validate(this.state.account, this.schema, option);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
        //   const{account}=this.state;
        //   if(account.username.trim()==='')
        //    errors.username='username is required.';
        //    if(account.password.trim()==='')
        //    errors.password='password is required.';
        //    return Object.keys(errors).length===0?null:errors;

    }



    validateProperty = ({ name, value }) => {
        const obj = { [name]: value }
        const schema = { [name]: this.schema[name] }
        const { error } = joi.validate(obj, schema, { abortEarly: false });

        return error ? error.details[0].message : null;
        // if(name==='username'){
        //     if(value.trim()==='')return 'username is required';
        // }
        // if(name==='password'){
        //     if(value.trim()==='') return 'password is required';


    }
    renderButton(label) {
        return (
            <button
                // disabled={this.validate()}
                className="btn btn-primary">{label}</button>

        );
    }
    renderSelect(name, label, options) {
        const { account, errors } = this.state;
        return (
            <Select
                name={name}
                label={label}
                value={account[name]}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}

            />
        )
    }
    renderInput(name, label) {
        const { account, errors } = this.state;

        return (
            <Input
                onChange={this.handleChange}
                value={account[name]}
                label={label}
                name={name}
                error={errors[name]}
            />
        );
    }

}

export default Form
