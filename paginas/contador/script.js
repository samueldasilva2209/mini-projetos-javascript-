let botaoIncremento = document.querySelector("#incremento");
let botaoDecremento = document.querySelector("#decremento");
let botaoResetar = document.querySelector("#resetar");
let painel = document.querySelector("#painel");
let cont = 0;

function incrementar() {
  cont++;
  painel.innerHTML = cont;
  trocaCor();
}

function decrementar() {
  cont--;
  painel.innerHTML = cont;
  trocaCor();
}
function resetar() {
  cont = 0;
  painel.innerHTML = cont;
  trocaCor();
}
function trocaCor() {
  if (cont < 0) {
    painel.style.color = "red";
  } else if (cont > 0) {
    painel.style.color = "blue";
  } else {
    painel.style.color = "black";
  }
}

botaoIncremento.addEventListener("click", incrementar);
botaoDecremento.addEventListener("click", decrementar);
botaoResetar.addEventListener("click", resetar);
