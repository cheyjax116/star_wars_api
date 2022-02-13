import './App.css';
import React, {  useState , useEffect } from 'react';
import Header from './Components/ui/Header';
import Characters from './Components/characters';
import axios from 'axios';
import Pagination from './Components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [charactersPerPage, setcharactersPerPage] = useState(10); 
  const [pageNumber, setPageNumber] = useState(0);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);



  useEffect(() => {
        
        
    const urls = [
        "http://swapi.dev/api/people/?page=1",
        "http://swapi.dev/api/people/?page=2",
        "http://swapi.dev/api/people/?page=3",
        "http://swapi.dev/api/people/?page=4",
        "http://swapi.dev/api/people/?page=5",
        "http://swapi.dev/api/people/?page=6",
        "http://swapi.dev/api/people/?page=7",
        "http://swapi.dev/api/people/?page=8",
        "http://swapi.dev/api/people/?page=9"
    ];

    const planetsData = [
        "http://swapi.dev/api/planets/?page=1",
        "http://swapi.dev/api/planets/?page=2",
        "http://swapi.dev/api/planets/?page=3",
        "http://swapi.dev/api/planets/?page=4",
        "http://swapi.dev/api/planets/?page=5",
        "http://swapi.dev/api/planets/?page=6"

    ]
    
    const speciesData = [
        "http://swapi.dev/api/species/?page=1",
        "http://swapi.dev/api/species/?page=2",
        "http://swapi.dev/api/species/?page=3",
        "http://swapi.dev/api/species/?page=4"
        
    ]
    
    
    const allData = [];
    
    Promise.all(urls.map((url) => axios.get(url))).then((res) =>
    res.map(data => {
      allData.push(data.data.results)
        setLoading(false);
        return setCharacters(allData.flat())
        
    })

   
);



const allPlanets = []

Promise.all(planetsData.map((planet) => axios.get(planet))).then((res) => {
  res.map(data => {
    allPlanets.push(data.data.results)
    return setPlanets(allPlanets.flat())
  })
  
})

const allSpecies = []

Promise.all(speciesData.map((species) => axios.get(species))).then((res) => {
  res.map(data => {
    allSpecies.push(data.data.results)
    return setSpecies(allSpecies.flat())
    
  })
 
})



}, [searchTerm, setCharacters, setPlanets, setSpecies]);

const pagesVisited = pageNumber * charactersPerPage

 const currentCharacters = characters.slice(pagesVisited, pagesVisited + charactersPerPage);
 const pageCount = Math.ceil(characters.length / charactersPerPage)

 
 const changePage = ({selected}) => {
   setPageNumber(selected)
 }



  return (

<div className='bg-image background-filter'>  
    <div className="container u-non-blurred">

      <Header />


<input 
          type="text"
          className='centerText' 
          placeholder='Search Character Database'
          onChange={(e) => {
              setSearchTerm(e.target.value)
              }}
          // autoFocus
        />
       
        


      <Characters characters={currentCharacters} loading={loading} searchTerm={searchTerm} planets={planets} species={species} />
    
      <Pagination charactersPerPage={charactersPerPage} pageCount={pageCount} changePage={changePage} pageNumber={pageNumber} />
    </div>
    </div>
  );

}

export default App;
