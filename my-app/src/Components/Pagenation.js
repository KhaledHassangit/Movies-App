import React,{useState,useEffect} from 'react';
// import { Pagination } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { GetPages } from '../Redux/Action/MovieAction';

function AdvancedPagination() {

    // Page Count
    const [pageCount, setPageCount] = useState(0)

    const dispatch = useDispatch()
    const pages = useSelector((state => state.pageCount))

        // Render
        useEffect(() => {
        setPageCount(pages)
        }, [])

    const handlePageClick =(data)=>{
        dispatch(GetPages(data.selected +1))
    }
    



    return (
        
        <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="Previous"
        // renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center mt-3 p-3'}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        breakClassName={"page-item"}
        activeClassName={"active"}
        />
        
    );
}

export default AdvancedPagination;