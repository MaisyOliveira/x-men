/* 
  o que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que esta selecionado

    
    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
      Passo 1 - pegar os personagens no JS para poder verificar quando o usuario passar o mouse em cima de um deles
        passo 2 - adicionar uma classe selecionado que o usuário passar o cursor do mouse

        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção deles

    Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
      passo 1 - pegar o elemento do personagemgrande para adicinar as informções nele
      passo 2 - alterar imagem  do personagem grande
      passo 3 - alterar o nome do personagem grande
      passo 4 - alterar a descrição do personagem grande 
  */

    // OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//Passo 1 - pegar os personagens no JS para poder verificar quando o usuario passar o mouse em cima de um deles

    const personagens = document.querySelectorAll('.personagem');

    // passo 2 - adicionar classe personagem selecionado no personagem que o usuário passar o cursor do mouse
    personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

      if(window.innerWidth < 450) {
        window.scroll({top: 0, behavior: 'smooth'});
      }

    //passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção deles
    removerSelecaoDoPersonagem();
    
    personagem.classList.add('selecionado');

    //Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
 
  //passo 1 - pegar o elemento do personagemgrande para adicinar as informções nele
    alterarImagemPersonagemSelecionado(personagem);

    // passo 3 - alterar nome do personagem grande
    alterarNomePersonagemSelecionado(personagem);
    
    //passo 4 - alterar a descrição do personagem grande 
    alterarDescricaoPersonagem(personagem);
})
})

function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById('descricao-personagem');
  descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById('nome-personagem');
  nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande');
  //passo 2 - alterar imagem  do personagem grande
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado');
  personagemSelecionado.classList.remove('selecionado');
}
