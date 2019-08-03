'use strict';

const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors);

const PORT = process.env.PORT || 8080 ;

app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log('Web Server up on port', PORT);
});
