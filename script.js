    const API_URL = 'https://sistema-almoxarifado-j3bo.onrender.com';

    const carregarProdutos = async () =>{
        try{
            const res = await fetch(`${API_URL}/produto`)
            const produtos = await res.json()

        const conteiner = document.getElementById('listaProdutos')
        conteiner.innerHTML = ""

        produtos.forEach(p => {  
            const card = document.createElement('div')
            card.className = 'card-produto'

            card.innerHTML = `
            <h3>${p.nome}</h3>
            <p>Preço: R$ ${p.preco}</p>
            <p>Categoria: ${p.categoria}</p>     
            <p>Quantidade: ${p.emEstoque}</p>

            <button id="Editar" onclick ="editarProduto('${p._id}', '${p.nome}', ${p.preco}, ${p.emEstoque})">Editar</button>
            <button id="Editar" onclick="deletarProduto('${p._id}')">
            Excluir
            </button>
            `;

            conteiner.appendChild(card)
        });
            } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }};

    document.getElementById('formProduto').addEventListener('submit', async (e)=> {
        e.preventDefault();

        const novoProduto ={
            nome : document.getElementById('nome').value,
            preco : Number(document.getElementById('preco').value),
            categoria : document.getElementById('categoria').value,
            emEstoque : Number(document.getElementById('quantidade').value)
        }

        try{
            await fetch(`${API_URL}/produto`,{
                method:'POST',
                headers:{ 'Content-Type': 'application/json'},
                body:JSON.stringify(novoProduto)
            })
        }catch(error){
            console.log("Erro ao enviar o novo produto", error)
        }
        e.target.reset();
        carregarProdutos();  
        })

        const editarProduto = async (id, nomeAtual, preçoAtual, quantidadeAtual) =>{
            const novoNome = prompt("Novo nome do produto:", nomeAtual)
            const novoPreco = prompt("Novo preço do produto:", preçoAtual)
            const novaQuantidade = prompt("Nova quantidade do produto:", quantidadeAtual)

        if(!novoNome || !novoPreco || !novaQuantidade){
            alert("Preencha todos os campos para prosseguir")
            return;
        }else if(novoNome && novoPreco && novaQuantidade){
            const dadosAtualizados = {
                nome : novoNome,
                preco : Number(novoPreco),
                emEstoque : novaQuantidade
            }
            try{
            await fetch(`${API_URL}/produto/${id}`, {
                method:'PUT',
                headers:{ 'Content-Type': 'application/json'},
                body:JSON.stringify(dadosAtualizados),
            })

            carregarProdutos()

        }catch(error){
            console.error("Erro ao atualizar o produto:", error);
        }
        }}

        const deletarProduto = async (id)=>{
            if(confirm("Deseja realmente apagar")){
                try{
                await fetch(`${API_URL}/produto/${id}`,{
                    method:'DELETE'
                });

                carregarProdutos()
            }catch(error){
                console.error("Erro ao deletar o produto:", error);
            }}
    }
carregarProdutos(); 