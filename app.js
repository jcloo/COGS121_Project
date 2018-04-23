
/**
 * Module dependencies.
 */

var twitter = require('twitter');
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var login = require('./routes/login');
var profile = require('./routes/profile');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//setup for twitter
var twitter = new twitter({
  consumer_key: 'Vfcl0zUNc4HJ5yYrV3O70c9Jo',
  consumer_secret: 'QhO2sYilcH0YnnzM6D2rGvpQU34WUNZN2dDiMQuzHkihBjr5dl',
  access_token_key: '988196835733852161-7KII29b1RBoeRJ3yeEfbg88YTIeKsOo',
  access_token_secret: '8yq12zjcn83xQMcee8VA1aJgxHy2q3hZZVDx9KDBGQbqi'
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/login', login.view);
app.get('/profile', profile.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
