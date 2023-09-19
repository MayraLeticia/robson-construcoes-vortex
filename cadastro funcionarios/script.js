document.getElementById ("submit-button").addEventListener("click", function() {
    
    var nome = document.getElementById("name").value;
    var cargo = document.getElementById("role").value;

    var dados = {
        nome: nome,
        cargo: cargo
    };

    var UrlDestino = "../funcionarios/index.html?" + encodeURIComponent(JSON.stringify(dados));

    window.location.href = UrlDestino;
});