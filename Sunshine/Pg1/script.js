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

    // Mudar as imagens dependendo do modo
    if (body.classList.contains('dark-mode')) {
        logo.src = '../img/dark1.png'; // Caminho para a imagem do logo no modo escuro
        image1.src = '../img/dark2.png'; // Caminho para a imagem 1 no modo escuro
        image2.src = '../img/dark3.png'; // Caminho para a imagem 2 no modo escuro
        image3.src = '../img/dark4.png'; // Caminho para a imagem 3 no modo escuro
        image4.src = '../img/dark5.png'; // Caminho para a imagem 4 no modo escuro
    } else {
        logo.src = '../img/Sunshine.png'; // Caminho para a imagem do logo no modo claro
        image1.src = '../img/pg01.png'; // Caminho para a imagem 1 no modo claro
        image2.src = '../img/4.png'; // Caminho para a imagem 2 no modo claro
        image3.src = '../img/5.png'; // Caminho para a imagem 3 no modo claro
        image4.src = '../img/7.png'; // Caminho para a imagem 4 no modo claro
    }
});