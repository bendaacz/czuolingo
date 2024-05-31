const express = require('express');
const db = require('./connect.js');
const cors = require('cors');
const app = express();
const PORT = 5174;
app.use(cors());
app.use(express.json());


app.get("/prislovi", (req, res) => {
    db.query("SELECT id, first_part, last_part FROM proverbs ORDER BY RAND();", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(result);
        }
    });
});

app.listen(PORT, () => {
    console.log(`bezim na ${PORT}`);
});
