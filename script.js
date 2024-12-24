document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const responseDiv = document.getElementById('response');
    const explorePrompt = document.getElementById('explorePrompt');
    
    if (name) {
        responseDiv.innerText = `¡Hola, ${name}! ¡Encantado de conocerte!`;
        explorePrompt.classList.remove('hidden'); // Muestra opciones de exploración
    } else {
        responseDiv.innerText = 'Por favor, escribe tu nombre.';
    }
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function goHome() {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById('homeSection').classList.remove('hidden');
}
