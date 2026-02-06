const inputItem = document.getElementById('box'); //Criei uma variável que puxa o elemento que é descrito no input
const btnAdd = document.querySelector('button'); //Variável que puxa o elemento button
const list = document.querySelector('ul'); //Varável que puxa o elemento da Lista
const hasTextRegex = /\d+/g; //Variável para adicionar somente letras ou palavras
const listRemove = document.querySelectorAll('li');
const footer = document.getElementById('alert');
const itemRemove = document.getElementById('msg-remove');

inputItem.addEventListener('input', () => {
  //Adiciona um evento de clique no input para receber apenas palavras ou letras.
  inputItem.value = inputItem.value.replace(hasTextRegex, '');
});

btnAdd.addEventListener('click', (event) => {
  //Quando clica no button ele adiciona o texto dentro do input
  event.preventDefault();
  var valorFormatado = inputItem.value.trim();

  if (valorFormatado === '') {
    //Se o valorFormatado for sem espaço ou igual a nada e tentar adicionar o Alert entra em ação!
    alert('Digite algo antes de adicionar.');
    return;
  }

  //Cria elemento de li dentro da div itens-list
  const newItem = document.createElement('li'); //Cria elemento de Li

  //Juntar o newItem que é um elemento LI o innerHTML tem que ser igual da Li, para poder adicionar a lista
  newItem.innerHTML = `
  <div class="container">
    <input type="checkbox" id="item1" />
    <label for="item1"></label>
    <span>${valorFormatado}</span>
  </div>
  <button class="btn-remove">
    <img src="./icones/icon-delete.svg" alt="Icone para deletar produto">
  </button>
`;
  list.prepend(newItem); //Adiciona sempre ao primeiro elemento da lista

  const btnRemove = newItem.querySelector('.btn-remove'); //Remove o item novo da lista e deixa o estático
  btnRemove.addEventListener('click', () => {
    newItem.remove();

    itemRemove.style.display = 'flex';

    setTimeout(() => {
      itemRemove.style.display = 'none';
    }, 3000);
  });

  inputItem.value = ''; //Limpa sempre o valor do input após ele adicionar

  console.log(newItem.value);
});

//remover lista estatica
listRemove.forEach((botao) => {
  botao.addEventListener('click', () => {
    const li = botao.closest('li');
    li.remove(); // 1. Remove o item

    // 2. Aparece o alerta
    itemRemove.style.display = 'flex';

    // 3. Agendar o sumiço para daqui a 3 segundos
    setTimeout(() => {
      itemRemove.style.display = 'none';
    }, 3000);
  });
});
