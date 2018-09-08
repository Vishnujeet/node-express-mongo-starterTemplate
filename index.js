import express from 'express'
import routes from './src/routes/routes'

const app=express()
const PORT=3000;

routes(app)

app.get('/',(req,res) =>
    res.send(`node is running : Port ${PORT}`)
)

app.listen(PORT,() =>
    console.log(`server is runing on port ${PORT}`)
)