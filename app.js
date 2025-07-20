
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API AntiqValor online');
});

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(PORT, () => console.log('API rodando na porta ' + PORT)))
  .catch(err => console.error('Erro ao conectar no MongoDB:', err));
