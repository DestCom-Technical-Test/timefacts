const express = require('express')
const app = express()

app.listen(5555, () => {
    console.log('Serveur à lécoute')
  })

app.get('/parkings', (req,res) => {
    res.send("Liste des parkings")
})