const express = require("express");
const router = express.Router();
const db = require("../database");

// ✅ GET all users
router.get("/", (req, res) => {
    try {
        const rows = db.prepare("SELECT * FROM users").all();
        res.json({ message: "success", data: rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ GET user by ID
router.get("/:id", (req, res) => {
    try {
        const row = db.prepare("SELECT * FROM users WHERE id = ?").get(req.params.id);
        res.json({ message: "success", data: row });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ CREATE new user
// ✅ CREATE new user
router.post("/", (req, res) => {
    try {
        const { name, email, role } = req.body;
        if (!name || !email || !role) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const stmt = db.prepare("INSERT INTO users (name, email, role) VALUES (?, ?, ?)");
        const result = stmt.run(name, email, role);

        res.json({
            message: "User created",
            data: { id: result.lastInsertRowid, name, email, role },
        });
    } catch (err) {
        if (err.message.includes("UNIQUE constraint failed: users.email")) {
            return res.status(409).json({ error: "Email already exists" });
        }
        res.status(500).json({ error: err.message });
    }
});

// ✅ UPDATE user
router.put("/:id", (req, res) => {
    try {
        const { name, email, role } = req.body;
        const stmt = db.prepare("UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?");
        const result = stmt.run(name, email, role, req.params.id);

        res.json({ message: "User updated", changes: result.changes });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ DELETE user
router.delete("/:id", (req, res) => {
    try {
        const stmt = db.prepare("DELETE FROM users WHERE id = ?");
        const result = stmt.run(req.params.id);

        res.json({ message: "User deleted", changes: result.changes });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
