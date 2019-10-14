import React, { Component } from 'react'
import Pagination from './Pagination';
import {Paginate} from './Paginate';
import Allgenre from './Allgenre';
import {getGenres} from './fakeGenreServices';
import {getmovies} from './fakeMovieServices'
import MoviesTable from './MoviesTable';
import {Link} from 'react-router-dom';
import _ from 'lodash';



class Movie extends Component {
      state={

                 movies:[],
                 genre  :[],
                 currentPage:1,
                 pageSize:4,
                 sortColumn:{
                     path:'title',
                     order:"asc"
                 }, 
                          
    }
   
   
    handleGenreSelect=genre=>{
    this.setState({selectedGenre:genre ,currentPage:1})
    }
    componentDidMount() {
        const genre=[{name:'All Genres '},...getGenres()]
        this.setState({movies:getmovies(),genre })

        console.log("Movies", getmovies())
    }
    handleDelete=(movie)=>{
        this.setState({movies:this.state.movies.filter(m=>m.id!==movie.id)})
    }
    handleLiked=(movie)=>{
       const movies=[...this.state.movies]; // all origional movies
       const index=movies.indexOf(movie); // index of movie passed as a arg e.g 2
       movies[index]={...movies[index]};  // movies[2]=
       movies[index].liked= !movies[index].liked;
       this.setState({ movies});
    }
    handlePageChange= page =>{
        this.setState({currentPage:page});

    }
    handleSort=(sortColumn)=>{
       
        this.setState({sortColumn});
    }
    getPageData=()=>{
        const{
            currentPage,
            pageSize,
            sortColumn,
            selectedGenre,
            movies:allmovies
        }=this.state; 
        const filtered = 
         selectedGenre && selectedGenre._id
         ? allmovies.filter(m=>m.Genre===selectedGenre.name)
          :allmovies;  

      const sorted =   _.orderBy(filtered,[sortColumn.path],[sortColumn.order])
        
        const  movies=Paginate(sorted,currentPage,pageSize) 
        return {totalCount :filtered.length , data:movies};
    }
   
 
    render() { 
        
        const{ 
            sortColumn,    
        }=this.state;
        
        if (this.state.movies.length===0)  
            return <p>there is no movie in data base </p>;
            const{totalCount,data:movies  }=this.getPageData();
            
             
        
        return (
        
            <div className="container">  
            <div className="row">
            <div className="col-3">
            
            <Allgenre 
             selectedItem={this.state.selectedGenre}
             items={this.state.genre}
             onItemSelect={this.handleGenreSelect}
             textProperty="name"
             valueProperty="_id"
             />
            </div>
            <div className="col">
                <Link to="/movieform" className="btn btn-primary">New Movie</Link>
                <p>Showing{totalCount } movies in the Database </p>
 
    <MoviesTable
     movies={movies} 
     onLike={this.handleLiked} 
     sortColumn={sortColumn}
     onDelete={this.handleDelete}
     onSort={this.handleSort}
     /> 
    <Pagination
     totalCount={totalCount} 
     pageSize={this.state.pageSize}
     currentPage={this.state.currentPage}
     onPageChange={this.handlePageChange}/>
            </div>
            </div>
            </div>
        ); 
    }
}

export default Movie
