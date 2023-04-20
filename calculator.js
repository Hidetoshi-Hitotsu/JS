

function clickbutton(btn){
  let result = document.getElementById("result");
  let target_value = btn.innerHTML;
  
  if(target_value == "AC"){
    result.innerHTML = 0;
  }else if( target_value == "="){
    result.innerHTML = eval(result.innerHTML);
  }else if( target_value == 00){
    if(result.innerHTML == 0){
      result.innerHTML = 0;
    }else{
      result.innerHTML += target_value;
    }
  }else if( target_value == "+" || target_value == "-" || target_value == "*" || target_value == "/" || target_value == "."){
    var check = String(result.innerHTML).slice(-1);
      if( check == "+" || check == "-" || check == "*" || check == "/" || check == "."){ 
        var resultcheck = String(result.innerHTML).slice(0,-1);
        result.innerHTML = resultcheck + target_value;
      }else{
        result.innerHTML += target_value;
      }
  }else{
    if( result.innerHTML == 0){
      result.innerHTML = target_value;
    }else{
      result.innerHTML += target_value;
    }
  }
}


$(document).ready(function(){
  
  $("#dotbutton").click(function(){
    $("#dotbutton").prop('disabled',true);
  });
  
  $("#acbutton").click(function(){
    $("#dotbutton").prop('disabled',false);
  });
  
  $("#equalbutton").click(function(){
    $("#dotbutton").prop('disabled',false);
  });
  $(".cbutton").click(function(){
    $("#dotbutton").prop('disabled',false);
  });
  
});