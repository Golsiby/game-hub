import useGenres from "../Hooks/useGenres";

const GenreList = () => {
  const { Genres } = useGenres();
  return (
    <ul>
      {Genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
