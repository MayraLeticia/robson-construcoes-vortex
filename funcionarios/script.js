var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var dados = JSON.parse(decodeURIComponent(urlParams.get('dados')));

var tabela = document.querySelector('table');
var row = tabela.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

cell1.innerHTML = dados.nome;
cell2.innerHTML = dados.cargo;