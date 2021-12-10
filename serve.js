const express = require('express')
const app = express()
const port = process.env.PORT || 4060

app.use('express.json()')




app.listen(port, () => {
    console.log('listening on available port')
})