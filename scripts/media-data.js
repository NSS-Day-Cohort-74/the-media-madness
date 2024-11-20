const database = {
    books: [
        { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
        { id: 2, title: "Dune", author: "Frank Herbert", year: 1965 }
    ],
    movies: [
        { id: 1, title: "The Matrix", director: "Wachowskis", year: 1999 },
        { id: 2, title: "Inception", director: "Christopher Nolan", year: 2010 }
    ],
    games: [
        { id: 1, title: "Minecraft", developer: "Mojang", year: 2011 },
        { id: 2, title: "Tetris", developer: "Alexey Pajitnov", year: 1984 }
    ]
}

export const booksData = () => {
    return database.books.map(book => ({...book}))
}

export const moviesData = () => {
    return database.movies.map(movie => ({...movie}))
}

export const gamesData = () => {
    return database.games.map(game => ({...game}))
}
