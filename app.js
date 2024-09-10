function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" que servirá como container para os resultados.
  let section = document.getElementById("resultados-pesquisa");
    // Exibe no console o elemento selecionado para fins de depuração.
    console.log(section);

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  console.log(campoPesquisa);


    if(campoPesquisa == ""){
      section.innerHTML = "Nenhum resultado encontrado. Você precisa digitar um nome" 
      return
    }
  
  campoPesquisa = campoPesquisa.toLowerCase()
  // Inicializa uma string vazia para armazenar o HTML dos resultados.
  let resultados = "";
  // interpreta as informações contidas na descrição e no titulo como caractéres minúsculos, e armazena em variáveis
  let descricao = "";
  let titulo = "";
  let tag = "";
    // Itera sobre cada elemento (dado) do array 'dados'.
    for (let dado of dados) {
      descricao = dado.descricao.toLowerCase()
      titulo = dado.titulo.toLowerCase()
      tag = dado.tag
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)){
        console.log(dado.titulo.includes("campoPesquisa"))
         // Constrói o HTML para cada resultado, utilizando template literals para facilitar a criação de strings de HTML dinâmicas.
         resultados += `
            <div class="item-resultado">
              <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Acesse a wiki</a>
            </div>`;  
          }
          if(!resultados){
            resultados = "<p>Nenhum resultado encontrado</p>"
          }
        }
// Atribui o HTML construído ao conteúdo interno (innerHTML) da seção de resultados, substituindo o conteúdo anterior.  
section.innerHTML = resultados;
}