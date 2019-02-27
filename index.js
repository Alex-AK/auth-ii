const express = require('express');

const server = express();

const port = 4000;
server.listen(port, () => {
  console.log('*** server running on 4000. ***');
});
