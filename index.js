const express = require('express');
const app = express();

const port = 3012;
const hostname = '127.0.0.1';

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

require('./routes/company')(app);
require('./routes/employee')(app);
require('./routes/team')(app);
require("./routes/teamMembers")(app)
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  