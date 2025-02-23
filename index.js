var indicador = 0;

for (let index = 0; index < 4; index++) {
  const img = document.getElementsByClassName("simbolo")[index];
  
  img.addEventListener("click", function () {
    // alert("fue activado");
    if (indicador == 0) {
      document.getElementsByTagName("details")[index].open = true;  
      img.src = "assets/images/icon-minus.svg";
      indicador = 1;
    } else {
      document.getElementsByTagName("details")[index].open = false;  
      img.src = "assets/images/icon-plus.svg";
      indicador = 0;
    }
  });
}