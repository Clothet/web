var express = require('express'); //把express call來使用  
var app = express();
var path = require('path');
var sassMiddleware = require('node-sass-middleware')

app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'public/'),
    dest: path.join(__dirname, 'public/'),
    force: true,
    indentedSyntax:false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
//app.get 意思是 如果收到 '/'   
var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});

console.log(path.join(__dirname, 'public'))