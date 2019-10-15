import React from 'react';
import { Redirect } from 'react-router-dom';
import Form from './Form';
import { getGenres } from './fakeGenreServices';
import joi from 'joi-browser';



class MovieForm extends Form {    //{match,history}
    state = {
        account: {
            title: '',
            Genre: '',
            Stock: '',
            Rate: ''
        },
        genres: [],
        errors: {},
    }
    schema = {
        _id: joi.string(),
        title: joi.string().required().label("title"),
        Genreid: joi.string().required().label("Genre"),
        Stock: joi.number().required().min(0).max(100).label("Number in Stock"),
        Rate: joi.number().required().min(0).max(10).label("Daily Rental Rate"),
    }

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres })
        // const movieId = this.props.match.params.id;
        // if (movieId === "new") return;
        // const movie = getmovies(movieId)
        // if (!movie) return this.props.history.replace("/not-found")
        // this.setState({ account: this.mapToViewModel(movie) });
    }
    mapToViewModel(movie) {
        console.log('single', movie)
        return {
            //  _id:movie._id,
            //  title:movie.title,
            //  Genreid:movie.Genre._id,
            //  Numberinstock:movie.Numberinstock,
            //  Rate:movie.Rate

        };

    }
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors }
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const account = { ...this.state.account };
        if (input.name === 'Genreid')
            account['Genre'] = getGenres().find((item) => { return item._id === input.value })['name'];
        else
            account[input.name] = input.value;

        console.log(account);

        this.setState({ account, errors });

    }
    //  handleSelect=(e)=>{



    //  }
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        // const addmovie= getnewMovie();
        // console.log(addmovie)
        console.log('submitted');
        this.state.account.id = this.props.movies.length + 1 || 1;;
        this.props.movies.push(this.state.account);
        this.setState({ toDashboard: true });
        this.setState({ errors: errors || {} });
        if (errors)
            console.log(errors);
        return;
        // const username=this.username.current.value;//return actual dom element
    }
    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }

        return (
            <div className="container">
                {/* <h1>Movie Form{match.params.id}</h1>
    <button 
    className="btn btn-primary" 
    onClick={()=>history.push("/movie")}>
        Save</button> */}
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}

                    {this.renderSelect("Genreid", "Genre", this.state.genres)}
                    {this.renderInput("Stock", "Number in Stock", "number")}
                    {this.renderInput("Rate", "Rate", "number")}
                    {this.renderButton("Save")}


                </form>
            </div>

        );
    }

}
export default MovieForm;