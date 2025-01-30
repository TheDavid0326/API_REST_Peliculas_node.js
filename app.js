const express = require('express');
const movies = require('./movies.json');
const fs = require('node:fs');
const crypto = require('node:crypto');
const { validateMovie, validatePartialMovie } = require('./schemas/movies.js');

const app = express();
const PORT = process.env.PORT ?? 1234;
app.disable('x-powered-by');

app.use(express.json());

// Recupera todas las películas o filtrar por género
app.get('/movies', (req, res) => {
  const { genre } = req.query;
  if (genre) { // some: Es un método de los arrays que comprueba si al menos un elemento en el array cumple la condición.
    const filteredMovies = movies.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()));
    return res.json(filteredMovies);
  } else {
    res.json(movies);
  }
});

// Recupera una películas por id
app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = movies.find(movie => movie.id === id);

  if (movie) {
    return res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

// Crea una pelicula
app.post('/movies', (req, res) => {
  const result = validateMovie(req.body);

  if (result.error) {
    return res.status(422).json({ error: JSON.parse(result.error.message) });
  } else {
    const newMovie = {
      id: crypto.randomUUID(),
      ...result.data
    };

    movies.push(newMovie);
    // Se necesita convertir el array movies en una cadena JSON antes de pasarlo a fs.writeFile
    const jsonContent = JSON.stringify(movies, null, 2);

    fs.writeFile('./movies.json', jsonContent, 'utf8', (error) => {
      if (error) {
        console.error('No se ha podido escribir el archivo movies.json, error:', error);
        process.exit(1);
      } else {
        res.status(201).json(newMovie);
      }
    });
  }
});

// Actualiza una película
app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body);
  if (!result.success) {
    return res.status(422).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const movieIndex = movies.findIndex(movie => movie.id === id);
  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  // Las propiedades de result.data sobrescribirán las del objeto original.
  const updatedMovie = {
    ...movies[movieIndex],
    ...result.data
  };
  movies[movieIndex] = updatedMovie;

  const jsonContent = JSON.stringify(movies, null, 2);
  fs.writeFile('./movies.json', jsonContent, 'utf8', (error) => {
    if (error) {
      console.error('No se ha podido escribir el archivo movies.json, error:', error);
      process.exit(1);
    } else {
      res.status(200).json(updatedMovie);
    }
  });
});

// Elimina una película solo del array movies, no del movies.json
app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  const deleteMovieIndex = movies.findIndex(movie => movie.id === id);

  if (deleteMovieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  movies.splice(deleteMovieIndex, 1);
  return res.status(200).json({ message: 'Movie deleted' });
});

app.listen(PORT,'::', () => {
  console.log(`Server listening on port: http://localhost[::]${PORT}`);
});
