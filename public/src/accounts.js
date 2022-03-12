// Working function
function findAccountById(accounts, id) {
  for (let index in accounts) {
    if (accounts[index].id === id){
      return accounts[index];
    }
  }
}

// Working function
function sortAccountsByLastName(accounts) {
// I'm going to try a comparison function to get through the array
  const compareLast = function(a, b) {
// a should come before b in the sorted order
    if(a.name.last < b.name.last) {
      return -1;
// a should come after b in the sorted order
    } else if(a.name.last > b.name.last) {
      return 1;
// a and b are the same
    } else {
      return 0;
    }
  }
  return accounts.sort(compareLast);
}

// Working Function
function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for (let index in books){
    for (let i in books[index].borrows){
      if (books[index].borrows[i].id === account.id){
        result += 1;
      }
    }
  }
  return result;
}

// Working function
function getBooksPossessedByAccount(account, books, authors) {
  let checkedOutByUser = [];
  for (let index in books) {
    if(!books[index].borrows[0].returned && books[index].borrows[0].id === account.id) {
      checkedOutByUser.push(books[index]);
    } 
  }
//   I need a way to add the 'author' objects to each element in checkedOutByUser, everything works up until this point. 
  checkedOutByUser.forEach((book) => {
    let author = authors.find((writer) => {
      if (book.authorId === writer.id) {
      return writer;
      }
    })
    book.author = author
  });
  return checkedOutByUser;
}  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};