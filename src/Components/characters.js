import Spinner from "./ui/Spinner";

const Characters = ({ characters, loading }) => {
  if (loading) {
    return (
      <div>
        <h1 className="centerText">Loading Character Data. Please Wait...</h1>

        <Spinner />
      </div>
    );
  }

  return (
    <div>
      {characters.length === 0 ? (
        <div className="centerText">
          Character Not Found. Please Try Another.
        </div>
      ) : (
        <table className="table=responsive table table-bordered bg-light text-dark table-hover">
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
            {characters.map((character, index) => (
              <tr key={index}>
                <td>{character.name}</td>
                <td>{character.birth_year}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.homeworld}</td>
                <td>{character.species}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Characters;
