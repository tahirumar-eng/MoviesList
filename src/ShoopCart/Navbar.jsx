import React, { Component } from 'react'
 class Navbar extends Component {
    render() {
        return (
            <div>
                 <navbar className="navbar-light bg-light f1">
                    Navbar
                    
                     <span className="badge badge-pill badge-secondary m-2">
                    {this.props.totalCounters}
                    </span>
                    </navbar>
                
            </div>
        )
    }
}

export default Navbar
