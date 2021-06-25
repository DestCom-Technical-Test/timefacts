const { response } = require('express')
const axios = require('axios');
const express = require('express')
const app = express()

app.listen(5555, () => {
    console.log('Serveur à lécoute')
})

app.get('/api/:date/:mois', (req,res) => {
    const date = parseInt(req.params.date);
    const mois = parseInt(req.params.mois);
    var test = ''
    let url = 'http://www.numbersapi.com/' + String(date) + '/' + String(mois) + '/date'
    axios.get(url)
    .then(function (response){
      res.send(response.data)
    })
    .catch(function (error){
      console.log(error)
      res.send('Erreur')
    })
})