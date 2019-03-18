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
// endregion
