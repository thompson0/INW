const body = document.querySelector('body');

const JV = [
  {
    image: './img/image.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  }
]

const header = document.createElement('header');
header.className = 'banner';
const h1 = document.createElement('h1');
h1.textContent = 'Bem-vindo ao Portifolio Joao Vitor Lombardi!';
header.appendChild(h1);
body.appendChild(header);

const main = document.createElement('main');
main.className = 'apresentacao';
const apresentacao = document.createElement('section');
apresentacao.className = 'apresentacao-conteudo';
const img = document.createElement('img');
img.className = 'apresentacao-imagem';
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo1wRWL4jvy2TG37xGDK9EPcU6T7M3VaEjgxTHaP7jr0N_jt_GYaueKBbziPCVQOcp6I&usqp=CAU';
const p = document.createElement('p');
p.className = 'apresentacao-texto';
p.textContent = 'Sou um estudante dedicado e entusiasmado de programação, com uma paixão evidente por desvendar os mistérios do mundo da tecnologia. Desde cedo, demonstrei um interesse inabalável em compreender como os sistemas funcionam e em encontrar soluções criativas para problemas complexos.';
apresentacao.appendChild(img);
apresentacao.appendChild(p);
main.appendChild(apresentacao);

const formulario = document.createElement('section');
formulario.className = 'formulario';
const h2Form = document.createElement('h2');
h2Form.textContent = 'Entre em Contato';
const form = document.createElement('form');

const inputNome = document.createElement('input');
inputNome.type = 'text';
inputNome.name = 'nome';
inputNome.placeholder = 'Seu Nome';
inputNome.required = true;

const inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.name = 'email';
inputEmail.placeholder = 'Seu E-mail';
inputEmail.required = true;

const textarea = document.createElement('textarea');
textarea.name = 'mensagem';
textarea.placeholder = 'Sua Mensagem';
textarea.required = true;

const button = document.createElement('button');
button.type = 'submit';
form.appendChild(inputNome);
form.appendChild(inputEmail);
form.appendChild(textarea);
form.appendChild(button);
formulario.appendChild(h2Form);
formulario.appendChild(form);
main.appendChild(formulario);
body.appendChild(main);

const footer = document.createElement('footer');
footer.className = 'rodape';
const pRodape = document.createElement('p');
pRodape.textContent = 'Desenvolvido por Joao Vitor Lombardi';
footer.appendChild(pRodape);
body.appendChild(footer);