// import React, {  useState , useEffect } from 'react';




const Characters = ({characters, loading, searchTerm}) => {

    // const [characters, setCharacters] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [searchTerm, setSearchTerm] = useState("");
    // const [charactersPerPage, setcharactersPerPage] = useState(10); 
    
    // useEffect(() => {
        
        
    //                 let urls = [
    //                     "https://swapi.dev/api/people/?page=1",
    //                     "https://swapi.dev/api/people/?page=2",
    //                     "https://swapi.dev/api/people/?page=3",
    //                     "https://swapi.dev/api/people/?page=4",
    //                     "https://swapi.dev/api/people/?page=5",
    //                     "https://swapi.dev/api/people/?page=6",
    //                     "https://swapi.dev/api/people/?page=7",
    //                     "https://swapi.dev/api/people/?page=8",
    //                     "https://swapi.dev/api/people/?page=9"
    //                 ];
                    
                    
    //                 const allData = [];
                    
    //                 Promise.all(urls.map((url) => axios.get(url))).then((res) =>
    //                 res.map(data => {
    //                     allData.push(data.data.results)
    //                     return setCharacters(allData.flat())
                        
    //                 })
    //         );
       
        
    // }, [currentPage, searchTerm, setCharacters]);


   
if (loading) {
 return <h1>Loading...</h1>
 }


    return ( <div> 


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
    </div> 
    );
};


export default Characters;
