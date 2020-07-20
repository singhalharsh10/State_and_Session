const express = require('express')
const expressSession = require('express-session')
const e = require('express')
const app = express()

app.set('view engine', 'hbs')


app.use(expressSession({
    resave: true, //saves the cookie on each client<-->communication
    saveUninitialized: true, //save cookie evn if nothng to track
    secret: 'some long random string here', //used to encrypt the cookie
    name: 'Myfirstcookie' //used to set name of cookie

}))

//makes statefull server but it will common to all users so it will be stateful to all users or server and not for specific user.Means it will record count not for secific user but for all ser
// let count = 0
app.get('/', (req, res) => {
    // count++;
    // it exists when we write express-session code above wla
    console.log(req.session)
    if (!req.session.visits)
        req.session.visits = 1
    else
        req.session.visits++
        // it will make client specific
        res.render('index', { count: req.session.visits })
})





app.listen(3000, () => {
    console.log("Server has started")
})