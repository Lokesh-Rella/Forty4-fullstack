// Use better-sqlite3 instead of sqlite3
const Database = require("better-sqlite3");

// Open or create the database file
const db = new Database("users.db");

// Create table if it doesn’t exist
db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        role TEXT NOT NULL
    )
`).run();

console.log("✅ Connected to SQLite database.");

module.exports = db;
