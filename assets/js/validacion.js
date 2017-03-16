var botoni = document.getElementById('botoni');
botoni.addEventListener("click",function (e) {
  e.preventDefault();

  var n = document.getElementById('name').value;
  var ln= document.getElementById('lastName').value;
  var adr=document.getElementById("address").value;
  var email = document.getElementById("email").value;
  var phone=document.getElementById("phone").value;
   //MATCH -- compara cadena con expr.reg (ex.reg - encontradas en inter)
   var letras1 = n.match(/[A-Z]{1,}[a-z]+/);  //distincion entre mayusculas y min.
   var letras2 = ln.match(/[A-Z]{1,}[a-z]+/);

   // condiciones
    if((n.length == 0)||(ln.length == 0)||(phone.length==0)||(email.length == 0)||(address.length==0)){
      alert ("Ingrese Campos Obligatorio");
    }else if(n != letras1 ){
       alert ("Nombre Invalidos \n *Primera Letra Mayuscula ")
     }else if (ln!= letras2) {
      alert ("Apellidos Invalidos  \n *Primera Letra Mayuscula")
      // formato de validacion de un email
    }else if (phone.length >10) {
      alert("Ingrese Numero de 9 digitos")
    }else{
      alert( n +" "+ ln+ " " + "Datos Aceptados :)")
    }
});
