let votos = [0, 0, 0];
function voto(candidato) {
    votos[candidato - 1]++;
    updateResultado();
}
function updateResultado() {
    document.getElementById('candidato1').textContent = `Candidato 1: ${votos[0]} votos`;
    document.getElementById('candidato2').textContent = `Candidato 2: ${votos[1]} votos`;
    document.getElementById('candidato3').textContent = `Candidato 3: ${votos[2]} votos`;
}