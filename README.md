#### Deployment: *Work In Progress* Currently, the only way to view the page is to do the following:
>- On the command line: 
  >>- run `npm i`
  >>- run `npm start`

# Local-Library 

### Overview

> This website will be capable of managing items being borrowed and returned, as well as their borrowers as profiles. Currently, it's setup to mimic a library service handling books and their borrowers. This template can handle other data sets of this nature including DVD rental (Redbox), vehicle rental, entertainment/recreational rentals (bowling, sports, go carts, high-adventure), and any other rental-based sales model. 

### Home Page - Overall Stats

> This page features 4 unique sections. 
>> **General Stats** gives an overview of total books, total books currently borrowed, and total accounts registered.                                       
>> **Most Common Genres** presents a list of the genres most borrowed by users.                                                                            
>> **Most Popular Books** presents a list of the books most borrowed by users.                                                                             
>> **Most Popular Authors** presents a list of the authors whose books are borrowed most by users.
>
> These stats are crucial to the success of other funcitons within the site.

### Second Page - Stats By Book

> This page has 1 seciton immediately available. A list of books. When you select/tap/click a book, 2 additional sections will then appear.
>> The **Book Object** section will appear at the top right of your desktop or below the books list on mobile. This will contain the title, author, and genre of the selected book. The section below that contains a list of users and their 'returned'/'not returned' status to the right of their names.
>
> This is performed for each book the user selects.

### Third Page - Stats By Account

> This page has 1 seciton immediately available. A list of users. When you select/tap/click a user, 2 additional sections will then appear.
>> The **User Object** section will appear at the top right of your desktop or below the users list on mobile. This will contain the name, age, company, email, account creation date, and a formatted string stating the number of times a user has borrowed from the library. The section below that contains a list of books currently in their possession.
>
> This is performed for each 'user' the user selects.

See Kanban Board for implementation updates.
