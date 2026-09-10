import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const allowedOrigins = [
  'http://localhost:3000',                
  'https://seu-frontend.vercel.app'         
];

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Bloqueado pelo CORS'));
    }
  }
}));


const ConectarBD = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Banco de Dados conectado com sucesso!')
    } catch (Error){
        console.log('Erro ao conectar ao banco de dados', Error)
    }
}

ConectarBD()

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    emEstoque: {
        type: Number,
        required: true
    }
});

const Produto = mongoose.model('Produto', produtoSchema);

app.get('/produto', async (req,res) =>{
    try{
    const produtos = await Produto.find()
    res.json(produtos)
    }catch(error){
        res.status(500).json({mensagem:"Erro ao encontrar o produto"})
    }
})

app.post('/produto', async (req,res) => {
    try{
        const novoProduto = await Produto.create(req.body);
        res.status(201).json(novoProduto);
    } catch (error){
        res.status(400).json({mensagem: "Erro ao cadastrar produto", erro: error});
    }
})

app.put('/produto/:id', async (req,res) =>{
    try{
        const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(produtoAtualizado)
    }catch (error) {
        res.status(400).json({mensagem:"Erro ao atualizar o produto"})
    }
})

app.delete('/produto/:id', async (req,res) =>{
    try{
       await Produto.findByIdAndDelete(req.params.id);
       res.json({mensagem:"Produto deletado com sucesso!"})
    }catch(error){
        res.status(400).json({mensagem:"Erro ao deletar o produto"})
    }
})


app.listen(port,() =>{
    console.log('Servidor rodando')
});