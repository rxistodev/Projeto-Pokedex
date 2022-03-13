/*
        Elaborar o Passo a Passo do Código, antes de codar!

    1 - Quando clicar em cada cardzinho do lado da direita, aparecer o card grande do respectivo pokemon clicado, escondendo o anterior!

    2- Para isso vou precisar trabalhar com 2 elementos, Listagem e o cartao do pokémon.

        exemplo de criação de variavel - const nome = "Rennan"

        exemplo de como escrever a variavel na web - console.log(nome)    

    3- Tem que fazer evento de clique feito pelo usuário para que esse clique execute uma ação!

    passo a passo do clique:
    
    - remover a 'classe aberto' e trocar essa classe para o pokemon clicado
    
    - pegar o id do pokemon para pode colocar no código para que seja lido quando clicar

    - remover a classe ativa antiga, e marca o pokemon selecionado, transformando este como classe ativa.


*/

//  Preciso criar 2 variáveis para poder linkar a lista e os cards grandes.
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
// criando evento para quando o usuário efetuar o clique na listagem.
    pokemon.addEventListener('click', () =>{
        //Remover a classe aberto só do cartão que está aberto.
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idpokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemnonParaAbrir = 'cartao-' + idpokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemnonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        /*agora vou fazer a parte do clique em vermelho pra sumir e aparecer so em qual clicar.*/

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')


        const pokemonSelecionadoNaListagem = document.getElementById(idpokemonSelecionado)
        
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})