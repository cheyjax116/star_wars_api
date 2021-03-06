import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/ui/Header";
import Characters from "./Components/characters";
import axios from "axios";
import Pagination from "./Components/Pagination";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [charactersPerPage, setcharactersPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    const urls = [
      "https://swapi.dev/api/people/?page=1",
      "https://swapi.dev/api/people/?page=2",
      "https://swapi.dev/api/people/?page=3",
      "https://swapi.dev/api/people/?page=4",
      "https://swapi.dev/api/people/?page=5",
      "https://swapi.dev/api/people/?page=6",
      "https://swapi.dev/api/people/?page=7",
      "https://swapi.dev/api/people/?page=8",
      "https://swapi.dev/api/people/?page=9",
    ];

    const planetsData = [
      "https://swapi.dev/api/planets/?page=1",
      "https://swapi.dev/api/planets/?page=2",
      "https://swapi.dev/api/planets/?page=3",
      "https://swapi.dev/api/planets/?page=4",
      "https://swapi.dev/api/planets/?page=5",
      "https://swapi.dev/api/planets/?page=6",
    ];

    const speciesData = [
      "https://swapi.dev/api/species/?page=1",
      "https://swapi.dev/api/species/?page=2",
      "https://swapi.dev/api/species/?page=3",
      "https://swapi.dev/api/species/?page=4",
    ];

    const allData = [];

    Promise.all(urls.map((url) => axios.get(url))).then((res) =>
      res.map((data) => {
        allData.push(data.data.results);
        setLoading(false);
        return setCharacters(allData.flat());
      })
    );

    const allPlanets = [];

    Promise.all(planetsData.map((planet) => axios.get(planet))).then((res) => {
      res.map((data) => {
        allPlanets.push(data.data.results);
        return setPlanets(allPlanets.flat());
      });
    });

    const allSpecies = [];

    Promise.all(speciesData.map((species) => axios.get(species))).then(
      (res) => {
        res.map((data) => {
          allSpecies.push(data.data.results);
          return setSpecies(allSpecies.flat());
        });
      }
    );
  }, [searchTerm, setCharacters, setPlanets, setSpecies]);

  const pagesVisited = pageNumber * charactersPerPage;

  characters.map((character) => {
    planets.map((planet) => {
      if (planet.url === character.homeworld) {
        character.homeworld = planet.name;
      }
    });

    species.map((species) => {
      if (species.url === character.species[0]) {
        character.species = species.name;
      } else if (character.species.length === 0) {
        character.species = "Human";
      }
    });
  });

  const currentCharacters = characters
    .filter((character) => {
      if (searchTerm === "") {
        return character;
      } else if (
        character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.birth_year.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.height.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.mass.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.homeworld.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.species.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return character;
      }
    })
    .slice(pagesVisited, pagesVisited + charactersPerPage);

  const pageCount = Math.ceil(
    characters.filter((character) => {
      if (searchTerm === "") {
        return character;
      } else if (
        character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.birth_year.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.height.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.mass.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.homeworld.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.species.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return character;
      }
      return false;
    }).length / charactersPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="bg-image">
      <div className="container">
        <Header />

        <input
          type="text"
          className="centerText"
          placeholder="Search Character Database"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            changePage({ selected: 0 });
          }}
          autoFocus="True"
        />

        <Characters
          characters={currentCharacters}
          loading={loading}
          searchTerm={searchTerm}
          planets={planets}
          species={species}
        />

        <Pagination
          charactersPerPage={charactersPerPage}
          pageCount={pageCount}
          changePage={changePage}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
};

export default App;
