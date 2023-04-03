const ingressoDescricao = document.querySelector('.ingresso__dados');

// pega os valores armazenados no localStorage
const name = localStorage.getItem('nome');
const ticketType = localStorage.getItem('ticketType');
const birthdate = localStorage.getItem('dataNascimento');

// cria o conteúdo dinâmico do elemento .ingresso__informacoes
const descricaoHtml = `
  <h3>${name}</h3>
  <p>Ingresso ${ticketType}</p>
  <p>Data: 11/03</p>
  <p>Local: São Paulo-SP</p>
`;

// insere o conteúdo dinâmico no elemento .ingresso__informacoes
ingressoDescricao.querySelector('.ingresso__informacoes').innerHTML = descricaoHtml;