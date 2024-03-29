const express = require('express');
const bodyParser = require('body-parser');
const bd = require('./bd');

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('<h1> App Online! </h1>');
});

app.get('/alunos', (req, res) => {
    res.json(bd.getA());
});

app.post('/alunos', (req, res) => {
    bd.addAl(req.body);
    res.send('Aluno adicionado com sucesso!');
});

app.get('/alunos/:id', (req, res) => {
    const idAluno = req.params.id;
    res.json(bd.getAlunoPorId(idAluno));
})

app.get('/professores', (req, res) => {
    res.json(bd.getP());
});

app.post('/professores', (req, res) => {
    bd.addPr(req.body);
    res.send('Professor adicionado com sucesso!');
});

app.get('/professores/:id', (req, res) => {
    const idProfessor = req.params.id;
    res.json(bd.getProfessorPorId(idProfessor));
})

app.listen(3000, () => console.log('Servidor online na porta 3000!'));

// GET /alunos -> retornar uma lista de alunos
// POST /alunos -> adicionar um aluno à lista.

//const idAluno = req.params.id;

//getAlunoPorId (id) {};