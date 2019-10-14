import React,{Component} from 'react';
import Like from './Like';
import Table from './Table';
import {Link} from 'react-router-dom';

class MovieTable extends Component {
    columns=[
      {path:'title' ,label:'title',
      content:movie=><Link to={`/movie${movie.id}`}>{movie.title}</Link>
    
    },
      {path:'Genre' ,label:'Genre'},
      {path:'Stock' ,label:'Stock'},
      {path:'Rate' ,label:'Rate'},
     {key :"Like" ,
     content: movie=> <Like liked={movie.liked} onClick={()=>this.props.onLike(movie)}/>
    },
     {key :"Delete" ,
     content:movie=>  <button 
     onClick={()=>this.props.onDelete(movie)}
      className="btn btn-danger btn-sm">Delete</button>},
    ]
  
  render() { 
    const{movies,sortColumn,onSort}=this.props;
    return(

      
    <Table columns={this.columns} sortColumn={sortColumn} onSort={onSort} data={movies}/>
  );

    
  }
}
 export default MovieTable;