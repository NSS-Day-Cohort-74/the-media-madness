import { booksData } from "./media-data.js"


export const getBooksHTML = () => {
    const books = booksData()

    let html = '<section class="row">'

    for (const book of books) {
        html += `
            <div class="card book">
                <div class="card-front">
                    ${book.title} by ${book.author}
                </div>
                <div class="card-back">
                    published in ${book.year}
                </div>
            </div>
        `
    }
    html += "</section>"

    return html
}
