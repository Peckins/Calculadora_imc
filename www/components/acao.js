// This is a JavaScript file

$(document).on("click", ".btn", function(){
  var peso = parseFloat($("#peso").val());
  var altura = parseFloat($("#altura").val());
  
  var result = peso / (altura * altura);
  if (result < 18.5){
    $("#resultado").val("Muito magro!");
  }
  else if ((result >= 18.5) && (result <= 24.99)){
    $("#resultado").val("Peso normal!");
  }
  else if ((result >= 25) && (result <= 29.99)){
    $("#resultado").val("Acima do peso!");
  }
  else if ((result >= 30) && (result <= 34.99)){
    $("#resultado").val("Obeso!");
  }
  else if ((result >= 35) && (result <= 39.99)){
    $("#resultado").val("Obesidade severa!");
  }
  else if (result > 40){
    $("#resultado").val("Obesidade mórbida!");
  }
  else{
    $("#resultado").val("Valor não reconhecido!");
  }
  //$("#resultado").val(result);
});