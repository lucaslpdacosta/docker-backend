const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const apiRoutes = require('./routes/routes');

app.use('/api', apiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server rodando na porta 3000');
});