import { gamesData } from "./media-data.js"


export const getGamesHTML = () => {
    const games = gamesData()

    let html = '<section class="row">'

    for (const game of games) {
        html += `
            <div class="card game">
                <div class="card-front">
                    ${game.title} by ${game.developer}
                </div>
                <div class="card-back">
                    published in ${game.year}
                </div>
            </div>
        `
    }
    html += "</section>"

    return html
}
