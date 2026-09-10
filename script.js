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
                <h3>
                    ${p.nome} 
                    <button type="button" onclick="editarCampo('${p._id}', 'nome', '${p.nome}', '${p.nome}', ${p.preco}, '${p.categoria}', ${p.emEstoque})" title="Editar nome">✏️</button>
                </h3>
                <p>
                    Preço: R$ ${p.preco} 
                    <button type="button" onclick="editarCampo('${p._id}', 'preco', ${p.preco}, '${p.nome}', ${p.preco}, '${p.categoria}', ${p.emEstoque})" title="Editar preço">✏️</button>
                </p>
                <p>
                    Categoria: ${p.categoria} 
                    <button type="button" onclick="editarCampo('${p._id}', 'categoria', '${p.categoria}', '${p.nome}', ${p.preco}, '${p.categoria}', ${p.emEstoque})" title="Editar categoria">✏️</button>
                </p>     
                <p>
                    Quantidade: ${p.emEstoque} 
                    <button type="button" onclick="editarCampo('${p._id}', 'emEstoque', ${p.emEstoque}, '${p.nome}', ${p.preco}, '${p.categoria}', ${p.emEstoque})" title="Editar quantidade">✏️</button>
                </p>

                <button type="button" onclick="deletarProduto('${p._id}')">Excluir</button>
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

        const editarCampo = async (id, campo, valorAtual, nome, preco, categoria, emEstoque) => {
    const novoValor = prompt(`Editar ${campo}:`, valorAtual);

    if (novoValor === null || novoValor.trim() === "") return;

    const valorTratado = (campo === 'preco' || campo === 'emEstoque') ? Number(novoValor) : novoValor;

    const dadosAtualizados = {
        nome: campo === 'nome' ? valorTratado : nome,
        preco: campo === 'preco' ? valorTratado : preco,
        categoria: campo === 'categoria' ? valorTratado : categoria,
        emEstoque: campo === 'emEstoque' ? valorTratado : emEstoque
    };

    try {
        await fetch(`${API_URL}/produto/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosAtualizados),
        });

        carregarProdutos();
    } catch (error) {
        console.error(`Erro ao atualizar o campo ${campo}:`, error);
    }
};

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