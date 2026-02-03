const inputItem = document.getElementById('box'); //Criei uma variável que puxa o elemento que é descrito no input
const btnAdd = document.querySelector('button'); //Variável que puxa o elemento button
const list = document.getElementById('itens-list'); //Varável que puxa o elemento da Lista
const hasTextRegex = /\d+/g; //Variável para adicionar somente letras ou palavras

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

  const newItem = document.createElement('li');
  newItem.innerHTML = `
  <div class="">
    <input type="checkbox">
    <span>${valorFormatado}</span>
  </div>
  <button class="delete-button">
    <img src="./icones/icon-delete.svg" alt="Icone para deletar produto">
  </button>
`;
  list.appendChild(newItem);
  newItem.classList.add('li');

  inputItem.value = '';

  console.log(newItem.value);
});
