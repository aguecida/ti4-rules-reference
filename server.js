require('dotenv').config();

const express = require('express');
var mongo = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 5000;
var db;

app.use(express.static(`${__dirname}/dist/ti4-rules-reference`));
app.use(express.text());

app.post('/submit-feedback', (req, res) => {
    const document = { input: req.body, date: new Date() };

    db.collection('feedback').insertOne(document, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }

        res.status(200).send();
    });
});

mongo.connect(process.env.MONGO_DB, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.error(err);
    }

    db = client.db();

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});
