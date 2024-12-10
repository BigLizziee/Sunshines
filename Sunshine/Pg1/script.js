const toggleButton = document.getElementById('dark');
const body = document.body;

const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Referência às imagens
const logo = document.getElementById('logo');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => link.classList.toggle('dark-mode'));

    
    if (body.classList.contains('dark-mode')) {
        logo.src = '../img/dark1.png'; 
        image1.src = '../img/dark2.png'; 
        image2.src = '../img/dark3.png'; 
        image3.src = '../img/dark4.png'; 
        image4.src = '../img/dark5.png'; 
    } else {
        logo.src = '../img/Sunshine.png'; 
        image1.src = '../img/pg01.png'; 
        image2.src = '../img/4.png';
        image3.src = '../img/5.png'; 
        image4.src = '../img/7.png'; 
    }
});
const button = document.getElementById('dark');
const icon = document.getElementById('icon');

// Alterar ícone ao clicar no botão
button.addEventListener('click', () => {
    if (icon.classList.contains('fa-sun')) {
        icon.classList.remove('fa-sun'); // Remover ícone do sol
        icon.classList.add('fa-moon'); // Adicionar ícone da lua
        button.style.backgroundColor = '#333'; // Alterar a cor do fundo para um tom escuro (lua)
    } else {
        icon.classList.remove('fa-moon'); // Remover ícone da lua
        icon.classList.add('fa-sun'); // Adicionar ícone do sol
        button.style.backgroundColor = '#ff66b2'; // Voltar a cor de fundo para rosa (sol)
    }
});



