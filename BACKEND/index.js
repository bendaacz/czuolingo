const express = require("express");
const db = require("./connect.js");
const cors = require("cors");
const app = express();
const PORT = 5174;
app.use(cors());
app.use(express.json());

app.get("/api/prislovi1", (req, res) => {
  db.query(
    "SELECT id, first_part, last_part, answer FROM prislovi1 ORDER BY RAND();",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json(result);
      }
    }
  );
});

app.get("/api/prislovi1_id", (req, res) => {
  db.query(
    "SELECT id FROM prislovi1 WHERE id=(SELECT max(id) FROM prislovi1);",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json(result);
      }
    }
  );
});

app.get("/api/hash/:hash", (req, res) => {
  require('dotenv').config();
  const crypto = require('crypto');
  const secret = (process.env.HASH);
  const update = (req.params.hash)
  const hash = crypto.createHash('sha256', secret)
    .update(update)
    .digest('hex');

  res.json({ hash });
});


app.listen(PORT, () => {
  console.log(`bezim na ${PORT}`);
});
