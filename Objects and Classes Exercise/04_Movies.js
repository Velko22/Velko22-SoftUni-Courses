function movies(input) {
    let movieList = [];
  
    for (let command of input) {
      let tokens = command.split(' ');
  
      if (tokens.includes('addMovie')) {
        let movieName = tokens.slice(1).join(' ');
        movieList.push({ name: movieName });
      } else if (tokens.includes('directedBy')) {
        let index = tokens.indexOf('directedBy');
        let movieName = tokens.slice(0, index).join(' ');
        let director = tokens.slice(index + 1).join(' ');
  
        let movie = movieList.find(m => m.name === movieName);
        if (movie) {
          movie.director = director;
        }
      } else if (tokens.includes('onDate')) {
        let index = tokens.indexOf('onDate');
        let movieName = tokens.slice(0, index).join(' ');
        let date = tokens.slice(index + 1).join(' ');
  
        let movie = movieList.find(m => m.name === movieName);
        if (movie) {
          movie.date = date;
        }
      }
    }
  
    let validMovies = movieList.filter(movie => movie.name && movie.director && movie.date);
    for (let movie of validMovies) {
      console.log(JSON.stringify(movie));
    }
  }
  
  // Example usage
  movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
  ]);