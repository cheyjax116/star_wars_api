import React, {  useState , useEffect} from 'react';
import axios from 'axios';



const Characters = () => {

    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        
        axios.get('https://swapi.dev/api/people/').then(res => {
            
           setCharacters(res.data.results);
        })
        
        // .catch((err) => {
        //     console.log(err)
        // })

        // .finally(() => {
        //     console.log("Operation Completed")
           
        // })

    }, []);



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
            <li className='page-link'>Previous Page</li>
            <li className='page-link'>Next Page</li>
        </ul>
    </nav>
    </div> 
    );
};
 
export default Characters;