import React from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ({ pageCount, changePage }) => {


  return (
      <div>
      
      <ReactPaginate
        previousLabel={"← Previous Page"}
        nextLabel={"Next Page →"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName="page-link" 
        nextLinkClassName={"page-link"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
        pageRangeDisplayed={9}
      />
    </div>
  )
}

export default Pagination


