const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(`${__dirname}/dist/ti4-rules-reference`));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
