// Load the database
const sqlite3 = require('better-sqlite3')
const db = new sqlite3('models/database.db', { verbose: console.log })

// region Getters
exports.getReviewsByRestaurantID = async function(id) {
    // prep statement
    let stmnt = db.prepare('SELECT * FROM Reviews WHERE restaurant=?')
    let result = {}

    //try to run it
    try {
        result = await stmnt.all(id)
    } catch (e) {
        // print sql error
        console.error(e)
        return null
    }

    //return if it worked
    return result
}

exports.getReviewByID = async function(id) {
    // prep statement
    let stmnt = db.prepare('SELECT * FROM Reviews WHERE id=?')
    let result = {}

    //try to run it
    try {
        result = await stmnt.get(id)
    } catch (e) {
        // print sql error
        console.error(e)
        return null
    }

    //return if it worked
    return result
}
// endregion

// region Setters
exports.getReviewByID = async function(body) {
    let rest_id = body.restaurant
    let author = body.author
    let rating = body.rating
    let title = body.title
    let rev_body = body.body
    let created = new Date()

    let stmnt = db.prepare('INSERT INTO Reviews(restaurant, author, rating, title, body, created) VALUES (?, ?, ?, ?, ?, ?)')

    let info
    try {
        info = stmnt.run(rest_id, author, rating, title, rev_body, created)
    } catch (e) {
        console.log(e.stack)
        return null
    }

    return info
}

// endregion
