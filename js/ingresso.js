const formulario = document.querySelector('.grupo');

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // previne o comportamento padrão do form
  
  // pega os valores dos campos
   const name = document.querySelector('#nome').value;
   const email = document.querySelector('#email').value;
   const ticketType = document.querySelector('#ticketType').value;
   const birthdate = document.querySelector('#dataNascimento').value;

   // armazena os valores no localStorage
   localStorage.setItem('nome', name);
   localStorage.setItem('ticketType', ticketType);
   // redireciona para a página de ingresso
   window.location.href = 'ingresso-comprado.html';
});

