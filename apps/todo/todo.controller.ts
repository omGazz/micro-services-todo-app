import express from 'express';

const app = express();
const todos: { id: number, text: string, completed: boolean }[] = [];

app.use(express.json());

app.post('/todos', (req, res) => {
  const id = todos.length + 1;
  todos.push({ id, text: req.body.text, completed: false });
  res.json({ message: 'Todo added', todos });
});

app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === Number(req.params.id));
  if (todo) {
    todo.text = req.body.text;
    res.json({ message: 'Todo updated', todo });
  }
});

app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === Number(req.params.id));
  if (index > -1) {
    todos.splice(index, 1);
    res.json({ message: 'Todo deleted' });
  }
});

app.listen(3000, () => console.log('Todo Service listening on port 3000'));
