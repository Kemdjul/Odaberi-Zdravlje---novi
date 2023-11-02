import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "odaberizdravlje"
});

app.get("/proizvodi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const q = "SELECT * FROM proizvodi";
    db.query((q), (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/proizvodi/:tag", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const q = `SELECT * FROM proizvodi WHERE tag = '${req.params.tag}'`;
    
    db.query((q), (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.post("/pretplaceni-mail", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const q = `INSERT INTO pretplaceni-mailovi ('email') VALUES ('${req.params.email}')`;

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json("Email added successfully");
    })
});

app.get("/korisnik/:username", (req, res) => {
    res.header("Acces-Control-Allow-Origin", "*");
    const q = `SELECT * FROM korisnici WHERE username = '${req.params.username}'`;

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.use(express.json());
app.use(cors());

app.listen(3300, () => {
    console.log("Connected to backend");
});

