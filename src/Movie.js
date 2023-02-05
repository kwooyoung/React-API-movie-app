function Movie({ coverImg, title_long, summary, url, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title_long} />
      <a href={url}>
        <h2>{title_long}</h2>
      </a>

      <p>{summary}</p>

      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
