import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get('/', (req, res) => {
  res.send('Adios Mundo Cruel!');
});

 app.get('/api', (req, res) => {
  res.send({ message: 'Entraste a la Ruta API ... ' });
  });


  
// un post es para cambiar o agregar datos en el servidor, por ejemplo crear un usuario
app.post('/api', (req, res) => {
  //Todo lo que tengo que hacer para crear el usuario
  res.send('Usuario Creado!');});
 