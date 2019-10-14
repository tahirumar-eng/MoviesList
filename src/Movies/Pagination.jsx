import React  from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';


 const  Pagination =props=>{
    const{totalCount,pageSize,currentPage}=props;
    console.log(currentPage);
    const pageCount=Math.ceil(totalCount/pageSize);
    if(pageCount===1) return null;
   const pages= _.range (1,pageCount+1);
  
        return (
            
<nav >
  <ul className="pagination ">
    {pages.map(page=>
    <li key={page} className={page===currentPage ?"page-item active":"page-item"}>
    <a 
    className="page-link"
    style={{cursor:'pointer'}} 
    onClick={()=>props.onPageChange(page)} >
    {page}
    </a>
    </li>
      )}
    
    

    
  </ul>
</nav>
            
        );
    };
    Pagination.propTypes={
      

    }

export default Pagination;
