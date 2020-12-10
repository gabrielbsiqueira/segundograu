var qtdCliques =0;
function Enviar() {
  var nome = document.getElementById("nomeid");
  qtdCliques++;
  document.formulario.btClique.value = "O usúario clicou " + qtdCliques + " vez(es).";

if (phone.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}
var limpartexto = document.querySelector("#texto");
  var btn = document.querySelector("#limpar");
  btn.onclick = function limpartexto(){
  limpartexto.value = " ";} 

function mask(o, f) {
  setTimeout(function() {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "$1");
  }
  return r;
}

function trocar(){
var obj=document.getElementById('coluna');
if(obj.className=='fundo1'){
  obj.className='fundo';
}else{
  obj.className='fundo1';
 }
} 



