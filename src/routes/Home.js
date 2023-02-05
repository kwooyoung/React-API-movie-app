import { useEffect, useState } from "react";
import Movie from "../components/Movie";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  /*  
        const json = await (await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
          )
          ).json();
          const json = await response.json();//위처럼 변경하면 이 라인은 지워도 됨
          setMovies(json.data.movies);
          setLoading(false);
        };*/
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading... </h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              title_long={movie.title_long}
              summary={movie.summary}
              url={movie.url}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
