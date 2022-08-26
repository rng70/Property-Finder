const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
connectDB();
app.use(express.json({ extended: false }));
app.use(cors())
app.get('/', (req, res) => res.send('API Running Successfully'));

/**
 *  Define routes 
 */
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/addProp', require('./routes/api/addProp'));
app.use('/api/info', require('./routes/api/info'));
app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/search', require('./routes/api/search'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

