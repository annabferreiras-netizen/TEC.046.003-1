let produto = {
    nome,
    categoria,
    quantidade,
    preco

}
//Lista de Produtos
let produtos = [];
// Capturar o formulário
const formulario =
         document.getElementById("formProduto");
// Event Listener
formulario.addEventListener(
    "submit",
    cadastrarProduto
);
//Função de cadastrar produto
function cadastrarProduto(event) {
    event.preventDefault(); 
    //Captura dos dados do formulário
    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
     let quantidade = document.getElementById("quantidade").value;
     let preco = document.getElementById("preco").value;
     //Criação do objeto
     let produto = {
        nome,
        categoria,
        quantidade,
        preco
     }
     // Adicionar o produto na lista
     produtos.push(produto);
     // Rederizar dados na tabela
     const tabela =
     document.getElementById("tabelaProdutos");
     tabela.innerHTML="";
     produtos.forEach(
        function(produto,indice){
            tabela.innerHTML += `
            <tr>
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.preco}</td>
                <td><a href="#">Excluir</a></td>
            </tr>
            `
        }
     )
     formulario.reset();
}