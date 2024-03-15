let botaoGerarCor = document.querySelector("#bt-gerar");
let painel = document.querySelector("#painel");
let descricaoCor = document.querySelector("#desc-cor");
let botaoTransparencia = document.querySelector("#range-transparencia");

let rgb;

function trocaCor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let a = Number(botaoTransparencia.value) / 100;
  rgb = `RGBA(${r},${g},${b},${a})`;
  painel.style.backgroundColor = rgb;
  descricaoCor.innerHTML = rgb;

  console.log(rgb);
  console.log(a);
}

botaoGerarCor.addEventListener("click", trocaCor);
