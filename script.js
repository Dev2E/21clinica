// Cookie Banner
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieBanner').style.display = 'none';
}

function declineCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
}

// Verificar se cookies já foram aceitos
window.addEventListener('load', function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieBanner').style.display = 'flex';
    } else {
        document.getElementById('cookieBanner').style.display = 'none';
    }
});

// Navegação ativa
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Menu Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Função para scroll suave
function scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Formulário de agendamento
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obter dados do formulário
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        specialty: document.getElementById('specialty').value,
        date: document.getElementById('date').value
    };

    // Aqui você pode enviar os dados para um backend
    console.log('Dados do agendamento:', formData);

    // Simular sucesso
    successMessage.style.display = 'block';
    bookingForm.reset();

    // Esconder mensagem após 5 segundos
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
});

// Validação de data mínima
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;

// Atualizar link ativo ao fazer scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
