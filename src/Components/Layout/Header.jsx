import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return(
    <header>
        <h1 style={headerStyler} >TodoList</h1>
        <Link to="/">Home</Link>|
        <Link to="/about">About</Link>
        

    </header>
    );
    
}
const headerStyler={
    backgroundColor:'#333',
    color:'white',
    textAlign:'center',
    padding:'10px'
}
 
export default Header;