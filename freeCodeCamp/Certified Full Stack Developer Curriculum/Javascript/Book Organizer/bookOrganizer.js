let books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    releaseYear: 2018,
  },
  {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    releaseYear: 2010,
  },
  {
    title: 'Changes',
    author: 'Jim Butcher',
    releaseYear: 2010,
  },
  {
    title: 'The Blade Itself',
    author: 'Joe Abercrombie',
    releaseYear: 2006,
  },
  {
    title: 'Dungeon Crawler Carl',
    author: 'Matt Dinniman',
    releaseYear: 2020,
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    releaseYear: 2021,
  },
  {
    title: "Dirk Gently's Holistic Detective Agency",
    author: 'Douglas Adams',
    releaseYear: 1987,
  },
]



function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) {
        return -1;
    } else if (book1.releaseYear > book2.releaseYear) {
        return 1;
    } else {
        return 0;
    }
}

let filteredBooks = []

function filterBooks(year) {
  filteredBooks = books.filter(book => book.releaseYear >= year)
  return filteredBooks.sort(sortByYear)
}


// console.log(sortByYear(books[2], books[1]))
// console.log(filterBooks(2009))