const express = require('express');
const path = require('path');

const app = express();
app.use('/bootstrap',express.static(__dirname+'/node_modules/bootstrap/dist/css/'))
//load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');


app.get('/',(req,res)=>{
    let articles = [
        {
            id:1,
            title: 'Article one',
            author: 'Adrian D',
            body: 'this is article one'
        },
        {
            id:2,
            title: 'Article dos',
            author: 'D G',
            body: 'this is article two'
        },
        {
            id:3,
            title: 'Article tres',
            author: 'D A',
            body: 'this is article three'
        }
    ];
    res.render('index',{
       title:'Prueba',
       articles:articles
    });
});


//add route
app.get('/articles/add',(req,res)=>{
    res.render('add_articles',{
        title:'Add articles'
    });
 });


app.listen(3000,()=>{
    console.log('Server started on port 3000')
});