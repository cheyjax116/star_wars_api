import React, {  useState , useEffect } from 'react';
import axios from 'axios';



const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [charactersPerPage, setcharactersPerPage] = useState(10); 
    
    useEffect(() => {
        
        
        
        
        // axios.get(`http://swapi.dev/api/people/?page=${page}`).then(res => {
            
            //     setCharacters(res.data.results)
            
            //     })
        
                    let urls = [
                        "https://swapi.dev/api/people/?page=1",
                        "https://swapi.dev/api/people/?page=2",
                        "https://swapi.dev/api/people/?page=3",
                        "https://swapi.dev/api/people/?page=4",
                        "https://swapi.dev/api/people/?page=5",
                        "https://swapi.dev/api/people/?page=6",
                        "https://swapi.dev/api/people/?page=7",
                        "https://swapi.dev/api/people/?page=8",
                        "https://swapi.dev/api/people/?page=9"
                    ];
                    
                    
                    const allData = [];
                    
                    Promise.all(urls.map((url) => axios.get(url))).then((res) =>
                    res.map(data => {
                        //   console.log(data.data.results)
                        allData.push(data.data.results)
                        return setCharacters(allData.flat())
                        
                    })
            );
    
    // console.log(allData)

    // let finalData = allData.reduce(function(acc, x){
    //     for (var key in x) acc [key] = x[key];
    //     return acc;
    // }, {});           
            
            // .catch((err) => {
            //     console.log(err)
            // })
    
            // .finally(() => {
            //     console.log("Operation Completed")
               
            // })

            // console.log(searchTerm)
       

        
    }, [currentPage, searchTerm, setCharacters]);

//     const nextPageClick = () => {
//         if (page <= 8) {
            
//             setPage(page + 1)
//             let currentPage = page + 1;
//             removeActive();
//             checkPage(currentPage)

          
    
//         }
        
//     }

//     const previousPageClick = () => {
//     if (page >= 2) {
//         setPage(page - 1)
//         let currentPage = page - 1;
//         removeActive();
//         checkPage(currentPage)
//     }
  
// }


// const setPageNumber = (value) => {
//     removeActive()
//     setPage(Number(value.target.innerText))
//     value.target.classList.toggle('active')
    
//  };

//  const removeActive = () => {
//     let pages = document.getElementsByClassName("page-link");
//     Array.from(pages).forEach((page) => {
//       page.classList.remove("page-item");
//       page.classList.remove("active");
//     });
//   };

//   const checkPage = (pageNumber) => {
//     let stringedPageNumber = String(pageNumber);
//     let check = document.getElementById(stringedPageNumber).classList;
//     check.add("active");
//   };


   
if (loading) {
 return <h1>Loading...</h1>
 }

 const indexOfLastCharacter = currentPage * charactersPerPage;
 const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
 const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    return ( <div className='container'> 

  
    <input 
          type="text" 
        //   className='form-control' 
          placeholder='Search Database'
          onChange={(e) => {
              setSearchTerm(e.target.value)
              }}
        //   autoFocus
        />

    {
        
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
                characters.filter((character) => {
                    if (searchTerm === "") {
                        
                        return character;
                    } else if (
                         character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.birth_year.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         character.height.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.mass.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.homeworld.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.species.includes(searchTerm)   
                        
                    ){
                        
                        return character;
                    } 

                }).map((character, index) => (
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
    {/* <nav className='d-flex justify-content-center'>


        <ul className='pagination'>

        {page === 1 ? "" :
            <li className='page-link' onClick={previousPageClick}>Previous Page</li>   
            
        }   
            <li id="1" className='page-item active page-link' onClick={setPageNumber}>1</li>
            <li id="2" className='page-link' onClick={setPageNumber}>2</li>
            <li id="3" className='page-link' onClick={setPageNumber}>3</li>
            <li id="4" className='page-link' onClick={setPageNumber}>4</li>
            <li id="5" className='page-link' onClick={setPageNumber}>5</li>
            <li id="6" className='page-link' onClick={setPageNumber}>6</li>
            <li id="7" className='page-link' onClick={setPageNumber}>7</li>
            <li id="8" className='page-link' onClick={setPageNumber}>8</li>
            <li id="9" className='page-link' onClick={setPageNumber}>9</li>
        
            {page === 9 ? "" :
            <li className='page-link text-red' onClick={nextPageClick}>Next Page</li>
            }
           
        </ul>
    </nav> */}

    </div> 
    );
};


export default Characters;
