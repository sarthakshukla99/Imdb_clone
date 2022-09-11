let favm = document.getElementById("movie-detail");
// here we will write function when user click on detail button and we will fetch current movie saved in local storage and display it.
function renderMovie() {
  let movieList = document.querySelector("#movie-detail");
  if (movieList) movieList.innerHTML = "";
  let favmovie = localStorage.getItem("current_movie");
  console.log(favmovie);
  let savedMovie = JSON.parse(favmovie);
  if (savedMovie == null) {
    favmovie = [];
  } else {
    
      const avatar = savedMovie.Title;
      const imgsrc = savedMovie.Poster;
      const plot = savedMovie.Plot;
      const released = savedMovie.Released;
      const imdb = savedMovie.imdbRating;
      const runtime= savedMovie.Runtime;
      const genre= savedMovie.Genre;
      const writer= savedMovie.Writer;

      favm.innerHTML += `
      <div class="card my-5 " style="width: 70%"; margin:'auto';  >
        <img src="${imgsrc}" class="" alt="...">
        <div class="card-body">
          <h5 class="card-title">"MOVIE: ${avatar}"</h5>
          <p class="card-text">PLOT: ${plot}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>RELEASES</b>: ${released}</li>
          <li class="list-group-item"><b>IMDB-RATINGS</b>: ${imdb}</li>
          <li class="list-group-item"><b>RUNTIME</b>: ${runtime}</li>
          <li class="list-group-item"><b>WRITERS</b>: ${writer}</li>
          <li class="list-group-item"><b>GENRE</b>: ${genre}</li>
        </ul>
      </div>`;

      
      
    
  }
}
renderMovie();