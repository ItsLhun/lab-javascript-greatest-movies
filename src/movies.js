// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((elem) => elem.director);
}

//Bonus iteration 1.1
function getAllUniqueDirectors(arr) {
  let directors = arr.map((elem) => elem.director);
  let uniques = [];
  for (let i = 0; i < directors.length; i++) {
    if (!uniques.includes(directors[i])) {
      uniques.push(directors[i]);
    }
  }
  return arr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  return arr.filter((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (!arr || !arr[0]) return 0;
  return (
    Math.round(
      (arr
        .filter((movie) => {
          return movie.score !== undefined;
        })
        .reduce((acc, movie) => acc + movie.score, 0) /
        arr.length) *
        100
    ) / 100
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (!arr || !arr[0]) return 0;
  const dramaMovies = arr
  .filter((movie) => {
    return movie.genre.includes('Drama') && movie.score !== undefined;
  });
  if (!dramaMovies[0]) return 0;
  const dramaMoviesScore = dramaMovies.reduce((acc, movie) => acc + movie.score, 0) / dramaMovies.length;
  return Math.floor(dramaMoviesScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let newMovies = [...arr];
  return newMovies.sort((movieA, movieB) => {
    if (movieA.year - movieB.year === 0 ){
      return movieA.title.localeCompare(movieB.title);
    } else {
      return movieA.year - movieB.year
    };
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newMovies = [...arr];
  let alphabeticalMovies =  newMovies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title)).map((movie) => movie.title);
  return alphabeticalMovies.length > 20 ? alphabeticalMovies.slice(0,20) : alphabeticalMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  if (!arr || !arr[0]) return null;
  let newMovies = [...arr];
  newMovies.forEach((movie) => {
    let times = movie.duration;
    let cleanHours = 0
    let cleanMinutes = 0;
    if (times.includes(" ") > 0){
      times = movie.duration.split(" ");
      cleanHours = parseInt(times[0]);
      cleanMinutes = parseInt(times[1]);
    } else if (times.includes("h")){
      cleanHours = parseInt(times);
    } else {
      cleanMinutes = parseInt(times);
    }
    
    movie.duration = (cleanHours)*60 + (cleanMinutes);
  });
  return newMovies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (!arr || !arr[0]) return null;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
