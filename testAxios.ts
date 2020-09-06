//import statements
import express from 'express'
import { httpService } from './services/httpService'
// import axios from 'axios'


//create express app
const app = express()

//parse json
app.use(express.json())

// get random cat facts from the endpoint specified in httpservice config
app.get('/', (req, res) => {
    let http = new httpService({
        baseURL: 'https://cat-fact.herokuapp.com/',
        url: 'facts/random',

    })
    http.getTestApi().then(response => {
        console.log(response.status + " " + response.statusText)
        console.log(response.data)
        res.send(response.data)
    }).catch(err => {
        res.send(err)
    })
})

//create new user to the endpoint specified in httpservice config
app.post('/', (req, res) => {
    let http = new httpService({
        baseURL: 'https://reqres.in/api/',
        url: 'users',
        data: req.body
    })
    http.postTestApi().then(response => {
        console.log(response.status + " " + response.statusText)
        console.log(response.data)
        res.send(response.data)
    }).catch(err => {
        res.send(err)
    })
})


// app.post('/discord/webhook', (req, res) => {
//     console.log(JSON.stringify(req.body) + " " + req.ip)
//     axios.post(discord_url_from_env_variable, req.body)
//         .then(discordRes => {
//             if (discordRes.status === 204) {
//                 res.send("HTTP post to discord successful!")
//                 console.log("HTTP post to discord successful!")
//             }
//         }).catch(err => {
//             console.error("ERROR WHILE POSTING TO DISCORD! Error message: " + err)
//             res.send(err)
//         })
// })

//listen to port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000")
})