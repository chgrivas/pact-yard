const app = require('express')();
const bodyParser = require('body-parser')
const cors = require('cors');
const router = require('./router');
const port = 3001;

const init = () => {
  app.use(cors());
  app.use(bodyParser.json())
  app.use(router);
  return app.listen(port, () => console.log(`Provider API listening on port ${port}...`));
};

init();