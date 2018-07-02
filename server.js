var app = require('./app').init(process.env.PORT || 8080);

var locals = {
        title: 		 'Graphics Land',
        description: 'All graphics, all the time',
        author: 	 'Harvey Virk',
        _layoutFile: true
    };

app.get('/', function(req,res){
    locals.date = new Date().toLocaleDateString();
    res.render('home.ejs', locals);
});

app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});
