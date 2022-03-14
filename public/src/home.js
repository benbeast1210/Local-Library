// Working function
function getTotalBooksCount(books) {
  let result = 0
  for (let index in books) {
    if (true) {
      result++
    }
  }
  return result;
}

// Working function
function getTotalAccountsCount(accounts) {
    let result = 0
  for (let index in accounts) {
    if (true) {
      result++
    }
  }
  return result;
}

// Working function
function getBooksBorrowedCount(books) {
  let checkedOut = [];
  let available = [];
// a for loop will determine the check out status of the book 
  for (let index in books) {
    if(!books[index].borrows[0].returned) {
      checkedOut.push(books[index]);
    } else if (books[index].borrows[0].returned){
      available.push(books[index]);
    }
  }
  return checkedOut.length
}

// Working function
function getMostCommonGenres(books) {
//   I'm going to start by making a genre counter, listing each genre and pushing their values to an array called 'genreArray' ***WORKS*** 
  let genreArray = [];
  for (let index in books) {
    if (!genreArray.includes(books[index].genre)) {
      genreArray.push(books[index].genre);
    }
  } 
//   Now I need to take the genreArray values and convert it to the 'result' array ***WORKS***
  let resultUncut = genreArray.reduce((total, genre) => {
    total.push({name: `${genre}`, count: 0})
    return total;
  }, []);
//   I'll write a for loop that will traverse 'books', and then I'll nest another loop within to check if the genre of the indexed book matches any of the elements in 'result', depending on the result the 'count' for that genre will be raised, or the function will proceed 
  for (let genre in books) {
    for (let index in resultUncut) {
      if (resultUncut[index].name === books[genre].genre) {
        resultUncut[index].count += 1
      }
    }
  }
  resultUncut.sort((genreA, genreB) => (genreA.count < genreB.count) ? 1 : -1)
//   The return statement will slice based on what the question asked
  return resultUncut.slice(0, 5);
}

// Working function
function getMostPopularBooks(books) {
//   This organizes the book titles into an array
  let popBooksArray = [];
  for (let index in books) {
    if (!popBooksArray.includes(books[index].title)) {
      popBooksArray.push(books[index].title);
    }
  } 
// Formatting the array into objects, as per the requirements
  let resultUncut = popBooksArray.reduce((total, title) => {
    total.push({name: `${title}`, count: 0})
    return total;
  }, []);
//   This loop will count the number of borrows, and mutate the corresponding 'count' variable within the 'resultUncut' array 
  for (let book in books) {
    for (let index in resultUncut) {
      if (resultUncut[index].name === books[index].title) {
        resultUncut[index].count = books[index].borrows.length;
      }
    }
  }
//   This sorting process ranks the titles, based on their borrows
  resultUncut.sort((titleA, titleB) => (titleA.count < titleB.count) ? 1 : -1)
//   The return statement will slice based on what the question asked
  return resultUncut.slice(0, 5);
}

// TODO
function getMostPopularAuthors(books, authors) {
//   This will format the author names and counts ***Works***
  let result = [];
  for (let index in authors) {
    if (!result.includes(authors[index.authorId])) {
      result.push({name :`${authors[index].name.first} ${authors[index].name.last}`, count: 0})
    }
  }
  result.forEach((element) => {
    let currentAuthor = authors.find((writer) => {
      if (`${writer.name.first} ${writer.name.last}` === element.name) {
        return writer;
      }
    })
    let writtenByAuthor = books.filter((book) => {
      if (currentAuthor.id === book.authorId) {
        element.count += book.borrows.length;
      }
    })
  });
//   This sorting process ranks the titles, based on their borrows
  result.sort((elemA, elemB) => (elemA.count < elemB.count) ? 1 : -1)
//   The return statement will slice based on what the question asked
  return result.slice(0, 5);
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
