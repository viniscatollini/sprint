import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Seja bem-vindo ao site do Colégio Visconde de Sabugosa!');
});

app.get('/status', (req, res) => {
  res.json({ status: 'online', aprendizado: 'Sempre' });
});

app.get('/escola', (req, res) => {
  res.json({ nome: 'Colégio Visconde de Sabugosa', cidade: 'Recife', tipoinstitucional: 'Privado' });
});

app.get('/cursos', (req, res) => {
  res.json({ cursos: [{ id: 1, nome: 'Matemática' }, { id: 2, nome: 'Português' }, { id: 3, nome: 'Ciências' }] });
});

app.get('/professor', (req, res) => {
  res.json({ professores: [{ nome: 'Professor Sabugosa', disciplina: 'Matemática' }, { nome: 'Professora Silva', disciplina: 'Português' }, { nome: 'Professor Costa', disciplina: 'Ciências' }] });
});

app.get('/ajuda', (req, res) => {
  res.send('Rotas do sistema: / (Página Inicial), /status (Status do sistema), /escola (Informações da escola), /cursos (Lista de cursos), /professor (Lista de professores)');
});

app.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));