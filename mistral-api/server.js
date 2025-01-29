import express from 'express'

const app = express()

const port = 3001

app.get('/', (req, res) => {

    res.status(200).json({ message: "Hello les dev " })
})

app.listen(port, () =>
    console.log(`Server is ruuning on http://localhost:${port}`)
)