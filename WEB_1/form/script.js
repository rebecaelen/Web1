function mostrarDados() {
    const nome = document.getElementById('iptNome').value;
    const sobrenome = document.getElementById('iptSobrenome').value;
    const idade = parseInt(document.getElementById('iptIdade').value);
    const corFavorita = document.getElementById('iptColor').value;
    const dataNascimento = document.getElementById('iptDate').value;
    const senha = document.getElementById('iptPass').value;

    const titulacao = document.querySelector('input[name="nmNS"]:checked');
    const titulacaoTexto = titulacao ? titulacao.value : "Não informado";

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let linguagens = [];
    checkboxes.forEach((checkbox) => {
        linguagens.push(checkbox.value);
    });
    const linguagensTexto = linguagens.length > 0 ? linguagens.join(', ') : "Nenhuma";

    const estado = document.getElementById('iptEstado').value;
}

//JS NÃO FUNCIONAL E NÃO CORRIGIDO ><
