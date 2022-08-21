const express = require('express')
const connectDB = require('./utils/mongodb')

const port = process.env.PORT || 5000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    
    const server = express()
    connectDB()

    server.use(cors());
    server.use(express.json());
    

    server.get('/', (req, res) => res.send('API Running Successfully'));
    

    server.use('/api/users', require('./routes/api/users'));
    server.use('/api/auth', require('./routes/api/auth'));
    server.use('/api/addProp', require('./routes/api/addProp'));
    server.use('/api/postInfo', require('./routes/api/postInfo'));
    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})