import Spinner from "./ui/Spinner"



const Characters = ({characters, loading, searchTerm, planets, species }) => {


    if (loading) {
       return (
           <div>


       <h1 className="centerText">Loading Character Data. Please Wait...</h1>
       
       <Spinner />
       

           </div>
       )
       
        }
        
        return (
            
            
            <div> 
            
    {
          
    !characters ? ( <h1>Character Not Found</h1>): (

        
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
                        <td>{
                             planets.map((planet) => {
                         if (planet.url === character.homeworld) {
                            return planet.name
                             }

                            })
                        }</td>
                        <td>{

                            species.map((species) => {
                                if (species.url === character.species[0]) {
                                    return species.name
                                } else if ((character.species).length === 0) {
                                    character.species[0] = 'https://swapi.dev/api/species/1/'
                                     if (species.url = character.species[0]) {
                                         return species.name
                                     }
                                    
                                }
                            })

                        
                

                        }</td>

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
