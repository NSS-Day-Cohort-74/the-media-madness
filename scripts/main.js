// Generate the HTML for books, games, and movies

// 1. Import getBooksHTML() function from books.js module
import { getBooksHTML } from "./books.js"
import { getGamesHTML } from "./games.js"
import { getMoviesHTML } from "./movies.js"


// 2. Invoke getBooksHTML()
const booksHTML = getBooksHTML()
const movieHTML = getMoviesHTML()
const gameHTML = getGamesHTML()

// 3. Get a reference to the #app DOM element
const domElementToUpdate = document.getElementById("app")

document.addEventListener(
    "click",
    (event) => {
        if (event.target.classList.contains("card-front")) {
            const parentCard = event.target.closest(".card")
            parentCard.classList.toggle("flipped")
        }
    }
)

// 4. Assign the HTML as the value of the DOM element
domElementToUpdate.innerHTML = `
    ${booksHTML}
    ${movieHTML}
    ${gameHTML}
`


// BONUS: Make the cards flip when clicked