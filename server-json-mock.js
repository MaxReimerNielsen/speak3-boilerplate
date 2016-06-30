const express = require('express');

module.exports = (PORT) => {
  const apiServer = express();

  apiServer.get('/api/book-list', (request, response) => {
    const output = [
      { author: 'Steven Erikson', title: 'The Malazan Book of the Fallen' },
      { author: 'George R.R. Martin', title: 'A Game of Thrones' },
      { author: 'Brandon Sanderson', title: 'The Way of Kings' },
      { author: 'J.R.R. Tolkien', title: 'Lord of the Rings' },
      { author: 'Joe Abercrombie', title: 'The First Law' },
    ];

    response.send(JSON.stringify(output));
  });

  apiServer.listen(PORT, 'localhost');
};
