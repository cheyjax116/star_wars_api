
const Characters = ({characters, loading, searchTerm, planets, species }) => {


if (loading) {
 return <h1>Loading...</h1>
 }


  


// const getPlanet = (url) => {

//     // 'https://swapi.dev/api/planets/2/'
//     console.log(url)

//     // planets.map((planet) => {
//     //     if (planet.url === url) {
//     //         return planet.name
//     //         // console.log(planet.name)
//     //      } 
//     // })

// }

species.map(species => {
    console.log(species.url, species.name)
})

// characters.map( (character) => {
//         console.log(character.species)
//         species.map( species => {
//             console.log(species.name)
//         })
    
//     })
    // characters.map( (character, index) => {
        // console.log(typeof(character.homeworld))
        // })
        


        // species.map((species) => {
        //     if (species.url ===  character.species) {
        //        return species.name
        //        } 
        //     })
        
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
                        <td>{
                             planets.map((planet) => {
                         if (planet.url === character.homeworld) {
                            return planet.name
                             }
                            })
                        }</td>
                        <td>{
                            species.map((species) => {
                        if (species.url === character.species) {
                            return species.name

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
