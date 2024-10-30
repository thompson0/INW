import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';
import artista from './Models/Artista.js';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (erro) =>{
    console.error('Erro ao conectar no MongoDb', erro)
})

conexao.once('open',() => {
    console.log('Conectado ao MongoDb')
})

const usuarios =[
    {
        id: 1,
        nome:"Yuri",
    },
    {
        id:2,
        nome:"Garro"
    }
]

app.get("/curinthia", (req,res)=>{
    res.send(usuarios)
})

app.get("/artistas", async (req,res)=>{
    const listaArtistas = await artista.find({});
    res.status(200).json(listaArtistas);
})

app.get('/artistas/:id', async (req,res)=>{
    const artista = await artista.findById(req.params.id);
    res.status(200).json(artista);
})

app.listen(3000, ()=> {
    console.log('Servidor Conectado')
})

