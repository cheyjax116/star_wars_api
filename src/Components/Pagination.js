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


// {page === 1 ? "" :
//             <li className='page-link' onClick={previousPageClick}>Previous Page</li>   
            
//         }   
//             <li id="1" className='page-item active page-link' onClick={setPageNumber}>1</li>
//             <li id="2" className='page-link'>2</li>
//             <li id="3" className='page-link'>3</li>
//             <li id="4" className='page-link'>4</li>
//             <li id="5" className='page-link'>5</li>
//             <li id="6" className='page-link'>6</li>
//             <li id="7" className='page-link'>7</li>
//             <li id="8" className='page-link'>8</li>
//             <li id="9" className='page-link'>9</li>
        
//             {page === 9 ? "" :
//             <li className='page-link text-red' onClick={nextPageClick}>Next Page</li>
//             }