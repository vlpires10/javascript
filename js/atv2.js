function maioridade() {
  var ano = document.getElementById("ano");
  console.log(ano.value);
  var idade = 2018 - ano.value;
  console.log(idade);
  ///////pegar ano do sistema
  var datadosistema = new Date();
  var anodosistema = datadosistema.getFullYear();
  console.log(anodosistema);
  idade = anodosistema - ano.value;
  console.log ("voce possue: "+idade);
  alert("sua idade é, "+ idade);

}
