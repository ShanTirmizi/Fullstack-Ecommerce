const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 3001;

connectDB();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/product', require('./routes/productsRoutes'));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
