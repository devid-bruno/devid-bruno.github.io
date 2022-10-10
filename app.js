const express = require('express');
const app = express();
const connect = require('./database/database');
const question = require('./database/Question');
const Resposta = require('./database/Resposta');


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/", (req, res) => {
    question.findAll({ raw: true, order: [
        ['id', 'desc']
    ]}).then((questions) => {
       console.log(questions);
       res.render('index', {
           questions: questions
       });
    });
});

app.use(express.urlencoded({
    extended: true
}));

app.get("/perguntar", (req, res) => {
    res.render('perguntar');
});

app.get("/about", (req, res) => {
    
});

app.get('/gato', (req, res) => {
    res.render('gato');
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    question.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect('/');
    });
});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    question.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){
            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [['id', 'desc']]
            }).then(respostas => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                });
            })
        }else{
            res.redirect('/');
        }
    });
});

app.post("/responder", (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;

    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect('/pergunta/' + perguntaId);
    });
});


const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`App rodando! na porta ${port}`); });