## Library- Book Borrowing Program CLI

Command line program - fake library

`run node cli.js to start`

### Usage and commands when logged out

```
help
exit
signup
login
search
```

### Usage and commands when logged in

```
help
search
exit
login
signup
borrow - does not work yet
return - does not work yet
list (list of books borrowed )
change_name - does not work yet
remove_account - does not work yet
logout
```

# Example

```
node cli.js

Welcome to Cats Library of Tech Books!.

What would you like to do?
Get the list of available commands by typing 'help'.
--
help
--
help
search
exit
login
signup
What would you like to do?
Get the list of available commands by typing 'help'.
--
signup
--
Input your name:
Jane
Input new password:
******
Input new password:
******

      Password matches.
      Your account is now created.
      your ID is 76561
      Store your ID number in a safe place.
      Inout 'login' to login into your account.

What would you like to do?
Get the list of available commands by typing 'help'.
--
login
--
Type your ID number to login:
76561
Account found
Type password: ******

Welcome, Jane

What would you like to do?
Get the list of available commands by typing 'help'.
--
search
--
Search for a book to borrow:
--
java
--

[1] Eloquent JavaScript, Second Edition by Marijn Haverbeke (2014)
    Books in library: 1
    Available for borrowing: 0
    ....
[2] Learning JavaScript Design Patterns by Addy Osmani (2012)
    Books in library: 1
    Available for borrowing: 0
    ....
[3] Speaking JavaScript by Axel Rauschmayer (2014)
    Books in library: 1
    Available for borrowing: 1
    ....
[4] Programming JavaScript Applications by Eric Elliott (2014)
    Books in library: 1
    Available for borrowing: 0
    ....
[0] CANCEL

pick a book [1...4 / 0]:
--
3
--
  Speaking JavaScript by Axel Rauschmayer (2014)
    Books in library: 1
    Available for borrowing: 1
    ....

Would you like to borrow this book? [y/n]:
y

  Speaking JavaScript by Axel Rauschmayer (2014)
    Books in library: 1
    Available for borrowing: 1
    ....

Thank you for Borrowing.
Remember to return in 2 weeks

What would you like to do?
Get the list of available commands by typing 'help'.
--
help
--
help
search
exit
login
signup
borrow
return
list
change_name
remove_account
logout
What would you like to do?
Get the list of available commands by typing 'help'.
--
list
--
{
  loggedIn: true,
  books: [
    {
      isbn: '0679722769',
      title: 'Ulysses',
      author: 'James Joyce',
      publisher: 'Sylvia Beach',
      pages: 730,
      description: "Ulysses is a modernist novel by Irish writer James Joyce. It was first serialised in parts in the American journal The Little Review from March 1918 to December 1920 and then published in its entirety in Paris by Sylvia Beach on 2 February 1922, Joyce's 40th birthday.",
      copies: [Array],
      published: 1922-02-02T00:00:00.000Z
    }


}
What would you like to do?
Get the list of available commands by typing 'help'.
--
logout
--
What would you like to do?
Get the list of available commands by typing 'help'.
--
exit
```
