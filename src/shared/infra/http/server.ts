import express from 'express';
import 'express-async-errors';
import routes from './routes';

import '../typeorm';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('server started on port 3333');
});