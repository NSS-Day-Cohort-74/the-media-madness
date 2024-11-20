import { moviesData } from "./media-data.js"


export const getMoviesHTML = () => {
    const movies = moviesData()

    let html = '<section class="row">'

    for (const movie of movies) {
        html += `
            <div class="card movie">
                <div class="card-front">
                    ${movie.title} by ${movie.director}
                </div>
                <div class="card-back">
                    published in ${movie.year}
                </div>
            </div>
        `
    }
    html += "</section>"

    return html
}
