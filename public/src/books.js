function findAuthorById(authors, id) {
//   for loop will pull the correct author object
  for (let index in authors) {
    if (authors[index].id === id){
      return authors[index];
    }
  }
}

function findBookById(books, id) {
//   for loop will pull the correct author object
  for (let index in books) {
    if (books[index].id === id){
      return books[index];
    }
  }
}

// Helper function 
function booksUnavailable(books) {
  return books.filter((book) => 
   book.borrows.some((borrow) => borrow.returned === false)
  );
}

// Working function (implemented helper function here)
function partitionBooksByBorrowedStatus(books) {
  var unavailable = booksUnavailable(books);
  let available = books.filter((book) => 
    book.borrows.every((borrow) => 
      borrow.returned === true
    )
  );
  return [[...unavailable], [...available]];
}

 
function getBorrowersForBook(book, accounts) { 
//   This code uses a simiar concept to that of "getBooksPossessedByAccount", although I need to find a way to limit arrays in order to make it work.
  let result = [];
//   looping through accounts
    for (let i in accounts) {
//   looping though the book.borrows array with the given accounts indexed, that way I append the current 'returned' status to the indexed accounts object before pushing it to the result array
      for (let j in book.borrows) {
        if (accounts[i].id === book.borrows[j].id) {
          accounts[i].returned = book.borrows[j].returned
          result.push(accounts[i]);
        }
      }
    }
  
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
