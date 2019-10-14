import React,{Component}  from 'react';
import {connect} from 'react-redux';
import './App.css';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundries from '../Components/ErrorBoundries';
import {setSearchField,requestRobots} from '../Action';


const mapStatetoProps= state=>{
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error:state.requestRobots.error 
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
  onSearchChange:(event)=> dispatch(setSearchField(event.target.value)),
  onRequestRobot:()=>dispatch(requestRobots())
  }

}



class App extends Component{
      componentDidMount(){
      this.props.onRequestRobot();    
    }
  render(){
    const {searchField ,onSearchChange,robots,isPending}=this.props;
    
    const filteredrobots=robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
   

  
  return isPending ?
  <h1>Loading</h1>:
  (
    <div className='tc'>
       
     <h1 className='f1'>RoboFriends</h1> 
     <SearchBox searchChange={onSearchChange}/>
     <Scroll>
       <ErrorBoundries>
     <Cardlist robots={filteredrobots}/>
     </ErrorBoundries>
     </Scroll>
    </div>


  );
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(App);
