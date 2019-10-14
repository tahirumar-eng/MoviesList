import React, { Component } from 'react'
 class TableHeader extends Component {
    raiseSort=path=>{
        const sortColumn={...this.props.sortColumn};
        if(sortColumn.path===path) sortColumn.order=sortColumn.order==="asc"?"des":"asc";
        else{
            sortColumn.path=path;
            sortColumn.order="asc";
        }
        this.props.onSort(sortColumn);
      };
      renderSortIcon=column=>{
          if(column.path!==this.props.sortColumn.path) return null;
          if(this.props.sortColumn.order==='asc') return <i className="fa fa-sort-asc"></i>
          return <i className="fa fa-sort-des"></i>
      }
    render() {
        return (
        <thead>
            <tr>
               {this.props.columns.map(column=>
           <td onClick={()=>this.raiseSort(column.path)}>{column.label}{this.renderSortIcon(column)} </td>

                )} 
            </tr>
        </thead>
           
        )
    }
}

export default TableHeader
