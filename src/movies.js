// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (movies) => {
    return movies.map((movie) => {
        return movie.director;
    });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (movies) => {
    //if (movies.length) === 0)
    //return 0;//we don't need because if it doesn't find anything it automatically returns 0.
        let dramaSteve = movies.filter (movie => {
            return movie.genre.includes ('Drama') && 
            movie.director === 'Steven Spielberg';
        });
        return dramaSteve.length;
    }
// example of OR search: return (movie.genre.includes ('Drama') || (movie.genre.includes ('drama')))
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (movies) => {
    if (movies.length === 0) {
        return 0;
    }
    let totalSum = 0;
    movies.forEach((movie) => {
        if (!movie.rate) {
            movie.rate = 0;
        }
        totalSum += movie.rate;
    });
    let averageRating = totalSum / movies.length;
    return Number(averageRating.toFixed(2));
}

//he did re-do of 3 in class, on codepen
//let reduceSum = movies.reduce((accumulator, currentValue) => {
//    if (!currentValue.rate) {
//      currentValue.rate = 0;
//    }
//    return accumulator + currentValue.rate;
//  }, 0);
  //console.log('reduceSum', reduceSum);
//  let avg = reduceSum/movie.length;
//  return Number (avg.toFixed(2));
  //}
//}
// Iteration 4: Drama movies - Get the average of Drama Movies
//DO THIS BY RE-USING CODE FROM ABOVE TO GET AVG!
//let dramaMoviesRate = (movies) => {
//    let dramaMovies= movies.filter (movie => movie.genre.includes('Drama'));
//    return ratesAverage(dramaMovies); 
    
//}

let dramaMoviesRate = (movies) => {
    let dramaMoviesRate= movies.filter (movie => movie.genre.includes('Drama'));
    return ratesAverage(dramaMoviesRate); 
}
//console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
    let orderedMovies = movies.sort((movie1, movie2) => {
        if (movie1.year===movie2.year) {
            if (movie1.title > movie2.title) {
                return 1;
            } else {
                return -1;
            }
        } else {
            if (movie1.year > movie2.year) {
                return 1;
            } else {
                return -1;
            }
        }
    });
    //spread operator brings items from an array into another array
    return [...orderedMovies]; //you have to create a new array to pass the test, do it by using the spread operator
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    //let orderedArray = movies.sort((movie1, movie2) => { //this mutates the original array
    let orderedArray = [...movies].sort((movie1, movie2) => { //this is his fix to get the tests to pass
        if (movie1.title > movie2.title) { //the titles are inside the object, thats why we need the greater than sign even though we are dealing with text/string
            return 1;
        } else {
            return -1;
        }
    }).slice (0, 20);//slice will return the first 20 into a new array, the test wants first 20
    return orderedArray.map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


//NaN means not a number, but it actually is a number. Trick question in a job interview? 