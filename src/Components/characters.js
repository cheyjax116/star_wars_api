import React, {  useState , useEffect } from 'react';
import axios from 'axios';


const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
      
            axios.get(`http://swapi.dev/api/people/?page=${page}`).then(res => {
                
               setCharacters(res.data.results);
            })
            
            // .catch((err) => {
            //     console.log(err)
            // })
    
            // .finally(() => {
            //     console.log("Operation Completed")
               
            // })
        console.log(page)
        
    }, [page, setCharacters]);

    const nextPageClick = () => {
        if (page <= 8) {
            
            setPage(page + 1)

          
    
        }
        
    }

    const previousPageClick = () => {
    if (page >= 2) {
        
        setPage(page - 1)

    }

    
}


function setPageNumber(value) {
    
    setPage(Number(value.target.innerText))
    // value.target.classList.add('active')
    console.log(value.classList)
    
 
 }


   

    return ( <div> {
    !characters ? ("Character Not Found"): (
        
    <table className='table table-bordered bg-light text-dark table-hover'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Homeworld</th>
                <th>Species</th>
            </tr>
        </thead>
        <tbody>
            {
                characters.map((character, index) => (
                    <tr key={index}>
                        <td>{character.name}</td>
                        <td>{character.birth_year}</td>
                        <td>{character.height}</td>
                        <td>{character.mass}</td>
                        <td>{character.homeworld}</td>
                        <td>{character.species}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    )}
    <nav className='d-flex justify-content-center'>
        <ul className='pagination'>
        {page === 1 ? "" :
            <li className='page-link' onClick={previousPageClick}>Previous Page</li>   
            
        }

            <li className='page-item page-link' onClick={setPageNumber}>1</li>
            <li className='page-link' onClick={setPageNumber}>2</li>
            <li className='page-link' onClick={setPageNumber}>3</li>
            <li className='page-link' onClick={setPageNumber}>4</li>
            <li className='page-link' onClick={setPageNumber}>5</li>
            <li className='page-link' onClick={setPageNumber}>6</li>
            <li className='page-link' onClick={setPageNumber}>7</li>
            <li className='page-link' onClick={setPageNumber}>8</li>
            <li className='page-link' onClick={setPageNumber}>9</li>
            {/* <li  className="page-item active" onClick={setPageNumber}>
                <span className='page-link page-item active'>9</span>
            </li> */}

            {page === 9 ? "" :
            <li className='page-link text-red'onClick={nextPageClick}>Next Page</li>
            }
           
        </ul>
    </nav>
    </div> 
    );
};


export default Characters;


