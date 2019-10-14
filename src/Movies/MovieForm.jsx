import React, {Component} from 'react';
import Form from './Form';
import {getGenres} from './fakeGenreServices';
import {getmovies , getnewMovie, newMovie} from './fakeMovieServices';
import joi from 'joi-browser';



class MovieForm extends Form{    //{match,history}
     state={
         
      account: {
             Title:'',
             Genreid:'',
             Numberinstock:'',
             Rate:''         
    },
    genres:[],
    errors:{},    
}
schema={
    _id:joi.string(),
    Title:joi.string().required().label("title"),
    Genreid:joi.string().required().label("Genre"),
    Numberinstock:joi.number().required().min(0).max(100).label("Number in Stock"),
    Rate:joi.number().required().min(0).max(10).label("Daily Rental Rate"),


}

 componentDidMount(){
     const genres=getGenres();
     this.setState({genres})
     const movieId=this.props.match.params.id;
     if(movieId==="new") return;
     const movie=getmovies(movieId)
     if(!movie) return this.props.history.replace("/not-found")
     this.setState({account:this.mapToViewModel(movie)});
 }
 mapToViewModel(movie){
     console.log('single', movie)
     return{
        //  _id:movie._id,
        //  title:movie.title,
        //  Genreid:movie.Genre._id,
        //  Numberinstock:movie.Numberinstock,
        //  Rate:movie.Rate

     };

 }
     handleChange=({currentTarget:input})=>{
         const errors={...this.state.errors}
         const errorMessage=this.validateProperty(input);
         if(errorMessage) errors[input.name]=errorMessage;
         else delete errors[input.name];
         const account={...this.state.account};
         account[input.name]=input.value;
         this.setState({account,errors});

     }
    //  handleSelect=(e)=>{
         
         

    //  }
     handleSubmit=e=>{
        e.preventDefault();
        const errors=this.validate();
        // const addmovie= getnewMovie();
        // console.log(addmovie)
        console.log('submitted')
        console.log(errors);
        this.setState({errors:errors || {}});
        if(errors) return;
        // const username=this.username.current.value;//return actual dom element
    }
   render(){
   return(
    <div className="container"> 
    {/* <h1>Movie Form{match.params.id}</h1>
    <button 
    className="btn btn-primary" 
    onClick={()=>history.push("/movie")}>
        Save</button> */}
        <h1>Movie Form</h1>
       <form onSubmit={newMovie.handleSubmit}>
        {this.renderInput("Title","Title")}

           {this.renderSelect("Genreid", "Genre",this.state.genres)}
           {this.renderInput("Numberinstock","Number in Stock","number")}
           {this.renderInput("Rate","Rate","number")}
           {this.renderButton("Save")}

           
       </form>
        </div>
        
    );
   }
      
}
export default MovieForm;