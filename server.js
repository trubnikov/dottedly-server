const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let models = [];

app.get('/models', (req, res) => {
    res.json(models);
});

app.post('/models', (req, res) => {
    const newModel = req.body;
    models.push(newModel);
    res.status(201).json(newModel);
});

app.put('/models/:id', (req, res) => {
    const { id } = req.params;
    const updatedModel = req.body;
    models[id] = updatedModel;
    res.json(updatedModel);
});

app.delete('/models/:id', (req, res) => {
    const { id } = req.params;
    models.splice(id, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
